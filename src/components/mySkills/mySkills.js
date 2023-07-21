import React from 'react'
import './mySkills.css'
function mySkills({bgimg}) {
  return (
    <div className='mySkills' style={{backgroundImage: `url(${bgimg})`}}></div>
  )
}

export default mySkills