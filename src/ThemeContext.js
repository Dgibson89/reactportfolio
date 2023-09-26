import React, { createContext, useState, useEffect } from 'react';

// Creating a context to hold the dark mode state and the toggle function
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // State to hold the current theme, with a default value fetched from localStorage or false
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true' ? true : false;
  });

  // UseEffect to update the localStorage value whenever darkMode state changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Function to toggle the dark mode state
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Providing the darkMode state and the toggle function to the child components
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
