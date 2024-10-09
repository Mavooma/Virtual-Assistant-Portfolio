import React from "react";
import "./Toolkit.css";

const Toolkit = () => {
  const tools = [
    { name: "Google Suite", icon: "/assets/google.png" },
    { name: "Skype", icon: "/assets/skype.png" },
    { name: "Zoom", icon: "/assets/zoom.png" },
    { name: "Microsoft Teams", icon: "/assets/business.png" },
    { name: "Slack", icon: "/assets/slack.png" },
    { name: "Dropbox", icon: "/assets/dropbox.png" },
    { name: "Trello", icon: "/assets/trello.png" },
    { name: "Web Development", icon: "/assets/app-development.png" },
    { name: "Video Editing", icon: "/assets/editing.png" },
  ];

  return (
    <section className="toolkit-section">
      <h2 className="title">IN MY TOOLKIT</h2>

      <div className="toolkit-grid">
        {tools.map((tool, index) => (
          <div className="tool-item" key={index}>
            <img src={tool.icon} alt={tool.name} className="tool-icon" />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Toolkit;
