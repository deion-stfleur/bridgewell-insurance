import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <div className='logo-container'>
                    <Link to='/' >
                    <img className='logo' alt="Bridgwell Insurance Logo" src="https://iili.io/2iIvZBe.png" />
                    </Link>
                    <div className='links'>
                        <Link className='link' to='/about'>
                        <p className='link-title'>About Us</p>
                        </Link>
                        <p className='link-title'>Services</p>
                        <p className='link-title'>Blog</p>
                    </div>
                </div>

                <div>
                    <div className='contact-btn'>
                        <p className='link-title-cta-text'>Let's Talk</p>
                    </div>

                    <div>
                        <div id="nav-icon1" className={isMenuOpen ? 'open' : ''} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <p className='link-title'>Services</p>
                <p className='link-title'>Contact</p>
                <p className='link-title'>About Us</p>
                <p className='link-title'>Blog</p>
                <p className='link-title'>Contact Us</p>
            </div>
        </div>
    )
}

export default Navbar
