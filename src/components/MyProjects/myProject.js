import React from 'react'
import './myProject.css'
function myProject({img,topic,domain}) {
  return (
    <div className='myProject'>
      <img src={img}></img>
      <p>{topic}</p>
      <h4>{domain}</h4>
    </div>
  )
}

export default myProject