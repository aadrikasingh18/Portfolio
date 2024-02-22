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
          <p className="hero-description">I am a developer, proficient in technologies like HTML, CSS, JS, ReactJS, NodeJS, Express, MongoDB, PostgreSQL, C, Java, Git & GitHub. </p><br></br>
          <p className="hero-description-end">Mail me here !</p>
          <div className='hero-btn'>

            <a href="mailto:aadrikas04@gmail.com" className='hero-contactBtn'>CONTACT ME</a>
          </div>
        </div>
        {/* RIGHT DIV */}
        <div className='hero-content-right'>
          <img src={heroPic} alt={"pic"} className='hero-img' />
        </div>
        {/* Circle for blur effect */}
        <div className="hero-topBlur"></div>
        {/* <div className="hero-bottomBlur"></div> */}
      </section>
    </>
  )
}

export default Hero
