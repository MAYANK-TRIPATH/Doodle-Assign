import React, { useState } from "react";
import "./Navbar.css"; // import the CSS file

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (

    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#">Sign In</a>
      </div>

      <button className={`hamburger ${showMenu ? "is-active" : ""}`} type="button" onClick={toggleMenu}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <ul className={`navbar-list ${showMenu ? "show-menu" : ""}`}>
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">Futurama</a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">Characters</a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">Go Pro</a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">Custom Character</a>
        </li>

        {showMenu && (
          <li className="navbar-item">
            <form className="navbar-search">
              <input type="text" placeholder="Search characters..." />
              <button type="submit">Search</button>
            </form>
          </li>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;
