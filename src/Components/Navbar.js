import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="styleNavbar">
                <a className="styleTitleNav" href="/">PORTFOLIO</a>
                <div className="styleMenuNav">
                    <ul className="styleMenuItemsNav">
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#experience">EXPERIENCE</a>
                        </li>
                        <li>
                            <a href="#projects">PROJECTS</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
