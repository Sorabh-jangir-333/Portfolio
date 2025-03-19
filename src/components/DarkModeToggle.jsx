import React, { useState } from "react";
import './DarkModeToggle.css';
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="fixed" id="darkModeToggle">
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
