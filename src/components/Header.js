import React from "react";
import "../styles/Header.scss";

// Icons
import { Moon, Sun } from "react-feather";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        Where in the world?
      </a>

      <div className="header__toggle-dark-mode">
        {darkMode ? (
          <Sun
            size={24}
            className="header__toggle-icon"
            onClick={() => setDarkMode(false)}
          />
        ) : (
          <Moon
            size={24}
            className="header__toggle-icon"
            onClick={() => setDarkMode(true)}
          />
        )}
      </div>
    </header>
  );
}
