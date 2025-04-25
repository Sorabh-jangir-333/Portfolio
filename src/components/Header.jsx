import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="Services"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="ContactSection"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
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
      <a
  href="/sorabh_resume.pdf"
  download="Sorabh_CV.pdf"
  className="download-btn"
  onClick={() => toast.success("Download started! 🎉")}
>
  Download CV
</a>
    </header>
  );
};
<ToastContainer position="top-center" />

export default Header;
