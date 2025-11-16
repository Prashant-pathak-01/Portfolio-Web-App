import React, { useEffect, useState } from "react";
import "./aboutMe.css";

function AboutMe() {
  const [typedName, setTypedName] = useState("");
  const fullName = "HI, I’M PRASHANT PATHAK";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index));
      index++;

      if (index > fullName.length) clearInterval(interval);
    }, 90); 

    return () => clearInterval(interval);
  }, []);

  function resumeDownload() {
    window.open(
      "https://drive.google.com/file/d/183tAQaakSub-KIPzeZcTDFqC6hB9IVRd/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <div className="aboutMe">
      <div className="details">
        <h1 className="typing">{typedName}</h1>

        <h3>SDE Intern @ National Instruments</h3>

        <p>
          I am a Computer Science student with experience in building scalable and reliable
          web applications. I enjoy solving challenging problems and learning new
          technologies. I like working on projects that help me grow and improve my skills,
          and I am always open to new opportunities and challenges.
        </p>

        <button onClick={resumeDownload}>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
          </svg>
          <span>Download Resume</span>
        </button>
      </div>

      <div className="programmerImg"></div>
    </div>
  );
}

export default AboutMe;
