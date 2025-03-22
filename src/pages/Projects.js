import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <div className="page">
      <h1 style={{ color: "#ff7e5f" }}>Our Projects</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ background: "#fdd835", padding: "10px", margin: "5px", borderRadius: "5px" }}>
          E-Commerce Website
        </li>
        <li style={{ background: "#4caf50", padding: "10px", margin: "5px", borderRadius: "5px" }}>
          AI Chatbot for Customer Support
        </li>
        <li style={{ background: "#2196f3", padding: "10px", margin: "5px", borderRadius: "5px" }}>
          Smart Energy Consumption Dashboard
        </li>
      </ul>
    </div>
  );
};

export default Projects;
