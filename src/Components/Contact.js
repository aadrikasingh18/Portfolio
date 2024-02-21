import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className="contact-left">
          <div className="contact-title">CONTACT
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-icons">

            <a href="https://www.linkedin.com/in/aadrika-singh-035219205/" target="_blank" className="contact-btn">
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="https://github.com/aadrikasingh18" target="_blank" className="contact-btn">
              <i className="fab fa-github"></i>
            </a>

            <a href="https://wa.me/6388267640" target="_blank" className="contact-btn">
              <i className="fab fa-brands fa-whatsapp"></i>
            </a>

            <a href="https://twitter.com/aadrika_singh__" target="_blank" className="contact-btn">
              <i className="fab fa-twitter"></i>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact