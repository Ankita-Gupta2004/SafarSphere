import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import { MapPin } from "lucide-react";

export default function Destination() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  

  // 🔍 SEARCH HANDLER
  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setData(null);

    const city = await fetchCityInfo(query);

    if (!city) {
      setLoading(false);
      setError("City not found. Try a different name.");
      return;
    }

    const places = await fetchNearbyAttractions(city.lat, city.lon);

    setData({
      country: city.country,
      attractions: places
        .filter((p) => p.preview && p.preview.source)
        .map((p) => ({
          name: p.name,
          img: p.preview.source,
        })),
    });

    setLoading(false);
  };

  // 🌍 FETCH CITY DATA (GeoDB)
  async function fetchCityInfo(cityName) {
    try {
      const res = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityName}&limit=10`,
        {
          headers: {
            "X-RapidAPI-Key": GEO_DB_KEY,
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );

      const json = await res.json();
      const cities = json.data;

      if (!cities || cities.length === 0) return null;

      // Best exact match
      const exact = cities.find(
        (c) => c.city.toLowerCase() === cityName.toLowerCase()
      );

      const selected = exact || cities[0];

      return {
        lat: selected.latitude,
        lon: selected.longitude,
        country: selected.country || selected.countryCode,
      };
    } catch (err) {
      return null;
    }
  }

  // 🗺 FETCH ATTRACTIONS
  async function fetchNearbyAttractions(lat, lon) {
    const res = await fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${lon}&lat=${lat}&apikey=${OPENTRIPMAP_KEY}`
    );

    const json = await res.json();
    if (!json.features) return [];

    const top = json.features.slice(0, 12);

    const detailed = await Promise.all(
      top.map((p) => fetchPlaceDetails(p.properties.xid))
    );

    return detailed;
  }

  async function fetchPlaceDetails(xid) {
    const res = await fetch(
      `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${OPENTRIPMAP_KEY}`
    );
    return await res.json();
  }

  // 🎴 CARD RENDERING
  const renderCards = (items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          className="backdrop-blur-xl bg-white/10 dark:bg-gray-800/20 shadow-xl rounded-2xl overflow-hidden border border-white/20"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-sky-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Explore Your Next Destination
          </h1>

          <p className="text-white/80 mt-4 text-lg">
            Search any city — find attractions instantly.
          </p>

          {/* Search Bar */}
          <div className="flex mt-8 shadow-2xl rounded-full overflow-hidden backdrop-blur-xl bg-white/20 border border-white/30 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search Bali, Paris, Tokyo..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/70 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="px-6 bg-white text-teal-700 font-semibold hover:bg-gray-200 transition"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>

          {error && <p className="text-red-300 mt-3 text-lg">{error}</p>}
        </div>

        {/* Display Results */}
        {data && (
          <div className="max-w-7xl mx-auto space-y-14 text-white">
            <h2 className="text-3xl font-bold text-center">
              Country: {data.country}
            </h2>

            {/* Attractions Section */}
            {data.attractions.length > 0 ? (
              <section className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-7 h-7 text-emerald-300" />
                  <h3 className="text-2xl font-bold">Top Attractions</h3>
                </div>

                {renderCards(data.attractions)}
              </section>
            ) : (
              <p className="text-center text-white/80">
                No attractions found for this city.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
