import React from "react";
import "./Services.css";

const services = [
  {
    title: "ADMINISTRATIVE SERVICES",
    description:
      "With my meticulous administrative services, I ensure that your daily operations run smoothly and efficiently, allowing you to focus on what truly matters.",
    image: "/assets/VA.jpg", // Replace with actual image file name in public folder
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "I craft visually stunning and highly functional websites tailored to your unique needs, ensuring a seamless user experience that drives engagement and growth.",
    image: "/assets/Web.jpg", // Replace with actual image file name in public folder
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    description:
      "I manage your social media presence with creativity and strategy, driving engagement and building a strong online community that resonates with your brand.",
    image: "/assets/Social.jpg", // Replace with actual image file name in public folder
  },
  {
    title: "CONTENT CREATION",
    description:
      "I produce compelling and original content that captivates your audience, enhances your brand's voice, and drives meaningful interactions.",
    image: "/assets/creation.jpg", // Replace with actual image file name in public folder
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Services</h2> {/* Title added here */}
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
