import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </nav>
      
      {/* Toggle Button */}
      <button className="menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>

       {/* Download CV Button */}
       <a href="/sorabh_resume.pdf" download="Sorabh_CV.pdf" className="download-btn">
        Download CV
      </a>
    </header>
  );
};

export default Header;
