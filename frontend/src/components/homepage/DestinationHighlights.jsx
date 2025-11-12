import { motion } from "framer-motion";
import { MapPin, Calendar, DollarSign } from "lucide-react";

const destinations = [
  {
    name: "Bali, Indonesia",
    image: "https://source.unsplash.com/600x800/?bali,beach",
    season: "Apr - Oct",
    cost: "$1200",
    activities: ["Surfing", "Temples", "Beaches"],
  },
  {
    name: "Switzerland",
    image: "https://source.unsplash.com/600x800/?switzerland,mountains",
    season: "Jun - Sep",
    cost: "$2500",
    activities: ["Hiking", "Skiing", "Scenic Train"],
  },
  {
    name: "Kyoto, Japan",
    image: "https://source.unsplash.com/600x800/?kyoto,japan",
    season: "Mar - May",
    cost: "$1800",
    activities: ["Temples", "Cherry Blossoms", "Culture"],
  },
  {
    name: "Santorini, Greece",
    image: "https://source.unsplash.com/600x800/?santorini,sea",
    season: "May - Oct",
    cost: "$2000",
    activities: ["Sunsets", "Beaches", "Boats"],
  },
  {
    name: "Machu Picchu, Peru",
    image: "https://source.unsplash.com/600x800/?machu-picchu",
    season: "Apr - Oct",
    cost: "$2200",
    activities: ["Trekking", "History", "Nature"],
  },
  {
    name: "Paris, France",
    image: "https://source.unsplash.com/600x800/?paris",
    season: "Apr - Jun, Sep - Oct",
    cost: "$2100",
    activities: ["Museums", "Food", "Romance"],
  },
];

export default function DestinationHighlights() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-100 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Top Destinations to Explore
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Discover the most inspiring travel spots and plan your perfect adventure.
        </p>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 lg:px-8">
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Background Image */}
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">{dest.name}</h3>

              <div className="flex items-center text-white text-sm mb-2 gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {dest.season}
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" /> {dest.cost}
                </div>
              </div>

              <p className="text-white text-sm mb-3">
                {dest.activities.join(", ")}
              </p>

              <button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-4 py-2 rounded-full text-sm transition">
                Plan Trip
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
