import React from "react";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/assets/braids.png" alt="Personal Assistant" />
        </div>
        <div className="hero-text">
          <h1>HELLO</h1>
          <h2>Your trusted Virtual Assistant</h2>
          <p>
            I specialize in providing professional support to help you manage
            your tasks efficiently. Whether it's administrative work, social
            media management, or customer service, I’m here to lighten your
            load, allowing you to focus on what really matters.
          </p>
          <br />
          <p>Let’s take your business to the next level together.</p>
          <br />
          <a href="/assets/Vuyelwa.pdf" download className="hero-button">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
