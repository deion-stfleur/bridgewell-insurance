import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
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

                        <Link className='link' to='/services'>
                        <p className='link-title'>Services</p>
                        </Link>

                        <Link className='link' to='/blog'>
                        <p className='link-title'>Blog</p>
                        </Link>
                        
                   

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
                <Link onClick={toggleMenu} className='link' to='/about'>
                <p className='link-title'>About Us</p>
                </Link>

                <Link onClick={toggleMenu}  className='link' to='/services'>
                <p className='link-title'>Services</p>
                </Link>

                <Link onClick={toggleMenu}  to="/blog" className='link'>
                <p className='link-title'>Blog</p>
                </Link>
        
                <div onClick={toggleMenu}>
                        <p className='link-title'>Close</p>
                        </div>
            </div>
        </div>
    )
}

export default Navbar
