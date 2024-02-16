import './App.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Project from "./Components/Project"
import Contact from "./Components/Contact"

function App() {
  return (
    <>
      <div className='app'><Navbar /></div>
      <div className='app'><Hero /></div>
      <div className='app'><About /></div>
      <div className='app'><Experience /></div>
      <div className='app'><Project /></div>
      <div className='app'><Contact /></div>
    </>
  );
}

export default App;
