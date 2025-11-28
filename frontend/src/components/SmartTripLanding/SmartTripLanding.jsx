import React from "react";
import { motion } from "framer-motion";
import { Compass, Map, Timer, Wallet, Sun, Sparkles } from "lucide-react";

export default function SmartTripLanding() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Your AI-Powered <span className="text-indigo-600">Smart Trip Planner</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Automatically generates personalized travel itineraries based on your
          destination, dates, interests, and budget — giving you the perfect trip plan
          in seconds.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <Compass className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 classname="text-xl font-semibold mb-2">Auto-Generated Itineraries</h3>
            <p className="text-gray-600">
              Get personalized day-by-day plans tailored to your location and travel style.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <Sparkles className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interest-Based Suggestions</h3>
            <p className="text-gray-600">
              From food to adventure, culture to nightlife — discover places that match your vibe.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <Timer className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Time Optimization</h3>
            <p className="text-gray-600">
              Minimizes travel time between spots and maximizes experiences.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <Wallet className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Budget-Aware Planning</h3>
            <p className="text-gray-600">
              Choose luxury, mid-range, or budget trips — the planner adjusts everything for you.
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <Sun className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Weather-Aware Adjustments</h3>
            <p className="text-gray-600">
              Your plan adapts automatically to real-time weather conditions.
            </p>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <Map className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Local Tips & Alternatives</h3>
            <p className="text-gray-600">
              Suggests nearby alternatives if a place is crowded or closed.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
