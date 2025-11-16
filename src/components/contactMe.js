import React, { useState } from 'react'
import './contactMe.css'
import CONTACT_ME from '../images/contact_me.svg'
function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    setIsSubmitting(true)
    // Form will still submit to Formspree, this is just for UI feedback
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  return (
    <div className='contact'>
      <div className='contactSVG'><img className='contact_Image' src={CONTACT_ME} alt="Contact Me" /></div>
    <div className='contactMe'>
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a project in mind or want to collaborate? Send me a message!</p>
      </div>
      <form action='https://formspree.io/f/mvojgzko' method='POST' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Full Name</label>
          <input 
            type='text' 
            id="username"
            placeholder='Enter your full name' 
            name='username' 
            autoComplete='off' 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type='email' 
            id="email"
            placeholder='Enter your email address' 
            name='email' 
            autoComplete='off' 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input 
            type='text' 
            id="subject"
            placeholder='What is this regarding?' 
            name='subject' 
            autoComplete='off' 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message"
            name='message' 
            placeholder='Tell me about your project or inquiry...' 
            cols="30" 
            rows="6" 
            autoComplete='off' 
            required
          ></textarea>
        </div>

        <button type='submit' className={`submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
    </div>
  )
}

export default ContactMe