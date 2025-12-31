import './Hero.css';
import heroPic from '../images/hero.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PERSONAL_INFO, HERO_CONTENT } from '../constants/constants';

const Hero = () => {
  return (
    <>
      {/* REACT BOOTSTRAP DOCS */}
      <Container id="about" className='hero-container'>
        <Row>
          {/* LEFT DIV*/}
          <Col lg={{ span: 8, order: 1 }} xs={{ span: 12, order: 2 }} className='hero-content-left'>
            <h1 className='hero-title'>{HERO_CONTENT.title}</h1>
            <p className="hero-description">{HERO_CONTENT.description}</p>
            <br />
            <p className="hero-description-end">{HERO_CONTENT.callToAction}</p>
            <div className='hero-btn'>
              <a href={`mailto:${PERSONAL_INFO.email}`} className='hero-contactBtn'>{HERO_CONTENT.buttonText}</a>
            </div>
          </Col>

          {/* RIGHT DIV */}
          <Col lg={{ span: 4, order: 2 }} xs={{ span: 12, order: 1 }} className='hero-content-right'>
            <img src={heroPic} alt={`${PERSONAL_INFO.name} Profile`} className='hero-img' />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Hero