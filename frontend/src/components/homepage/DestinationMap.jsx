import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function DestinationMap() {
  const [position, setPosition] = useState([20, 77]); // default center (India)
  const [searchQuery, setSearchQuery] = useState("");

  // Nominatim search
  const searchLocation = async () => {
    if (!searchQuery) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`
      );
      const data = await res.json();
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setPosition([lat, lon]);
      } else {
        alert("Location not found!");
      }
    } catch (err) {
      console.error(err);
      alert("Error searching location");
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Explore Destinations
      </h2>

      {/* Search Bar */}
      <div className="flex w-full max-w-md gap-2">
        <input
          type="text"
          placeholder="Enter a destination"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 p-3 rounded-l-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={searchLocation}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 rounded-r-xl transition"
        >
          Go
        </button>
      </div>

      {/* Map Container */}
      <div className="w-full max-w-5xl h-[500px] rounded-xl overflow-hidden shadow-lg mt-6">
        <MapContainer
          center={position}
          zoom={5}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
          key={JSON.stringify(position)} // forces map re-init if position changes
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              {searchQuery || "Selected Location"}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
