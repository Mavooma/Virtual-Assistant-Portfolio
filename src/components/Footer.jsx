import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">Mavooma</div>
        <ul className="footer-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a
          href="https://www.linkedin.com/in/vuyelwa-mavuma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Use absolute path to reference images in the public folder */}
          <img src="/assets/linkedin.png" alt="LinkedIn Profile" />
        </a>

        <div className="footer-bottom">
          <p>&copy; 2024 Vuyelwa Mavuma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
