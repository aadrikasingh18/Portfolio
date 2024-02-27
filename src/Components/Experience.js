import React from 'react'
import './Experience.css';
import experiencePic from '../images/experience.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Experience = () => {
  return (
    <>
      <Container className='experience'>
        <h2 className='experience-heading'>
          EXPERIENCE
        </h2>
        <Row>
          {/* LEFT DIV */}
          <Col lg={{ span: 5, order: 1 }} sm={{ span: 12, order: 1 }} className='experience-box-left'>
            <img src={experiencePic} alt={"pic"} className='experience-img' />
          </Col>

          {/* RIGHT DIV */}
          <Col lg={{ span: 7, order: 2 }} sm={{ span: 12, order: 2 }} className='experience-box-right'>
            <ul className='experience-list'>
              <li>
                <div className="exp">
                  <p className='exp-role'>
                    Frontend Developer, Skillvalley
                  </p>
                  <p className='exp-date'>Aug, 2023 - Oct, 2023</p>
                  <p className='exp-des'>• Developed a dynamic product that simplifies content management for writers, to share stories and ideas.
                    <br></br>
                    • Conducted user interviews and executed UX research to gather valuable insights and enhance project development.</p>
                </div>
              </li>

              <li>
                <div className="exp">
                  <i class="fa-solid fa-location-dot"></i>
                  <p className='exp-role'>
                    Web Developer, Remote Sensing Application Center
                  </p>
                  <p className='exp-date'>July, 2023 - Aug, 2023</p>
                  <p className='exp-des'>• Developed and implemented a comprehensive login and registration form.
                    <br></br>
                    • Worked on optimizing user experience, validating inputs, and implementing responsive design elements.</p>
                </div>
              </li>

              <li>
                <div className="exp">
                  <p className='exp-role'>
                    Frontend Developer, Big Data Center Of Excellence
                  </p>
                  <p className='exp-date'>Oct, 2021 - Dec, 2021</p>
                  <p className='exp-des'>• Collaborated with 6 other team members to create and maintain the company’s website and other projects.
                    <br></br>
                    • Conducted research involving 500 users to enhance website functionality and user experience.</p>
                </div>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Experience
