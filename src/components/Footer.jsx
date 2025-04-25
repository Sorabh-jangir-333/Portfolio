import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" py-6">
      <div className="container mx-auto text-center fade-in">
        <p>© 2025 Sorabh | All Rights Reserved</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.instagram.com/itz_sorabh_jangir/"
            className="social-link"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/sorabh-jangir-368645280/"
            className="social-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sorabh-jangir-333/"
            className="social-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
