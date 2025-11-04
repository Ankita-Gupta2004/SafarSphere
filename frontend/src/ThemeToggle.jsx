import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className={`flex items-center justify-center w-12 h-12 rounded-full 
                  ${darkMode ? "bg-emerald-700 hover:bg-emerald-600 shadow-emerald-300/40" 
                             : "bg-emerald-700 hover:bg-emerald-400 shadow-emerald-200/40"}`}
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
