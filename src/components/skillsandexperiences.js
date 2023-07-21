import React from 'react'
import './skillsandexperiences.css'
import Skills from './mySkills/mySkills'
import htmlImg from '../images/html.png';
import cssImg from '../images/css.png';
import jsImg from '../images/javascript.png';
import reactImg from '../images/reactjs.png';
import cImg from '../images/c.png';
import cppImg from '../images/cpp.png';
import pythonImg from '../images/Python.png';
import javaImg from '../images/java.png';

function skillsandexperiences() {
  return (
        
    <div className='skillsandexperiences'>
        <h1>Skills & Experiences</h1>
        <div className='skillsandexp'>
            <div className='skills'>
                <h1>Skills</h1>
                <div className='skillsList'>
                  <Skills bgimg={javaImg}></Skills>
                  <Skills bgimg={cImg}></Skills>
                  <Skills bgimg={jsImg}></Skills>
                  <Skills bgimg={htmlImg}></Skills>
                  <Skills bgimg={cssImg}></Skills>
                  <Skills bgimg={cppImg}></Skills>
                  <Skills bgimg={reactImg}></Skills>
                  <Skills bgimg={pythonImg}></Skills>

                </div>
                
            </div>
            <div className='Experience'>
              <h1>Experience</h1>
              <p>Despite lacking prior experience, I am highly motivated and actively working hard to acquire it. I possess a clean slate and a strong commitment to professionalism. I am adaptable and receptive, ready to contribute my best efforts.</p>
                </div>
        </div>
    </div>
  )
}

export default skillsandexperiences