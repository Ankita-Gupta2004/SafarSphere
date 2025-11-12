import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-[#0a071b] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo (Left) */}
          <div className="flex-shrink-0 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            SafarSphere
          </div>

          {/* Desktop Menu (Centered) */}
          <div className="hidden md:flex space-x-8 flex-1 justify-center items-center">
            <a href="#home" className="text-gray-800 dark:text-gray-200 hover:text-emerald-500">
              Home
            </a>
            <a href="#destinations" className="text-gray-800 dark:text-gray-200 hover:text-emerald-500">
              Destinations
            </a>
            <a href="#planner" className="text-gray-800 dark:text-gray-200 hover:text-emerald-500">
              Planner
            </a>
            <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-emerald-500">
              About
            </a>
            
          </div>

          {/* Theme Toggle (Right) */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200 focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0F0A28] px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="block text-gray-800 dark:text-gray-200 hover:text-emerald-500">
            Home
          </a>
          <a href="#destinations" className="block text-gray-800 dark:text-gray-200 hover:text-emerald-500">
            Destinations
          </a>
          <a href="#planner" className="block text-gray-800 dark:text-gray-200 hover:text-emerald-500">
            Planner
          </a>
          <a href="#about" className="block text-gray-800 dark:text-gray-200 hover:text-emerald-500">
            About
          </a>
          <button className="w-full bg-emerald-500 dark:bg-emerald-500 text-white rounded-lg px-4 py-2 hover:bg-emerald-600 dark:hover:bg-emerald-600 transition">
            Start Planning
          </button>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
