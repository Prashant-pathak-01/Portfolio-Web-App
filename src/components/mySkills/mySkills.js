import React from 'react'
import './mySkills.css'
function mySkills({bgimg,name}) {
  return (
    <div className='mySkills'>
      <div className='mySkillsIcon' style={{backgroundImage: `url(${bgimg})`}}></div>
      <p className='mySkillsName'>{name}</p>
    </div>
  )
}

export default mySkills