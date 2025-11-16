import React, { useState } from "react";
import "./mySkills.css";

function MySkills({ bgimg, name, percentage = 80 }) {
  const [isHovered, setIsHovered] = useState(false);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="mySkills">
      <div 
        className="mySkillsContainer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="mySkillsIcon"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        <div className={`progressOverlay ${isHovered ? 'visible' : ''}`}>
          <svg className="progressRing" width="120" height="120">
            <circle
              className="progressRingCircle"
              stroke="var(--border-color)"
              strokeWidth="4"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
            />
            <circle
              className="progressRingCircle progressRingCircleFill"
              stroke="white"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={isHovered ? strokeDashoffset : circumference}
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
            />
          </svg>
          <span className="percentageText">{percentage}%</span>
        </div>
      </div>
      <p className="mySkillsName">{name}</p>
    </div>
  );
}

export default MySkills;