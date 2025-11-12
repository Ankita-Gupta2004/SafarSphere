import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white overflow-hidden py-16 px-4 lg:px-24">
      {/* Background floating circles */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-emerald-600/20 rounded-full animate-spin-slow"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-80px] w-72 h-72 bg-teal-500/20 rounded-full animate-spin-reverse"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Brand / Logo */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-emerald-400">SafarSphere</h1>
          <p className="text-gray-300 max-w-xs">
            Explore the world, plan trips effortlessly, and discover amazing destinations with our AI-powered tools.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-white text-lg mb-2">Quick Links</h2>
          <ul className="space-y-1 text-gray-300">
            <li className="hover:text-emerald-400 transition cursor-pointer">Home</li>
            <li className="hover:text-emerald-400 transition cursor-pointer">Destinations</li>
            <li className="hover:text-emerald-400 transition cursor-pointer">Planner</li>
            <li className="hover:text-emerald-400 transition cursor-pointer">About Us</li>
            <li className="hover:text-emerald-400 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-white text-lg mb-2">Subscribe</h2>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-xl border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-r-xl font-semibold transition">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Twitter className="w-6 h-6 hover:text-emerald-400 transition cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-emerald-400 transition cursor-pointer" />
            <Linkedin className="w-6 h-6 hover:text-emerald-400 transition cursor-pointer" />
            <Github className="w-6 h-6 hover:text-emerald-400 transition cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SafarSphere. All rights reserved.
      </div>
    </footer>
  );
}
