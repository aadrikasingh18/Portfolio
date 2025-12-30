import React from 'react'
import './Navbar.css';

export default function Navbar() {
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark styleNavbar">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse styleTitleNav" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="nav-link">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')} className="nav-link">EXPERIENCE</a>
                        </li>
                        <li className="nav-item">
                            <a href="#project" onClick={(e) => handleSmoothScroll(e, 'project')} className="nav-link">PROJECT</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="nav-link">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}