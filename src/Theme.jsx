import React, { useState } from 'react';
import './Theme.css'; // We will define the styles below

function ThemeToggle() {
  // 1. Initialize state. Defaulting to 'light' mode.
  const [theme, setTheme] = useState('light');

  // 2. Define the toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'theme-dark'));
    
    // Alternative shorthand if using 'light' and 'dark':
    // setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // 3. Dynamically apply the class name based on the current state
    <div className={`app-container ${theme}`}>
      <div className="card">
        <h1>{theme === 'light' ? 'Light Mode ☀️' : 'Dark Mode 🌙'}</h1>
        <p>Click the button below to switch the background and text colors.</p>
        
        <button onClick={toggleTheme} className="toggle-btn">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}

export default ThemeToggle;