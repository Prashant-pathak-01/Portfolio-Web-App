import React from 'react'
import './projects.css';
import MyProject from'./MyProjects/myProject';
import PortfolioWebAppProject from '../images/portfolio_web_app_project.png'
function projects() {
  return (
    <div className='projects'>
      <h1>Projects Portfolio</h1>
      <div className='project_list'>
        <a href='#'><MyProject img={PortfolioWebAppProject} topic="Portfolio Web App" domain="Web Application"></MyProject></a>

      </div>
    </div>
  )
}

export default projects