import React from 'react'
import './Contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

              <a href="https://www.linkedin.com/in/aadrika-singh-035219205/" target="_blank" rel="noreferrer" className="contact-btn">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://github.com/aadrikasingh18" target="_blank" rel="noreferrer" className="contact-btn">
                <i className="fab fa-github"></i>
              </a>

              <a href="https://wa.me/6388267640" target="_blank" rel="noreferrer" className="contact-btn">
                <i className="fab fa-brands fa-whatsapp"></i>
              </a>

              <a href="https://twitter.com/aadrika_singh__" target="_blank" rel="noreferrer" className="contact-btn">
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