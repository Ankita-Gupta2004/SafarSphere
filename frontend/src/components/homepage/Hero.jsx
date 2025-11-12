import { motion } from "framer-motion";
import { ArrowRight, MapPin, PlaneTakeoff, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
  className="relative flex flex-col items-center justify-start pt-28 md:pt-32 min-h-screen overflow-hidden 
bg-gradient-to-br from-emerald-900 via-teal-800 to-sky-900 text-white  
dark:bg-gradient-to-br dark:from-[#0a071b] dark:via-emerald-900 dark:to-[#0a071b]"
>

      {/* Floating Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl"
      >
        {/* Logo or Icon Line */}
        {/* Logo or Icon Line */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 border border-teal-400/40 rounded-full bg-white/10 backdrop-blur-sm shadow-md hover:shadow-teal-400/20 transition duration-300 dark:border-teal-300/30 dark:bg-white/5">
            <Sparkles className="text-yellow-400 w-4 h-4" />
            <span className="tracking-widest text-sm font-medium uppercase text-teal-200">
              Your Travel Buddy
            </span>
            <Sparkles className="text-yellow-400 w-4 h-4" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Plan Smarter. Travel <span className="text-teal-200">Better.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-teal-100/90 mb-8"
        >
          Discover destinations, auto-generate itineraries, and manage your
          budget — all in one intelligent platform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="group inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg hover:shadow-teal-500/30">
            Start Planning
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white/30 hover:border-teal-300 text-white px-6 py-3 rounded-full transition duration-300">
            <MapPin className="w-4 h-4" />
            Explore Destinations
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative Plane Animation */}
      <motion.div
        initial={{ x: -200, y: 100, opacity: 0 }}
        animate={{ x: [-200, 300, 800], y: [100, 50, -50], opacity: [0, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatDelay: 5 }}
        className="absolute bottom-20 left-0 z-0"
      >
        <PlaneTakeoff className="w-16 h-16 text-white/80 rotate-[10deg]" />
      </motion.div>
    </section>
  );
}
