import React from 'react'
import './platforms.css'
function platforms({img,name,link}) {
  return (
    <a href={link} target='_blank' style={{textDecoration:'none'}}>
    <div className='platforms'>
        <img src={img}></img>
        <h2>{name}</h2>
    </div>
    </a>

  )
}

export default platforms