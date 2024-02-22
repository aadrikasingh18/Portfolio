import React from 'react'
import './Project.css';
import projectPic from '../images/project.jpg'

const Project = () => {
  return (
    <>
      <section>
        <div className='project'>
          <h2 className='project-heading'>
            PROJECTS
          </h2>

          <div className='project-container'>
            {/* RIGHT DIV */}
            <div className='project-box-right'>
              <ul className='project-list'>
                <li>
                  <div className="pro">
                    <p className='pro-role'>
                      VEWRITE: A CONTENT MANAGEMENT TOOL
                    </p>
                    {/* <p className='pro-date'>Aug, 2023 - Oct, 2023</p> */}
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
                    {/* <p className='pro-date'>July, 2023 - Aug, 2023</p> */}
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
                    {/* <p className='pro-date'>Oct, 2021 - Dec, 2021</p> */}
                    <p className='pro-des'>• A project that transforms text by adding or removing elements to improve clarity or convey a specific message.
                      <br></br>
                      • Tech stack used are HTML, CSS, and JavaScript.</p>
                    <button type="button" className="btn btn-light" id="btn">LINK</button>
                    <button type="button" className="btn btn-light" id="btn">GITHUB</button>
                  </div>
                </li>

              </ul>
            </div>

            {/* LEFT DIV */}
            <div className='project-box-left'>
              <img src={projectPic} alt={"pic"} className='project-img' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
