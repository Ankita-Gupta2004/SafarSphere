import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <div className="bg-gradient-to-t from-white to-gray-100 dark:from-black dark:to-gray-900 py-12 px-4 lg:px-16">
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl overflow-hidden">
        {/* Animated background circles */}
        <motion.div
          className="absolute top-[-120px] left-[-120px] w-96 h-96 bg-white/10 rounded-full animate-spin-slow"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[-140px] right-[-100px] w-72 h-72 bg-white/20 rounded-full animate-spin-reverse"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative max-w-5xl mx-auto text-center px-4">
          {/* Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Plan Your Dream Trip Today
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-white/90 max-w-2xl mx-auto mb-10 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover new destinations, explore hidden gems, and create unforgettable memories. 
            Let our AI-powered trip planner make your journey effortless and fun.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="#plan-trip"
              className="inline-flex items-center gap-3 bg-white text-emerald-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-white/90 transition transform hover:-translate-y-1"
            >
              Start Planning
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Small tagline */}
          <motion.p
            className="mt-6 text-white/80 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Your next adventure is just a click away — explore the world today!
          </motion.p>
        </div>
      </section>
    </div>
  );
}
