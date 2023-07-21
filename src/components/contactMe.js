import React from 'react'
import './contactMe.css'
function contactMe() {
  return (
    <div className='contactMe'>
      <h1>Contact Me</h1>
      <form action='https://formspree.io/f/mvojgzko' method='POST'>
        <label>Full Name </label>
        <input type='text' placeholder='your Name' name='username' autoComplete='off' required></input>
        <label>Email</label>
        <input type='email' placeholder='your Email' name='email' autoComplete='off' required></input>
        <label>Subject</label>
        <input type='text' placeholder='subject' name='subject' autoComplete='off' required></input>
        <textarea name='message' cols="30" rows="10" autoComplete='off' required></textarea>
        <input type='submit'></input>

      </form>
    </div>
  )
}

export default contactMe