import React from 'react'
import './Hero.css';
import heroPic from '../images/hero.png'

const Hero = () => {
  return (
    <>
      <section className='hero-container'>
        {/* LEFT DIV*/}
        <div className='hero-content-left'>
          <h1 className='hero-title'>Hi! I'm Aadrika</h1>
          <p className="hero-description">I am a Full Stack Developer with an experience in React.Js and Node.Js. <br></br>
          Reach out to me </p>
          <div className='hero-btn'>

          <a href="mailto:myemail.com" className='hero-contactBtn'>CONTACT ME</a>
          </div>
        </div>
        {/* RIGHT DIV */}
        <div className='hero-content-right'>
          <img src={heroPic} alt={"pic"} className='hero-img' />
        </div>
        {/* Circle for blur effect */}
        <div className="hero-topBlur"></div>
        <div className="hero-bottomBlur"></div>
      </section>
    </>
  )
}

export default Hero
