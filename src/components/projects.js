import React from 'react'
import './projects.css';
import MyProject from'./MyProjects/myProject';
import PortfolioWebAppProject from '../images/portfolio_web_app_project.png'
import GenerateQrProject from '../images/generateQr_project.png'
import TodoProject from '../images/todo_web_app_project.png'
import ChatterProject from '../images/Chatter.png'
import HospitalManagementProject from '../images/HMSS.png'
function projects() {
  return (
    <div className='projects'>
      <h1>Projects Portfolio</h1>
      <div className='project_list'>
        <a href='#'><MyProject img={PortfolioWebAppProject} topic="Portfolio Web App" domain="Web Application"></MyProject></a>
        <a href='https://generateqr-project.netlify.app/' target='_blank'><MyProject img={GenerateQrProject} topic="GenerateQr Web App" domain="Web Application"></MyProject></a>
        <a href='https://todo-list-webapp-project.netlify.app/' target='_blank'><MyProject img={TodoProject} topic="To do Web App" domain="Web Application"></MyProject></a>
        <a href='https://github.com/Prashant-pathak-01/Chatter-website' target='_blank'><MyProject img={ChatterProject} topic="Chatting website" domain="Web Application"></MyProject></a>
        <a href='https://hospital-management-system-project.netlify.app/' target='_blank'><MyProject img={HospitalManagementProject} topic="Hospital Management sys." domain="Web Application"></MyProject></a>

      </div>
    </div>
  )
}

export default projects