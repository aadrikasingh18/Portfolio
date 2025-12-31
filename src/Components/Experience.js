import './Experience.css';
import experiencePic from '../images/experience.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { experienceData } from '../data/experienceData';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <>
      <Container id="experience" className='experience'>
        <h2 className='experience-heading'>
          EXPERIENCE
        </h2>
        <Row>
          {/* LEFT DIV */}
          <Col lg={{ span: 5, order: 1 }} sm={{ span: 12, order: 1 }} className='experience-box-left'>
            <img src={experiencePic} alt={"Experience Illustration"} className='experience-img' />
          </Col>

          {/* RIGHT DIV */}
          <Col lg={{ span: 7, order: 2 }} sm={{ span: 12, order: 2 }} className='experience-box-right'>
            <ul className='experience-list'>
              {experienceData.map((exp) => (
                <ExperienceItem key={exp.id} experience={exp} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Experience