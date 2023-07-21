import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import SkillsAndExperiences from './components/skillsandexperiences';
import CodingPlatforms from './components/codingPlatforms';
import Footer from './components/footer';
import ContactMe from './components/contactMe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
 
  
  return (
    <Router>
    <div >
    <Header></Header>

      <Routes>
        <Route path="/" element={
          <>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <SkillsAndExperiences></SkillsAndExperiences>
            <CodingPlatforms></CodingPlatforms>
          </>
        }></Route>

        <Route path="/contactMe" element={
          <>
            <ContactMe></ContactMe>
          </>
        }></Route>

        <Route path="/Projects" element={
          <>
            <Projects></Projects>
          </>
        }></Route>

        <Route path="/Platforms" element={
          <>
            <CodingPlatforms></CodingPlatforms>
          </>
        }></Route>

      
      </Routes>
      <Footer></Footer>

    </div>
    </Router>
  );
}


export default App;