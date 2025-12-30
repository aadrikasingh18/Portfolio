import './App.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Experience from "./Components/Experience"
import Project from "./Components/Project"
// import Skill from "./Components/Skill"
import Contact from "./Components/Contact"
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <div className='app'><Navbar /></div>
      <div className='app'><Hero /></div>
      <div className='app'><Experience /></div>
      <div className='app'><Project /></div>
      {/* <div className='app'><Skill /></div> */}
      <div className='app'><Contact /></div>
    </>
  );
}

export default App;

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function ContainerExample() {
//   return (
//     <Container>
//       <Row>
//         <Col>1 of 1</Col>
//       </Row>
//     </Container>
//   );
// }

// export default ContainerExample;