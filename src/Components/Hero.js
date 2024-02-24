import React from 'react'
import './Hero.css';
import heroPic from '../images/hero.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  return (
    <>
      <Container className='hero-container'>
        <Row>
          {/* LEFT DIV*/}
          <Col>
            <div className='hero-content-left'>
              <h1 className='hero-title'>Hi! I'm Aadrika</h1>
              <p className="hero-description">I am a developer, proficient in technologies like HTML, CSS, JS, ReactJS, NodeJS, Express, MongoDB, PostgreSQL, C, Java, Git & GitHub. </p><br></br>
              <p className="hero-description-end">Mail me here !</p>
              <div className='hero-btn'>
                <a href="mailto:aadrikas04@gmail.com" className='hero-contactBtn'>CONTACT ME</a>
              </div>
            </div>
          </Col>

          {/* RIGHT DIV */}
          <Col>
            <div className='hero-content-right'>
              <img src={heroPic} alt={"pic"} className='hero-img' />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Circle for blur effect */}
      {/* <div className="hero-topBlur"></div> */}
      {/* <div className="hero-bottomBlur"></div> */}
    </>
  )
}

export default Hero
