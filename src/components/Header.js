import React from 'react';
import '../styles/Header.scss';

// Icons
import { Moon } from "react-feather";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        Where in the world?
      </a>

      <div className="header__toggle-dark-mode">
        <Moon size={24} className="header__toggle-icon"/>
      </div>
    </header>
  )
}
