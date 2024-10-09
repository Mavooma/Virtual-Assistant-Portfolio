import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="content-section">
      <div className="text-content">
        <h2 className="highlighted-name">ABOUT ME</h2>
        <p>
          Welcome to my virtual assistant portfolio! I’m thrilled to be
          considered for your administrative and digital needs. With a passion
          for organization and a knack for problem-solving, I offer a range of
          services designed to simplify your life and elevate your business.
          From streamlining administrative tasks and crafting engaging web
          content to managing social media and developing captivating websites,
          my goal is to provide seamless support tailored to your unique needs.
          I pride myself on delivering high-quality work with a personal touch,
          ensuring that every project is completed efficiently and effectively.
          <br /> <br />
          Let’s work together to achieve your goals and make your vision a
          reality—I'm here to help you succeed every step of the way!
        </p>
        <br />
        <br />
      </div>
      <div className="image-content">
        <img
          src="/assets/vooms.png"
          alt="Vuyelwa Mavuma - About Me"
          className="section-image"
        />
      </div>
    </section>
  );
};

export default About;
