import React, { useState, useEffect, useRef } from "react";
import "./skillsandexperiences.css";
import Skills from "./mySkills/mySkills";
import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import jsImg from "../images/javascript.png";
import reactImg from "../images/reactjs.png";
import cImg from "../images/c.png";
import cppImg from "../images/cpp.png";
import pythonImg from "../images/Python.png";
import javaImg from "../images/java.png";
import tailwindImg from "../images/tailwind.png";
import NodeImg from "../images/Nodejs.png";
import ExpressImg from "../images/express-js.png";
import FirebaseImg from "../images/firebase.png";
import MongoDBImg from "../images/mongodb.png";
import PostManImg from "../images/postman.png";
import VSCodeImg from "../images/VScode.png";
import githubImg from "../images/github_round.png";
import RedisImg from "../images/Redis.png";
import cSharpImg from "../images/CSharp.png";
import labviewImg from "../images/LabVIEW.png";
import dotNetImg from "../images/Dot_net.png";

function SkillsAndExperiences() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const achievements = [
    {
      id: 1,
      text: "Solved around 1300+ DSA problems with the highest rating of 1969 on LeetCode.",
      emoji: "🏆",
      link: "https://leetcode.com/u/prashantpathak01/"
    },
    {
      id: 2,
      text: "Knight on LeetCode (top 3%).",
      emoji: "♞",
      link: "https://leetcode.com/u/prashantpathak01/"
    },
    {
      id: 3,
      text: "Ranked 285 among 3300+ competitive programmers in GeeksforGeeks weekly coding contest 139.",
      emoji: "⚡",
      link: "https://practice.geeksforgeeks.org/contest/gfg-weekly-coding-contest-139/leaderboard"
    },
    {
      id: 4,
      text: "Secured a global rank of 983 in LeetCode Weekly Contest 403 among 36K+ participants.",
      emoji: "🌍",
      link: "https://leetcode.com/contest/weekly-contest-403/ranking/"
    },
    {
      id: 5,
      text: "Secured a global rank of 209 in CodeChef Starters 125 weekly contest.",
      emoji: "🔥",
      link: "https://www.codechef.com/rankings/START125C?itemsPerPage=100&order=asc&page=1&sortBy=rank"
    },
    {
      id: 6,
      text: "Solved more than 2000+ problems across platforms.",
      emoji: "💪",
      link: "#"
    }
  ];

  return (
    <div className="skillsandexperiences" ref={sectionRef}>
      <h1>Skills & Achievements</h1>
      <div className="skillsandexp">
        <div className="skills">
          <h1>Skills</h1>
          <div className="skillsList">
            <div className="skillsListSections">
              <Skills bgimg={javaImg} name={"Java"} percentage={80}></Skills>
              <Skills bgimg={pythonImg} name={"Python"} percentage={75}></Skills>
              <Skills bgimg={cppImg} name={"C++"} percentage={75}></Skills>
              <Skills bgimg={cSharpImg} name={"C#"} percentage={80}></Skills>
              <Skills bgimg={dotNetImg} name={".NET"} percentage={75}></Skills>
              <Skills bgimg={jsImg} name={"JavaScript"} percentage={80}></Skills>
              <Skills bgimg={labviewImg} name={"LabVIEW"} percentage={95}></Skills>
            </div>
            <div className="divider"></div>
            <div className="skillsListSections">
              <Skills bgimg={htmlImg} name={"HTML"} percentage={80}></Skills>
              <Skills bgimg={cssImg} name={"CSS"} percentage={70}></Skills>
              <Skills bgimg={reactImg} name={"ReactJS"} percentage={75}></Skills>
              <Skills bgimg={tailwindImg} name={"Tailwind CSS"} percentage={80}></Skills>
            </div>
            <div className="divider"></div>
            <div className="skillsListSections">
              <Skills bgimg={NodeImg} name={"NodeJS"} percentage={80}></Skills>
              <Skills bgimg={ExpressImg} name={"ExpressJS"} percentage={80}></Skills>
              <Skills bgimg={MongoDBImg} name={"MongoDB"} percentage={75}></Skills>
              <Skills bgimg={FirebaseImg} name={"Firebase"} percentage={70}></Skills>
              <Skills bgimg={RedisImg} name={"Redis"} percentage={70}></Skills>
            </div>
            <div className="divider"></div>
            <div className="skillsListSections">
              <Skills bgimg={VSCodeImg} name={"VS Code"} percentage={95}></Skills>
              <Skills bgimg={githubImg} name={"Git / Github"} percentage={85}></Skills>
              <Skills bgimg={PostManImg} name={"Postman"} percentage={80}></Skills>
            </div>
          </div>
        </div>
        <div className="Experience">
          <h1 className="achievements-title">Programming Achievements</h1>
          <div className="achievements-container">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`achievement-item ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="achievement-emoji">{achievement.emoji}</div>
                <div className="achievement-content">
                  <p className="achievement-text">{achievement.text}</p>
                </div>
                {achievement.link && (
                  <div className="achievement-link-container">
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                    >
                      Verify Achievement
                    </a>
                  </div>
                )}
                <div className="achievement-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsAndExperiences;