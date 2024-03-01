import React from 'react'
import './Project.css';
import projectPic from '../images/project.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Project = () => {
  return (
    <>
      <Container className='project'>
        <h2 className='project-heading'>
          PROJECTS
        </h2>
        <Row>
          {/* RIGHT DIV ACC TO EXP*/}
          <Col lg={{ span: 7, order: 1 }} sm={{ span: 12, order: 2 }} className='project-box-right'>
            <ul className='project-list'>
              <li>
                <div className="pro">
                  <p className='pro-role'>
                    VEWRITE: A CONTENT MANAGEMENT TOOL
                  </p>
                  <p className='pro-des'>• It has been crafted to empower writers in content creation and management, all while fostering seamless collaboration with fellow writers.
                    <br></br>
                    • Tech stack used are ReactJs, Tailwind CSS, Firebase, and Sentry.</p>
                  <button type="button" className="btn btn-light" id="btn">LINK</button>
                  <button type="button" className="btn btn-light" id="btn">GITHUB</button>
                </div>
              </li>

              <li>
                <div className="pro">
                  <p className='pro-role'>
                    TEXT TO SPEECH CONVERTER
                  </p>
                  <p className='pro-des'>• The goal is to enable users to input any text and obtain an audio output that represents the text naturally.
                    <br></br>
                    • Tech stack used are HTML, CSS, and JavaScript.</p>
                  <button type="button" className="btn btn-light" id="btn">LINK</button>
                  <button type="button" className="btn btn-light" id="btn">GITHUB</button>
                </div>
              </li>

              <li>
                <div className="pro">
                  <p className='pro-role'>
                    Frontend Developer, Big Data Center Of Excellence
                  </p>

                  <p className='pro-des'>• A project that transforms text by adding or removing elements to improve clarity or convey a specific message.
                    <br></br>
                    • Tech stack used are HTML, CSS, and JavaScript.</p>
                  <button type="button" className="btn btn-light" id="btn">LINK</button>
                  <button type="button" className="btn btn-light" id="btn">GITHUB</button>
                </div>
              </li>
            </ul>
          </Col>
          {/* LEFT DIV ACC TO EXP*/}
          <Col lg={{ span: 5, order: 2 }} sm={{ span: 12, order: 1 }} className='project-box-left'>
            <img src={projectPic} alt={"pic"} className='project-img' />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Project
