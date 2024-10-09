import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "Administrative Services",
    description:
      "I streamline workflows by managing tasks, handling communications, organizing documents, maintaining schedules, coordinating travel arrangements, and providing personal assistance to ensure efficiency and focus.",
    image: "/assets/1.png", // Replace with actual image file name in public folder
  },
  {
    title: "Web Development",
    description:
      "I create user-friendly websites by designing responsive layouts, optimizing performance, ensuring accessibility, integrating APIs, enhancing SEO, and implementing secure coding practices for a seamless user experience.",
    image: "/assets/designs.png", // Replace with actual image file name in public folder
  },
  {
    title: "Social Media Management",
    description:
      "I manage social media by creating engaging content, scheduling posts, monitoring analytics, fostering audience engagement, running targeted campaigns, and maintaining brand consistency across platforms.",
    image: "/assets/2.png", // Replace with actual image file name in public folder
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">PORTFOLIO</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />
            <h3 className="portfolio-project-title">{project.title}</h3>
            <p className="portfolio-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
