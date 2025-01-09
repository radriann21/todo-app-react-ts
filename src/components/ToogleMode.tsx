import { useState, useEffect } from 'react';
import { Moon } from "./icons/Moon";
import { Sun } from "./icons/Sun";

export const ToogleMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      <div className="transition duration-500 ease-in-out transform">
        {darkMode ? <Sun /> : <Moon />}
      </div>
    </button>
  );
};