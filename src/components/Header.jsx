import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".nav") && !e.target.closest(".menu-btn")) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => setIsMenuOpen(false);

    if (isMenuOpen) {
      document.addEventListener("click", closeMenu);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", closeMenu);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <nav className={`nav ${isMenuOpen ? "open" : ""}`} role="navigation">
        <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </nav>

      {/* Toggle Button */}
      <button 
        className="menu-btn" 
        onClick={toggleMenu} 
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? "X" : "☰"}
      </button>

      {/* Download CV Button */}
      <a href="/sorabh_resume.pdf" download="Sorabh_CV.pdf" className="download-btn">
        Download CV
      </a>
    </header>
  );
};

export default Header;
