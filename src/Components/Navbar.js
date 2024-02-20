import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid styleNavbar">
                    <a className="navbar-brand styleTitleNav" href="/">PORTFOLIO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse styleMenuNav" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 styleMenuItemsNav">
                            <li className="nav-item">
                                <Link to={'/Experience'} className="nav-link">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/Experience'} className="nav-link">EXPERIENCE</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/Experience'} className="nav-link">PROJECT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/Experience'} className="nav-link">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// import React from 'react'
// import './Navbar.css';
// import { useState } from 'react'; // FOR HAMBURGER MENU
// import { getImageUrl } from '../utils'

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     return (
//         <>
//             <nav className="styleNavbar">
//                 <a className="styleTitleNav" href="/">PORTFOLIO</a>
//                 <div className="styleMenuNav">
//                     <img className="styleMenuBtnNav"
//                         src={menuOpen ? getImageUrl("nav/menuIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button"
//                         onClick={() => setMenuOpen(!menuOpen)}
//                     />
//                     <ul className="styleMenuItemsNav">
//                         <li>
//                             <a href="#experience">ABOUT</a>
//                         </li>
//                         <li>
//                             <a href="#experience">EXPERIENCE</a>
//                         </li>
//                         <li>
//                             <a href="#projects">PROJECTS</a>
//                         </li>
//                         <li>
//                             <a href="#contact">CONTACT</a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar