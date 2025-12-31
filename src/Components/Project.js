import './Project.css';
import projectPic from '../images/project.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { projectData } from '../data/projectData';
import ProjectItem from './ProjectItem';

const Project = () => {
  return (
    <>
      <Container id="project" className='project'>
        <h2 className='project-heading'>
          PROJECTS
        </h2>
        <Row>
          {/* RIGHT DIV ACC TO EXP*/}
          <Col lg={{ span: 7, order: 1 }} sm={{ span: 12, order: 2 }} className='project-box-right'>
            <ul className='project-list'>
              {projectData.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </ul>
          </Col>
          {/* LEFT DIV ACC TO EXP*/}
          <Col lg={{ span: 5, order: 2 }} sm={{ span: 12, order: 1 }} className='project-box-left'>
            <img src={projectPic} alt={"Project Illustration"} className='project-img' />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Project