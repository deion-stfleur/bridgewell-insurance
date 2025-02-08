import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen(!isAboutDropdownOpen);
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    return (
        <div className='navbar-container'>
        <nav className='navbar'>
            <div className='logo-container'>
            <Link to='/'>
                    <img className='logo' alt="Bridgwell Insurance Logo" src="https://iili.io/2iIvZBe.png" />
                </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
           
                <div className='links'>
                    <Link className='link' to='/'>
                        <p className='link-title'>Home</p>
                    </Link>

                    {/* About Dropdown */}
                    <div className='dropdown' onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown}>
                       <Link className='link' to="/about">
                       <div className='inner-nav-row'>
                        <p className='link-title dropdown-title'>About Us</p>
                        <IoIosArrowDown className='nav-arrow_0' />
                       </div>
                       </Link>
                        {isAboutDropdownOpen && (
                            <div className='dropdown-menu'>
                                <Link to='/why-choose-us' className='dropdown-link'>Why Choose Us?</Link>
                                <Link to='/faq' className='dropdown-link'>FAQ</Link>
                            </div>
                        )}
                    </div>

                    {/* Services Dropdown */}
                    <div className='dropdown' onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}>
                        
                        <Link className='link' to="/services">
                        <div className='inner-nav-row'>
                        <p className='link-title dropdown-title'>Services</p>
                        <IoIosArrowDown className='nav-arrow_0' />
                        </div>
                        </Link>
                        {isServicesDropdownOpen && (
                            <div className='dropdown-menu'>
                                <Link to='/services' className='dropdown-link'>Health Insurance</Link>
                                <Link to='/services' className='dropdown-link'>Medicaid Support</Link>
                            </div>
                        )}
                    </div>

                    <Link className='link' to='/blog'>
                        <p className='link-title'>Blog</p>
                    </Link>
                    <Link className='link' to='/contact'>
                        <p className='link-title'>Contact</p>
                    </Link>
                </div>
                <div className='contact-btn'>
                    <p className='link-title-cta-text'>Call us!</p>
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

        {/* Mobile Dropdown */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link onClick={toggleMenu} className='link' to='/about'>
                <p className='link-title'>About Us</p>
            </Link>
            <Link onClick={toggleMenu} className='link' to='/services'>
                <p className='link-title'>Services</p>
            </Link>
            <Link onClick={toggleMenu} to="/blog" className='link'>
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
