import './Contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SOCIAL_LINKS } from '../constants/constants';

const Contact = () => {
  return (
    <>
      <Container id="contact" className='contact'>
        <Row>
          {/* LEFT DIV*/}
          <Col lg={{ span: 6, order: 1 }} sm={{ span: 12, order: 2 }} className='contact-left'>
            <div className="contact-title">CONTACT
            </div>
          </Col>

          {/* RIGHT DIV */}
          <Col lg={{ span: 6, order: 2 }} sm={{ span: 12, order: 1 }} className='contact-right'>
            <div className="contact-icons">

              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="contact-btn" aria-label="LinkedIn Profile">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="contact-btn" aria-label="GitHub Profile">
                <i className="fab fa-github"></i>
              </a>

              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-btn" aria-label="WhatsApp Contact">
                <i className="fab fa-brands fa-whatsapp"></i>
              </a>

              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="contact-btn" aria-label="Twitter Profile">
                <i className="fab fa-twitter"></i>
              </a>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact