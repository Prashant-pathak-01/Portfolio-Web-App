import React from "react";
import "./Experience.css";

import NIlogo from "../images/national-instruments-logo.png";

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "SDE Intern",
      company: "National Instruments",
      techstack: ["C#", ".NET", "WPF", "MVVM", "LabVIEW"],
      timeframe: "July 2025 - Present",
      location: "Bengaluru, India",
      logo: NIlogo,
      website: "https://www.ni.com/",
      description:
        ["Built a new feature for VeriStand (NI’s real-time testing software) that lets engineers drag and drop LabVIEW VIs (small functional blocks/programs in LabVIEW) directly into VeriStand and run them live.","Designed the APIs and backend logic that make these VIs load, communicate, and execute smoothly inside VeriStand.", "Added full debugging support, so engineers can test and inspect a VI’s behavior even when VeriStand isn’t running, making troubleshooting way faster.","Cleaned up and optimized parts of the existing panel system to make the whole experience more stable and extensible."],
    },
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h1>Experience</h1>
        <div className="experience-list">
          {experiences.map((exp) => (
            <article className="experience-card" key={exp.id}>
              <div className="experience-header">
                <div className="experience-logo">
                  {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                  ) : (
                    <div className="logo-placeholder">{exp.company[0]}</div>
                  )}
                </div>
                
                <div className="experience-title-section">
                  <div className="experience-title">
                    <h3>{exp.role}</h3>
                    <a 
                      href={exp.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="company-name"
                    >
                      {exp.company}
                    </a>
                  </div>
                  <div className="tech-stack">
                    {exp.techstack.map((tech, index) => (
                      <span key={index}>{tech} {"\u00A0"}{index < exp.techstack.length - 1 ? " • " : ""}{"\u00A0"}</span>
                    ))}
                  </div>

                  <div className="experience-meta">
                    <span className="time">{exp.timeframe}</span>
                    <span className="dot">•</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="experience-body">
                {exp.description.map((point, index) => (
                  <li className="experience-desc" key={index}>{point+""}</li>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;