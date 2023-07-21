import React from 'react'
import './aboutMe.css';
function aboutMe() {
  function noresumeFun(){
    alert("Sorry, resume will be uploaded soon");
  }
  return (
    <div className='aboutMe'>
        <div className='details'>
          <h1>HI, I AM PRASHANT PATHAK</h1>
          <h3>I am a student</h3>
          <p>I am a student of Computer Science . i have experience in building scalable , secure , and reliable web applications using various frameworks and technologies. I enjoy solving complex Problems and Learning new skills. I am always looking for new challanges and opportunities to grow up.</p>
          <button onClick={noresumeFun}>Download Resume</button>
        </div>
        
        <div className='programmerImg'></div>
    </div>
  )
}

export default aboutMe