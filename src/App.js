import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Experience from "./Components/Experience"
import Project from "./Components/Project"
// import Skill from "./Components/Skill"
import Contact from "./Components/Contact"

function App() {
  return (
    <>
      <Router>
        <div className='app'><Navbar /></div>
        <div className='app'><Hero /></div>
        <div className='app'><Experience /></div>
        <div className='app'><Project /></div>
        {/* <div className='app'><Skill /></div> */}
        <div className='app'><Contact /></div>
      </Router>
    </>
  );
}

export default App;
