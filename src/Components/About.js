import React from 'react'
import './About.css';
import aboutPic from '../images/about.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <>
      <section>
        <div className='about'>
          <h2 className='about-heading'>
            EXPERIENCE
          </h2>
          <div className='about-container'>
            {/* LEFT DIV */}
            <div className='about-box-left'>
              <img src={aboutPic} alt={"pic"} className='about-img' />
            </div>

            {/* RIGHT DIV */}
            <div className='about-box-right'>
              <ul className='about-list'>
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
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='icon'><path fill="#ffffff" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg> */}
                      Frontend Developer, Big Data Center Of Excellence
                    </p>
                    <p className='exp-date'>Oct, 2021 - Dec, 2021</p>
                    <p className='exp-des'>• Collaborated with 6 other team members to create and maintain the company’s website and other projects.
                      <br></br>
                      • Conducted research involving 500 users to enhance website functionality and user experience.</p>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
