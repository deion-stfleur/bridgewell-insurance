import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [subNav, setIsSubNav] = useState(false);

    let timeoutId; // Timer to delay closing the dropdown

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseEnterServices = () => {
        clearTimeout(timeoutId); // Cancel any pending timeout
        setIsServicesDropdownOpen(true);
    };

    const handleMouseLeaveServices = () => {
        timeoutId = setTimeout(() => {
            setIsServicesDropdownOpen(false);
            setIsSubNav(false); // Ensure subnav is closed when leaving
        }, 200); // Adjust delay as needed
    };

    const handleMouseEnterSubNav = () => {
        clearTimeout(timeoutId); // Cancel any pending timeout
        setIsSubNav(true);
    };

    const handleMouseLeaveSubNav = () => {
        timeoutId = setTimeout(() => {
            setIsSubNav(false);
        }, 200); // Adjust delay as needed
    };

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen(!isAboutDropdownOpen);
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="logo-container">
                    <Link to="/">
                        <img
                            className="logo"
                            alt="Bridgewell Insurance Logo"
                            src="https://iili.io/2iIvZBe.png"
                        />
                    </Link>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="links">
                        <Link className="link" to="/">
                            <p className="link-title">Home</p>
                        </Link>

                        {/* About Dropdown */}
                        <div
                            className="dropdown"
                            onMouseEnter={toggleAboutDropdown}
                            onMouseLeave={toggleAboutDropdown}
                        >
                            <Link className="link" to="/about">
                                <div className="inner-nav-row">
                                    <p className="link-title dropdown-title">About Us</p>
                                    <IoIosArrowDown className="nav-arrow_0" />
                                </div>
                            </Link>
                            {isAboutDropdownOpen && (
                                <div className="dropdown-menu">
                                    <Link to="/why-choose-us" className="dropdown-link">
                                        Why Choose Us?
                                    </Link>
                                        <Link to="/events" className="dropdown-link">
                                        Events
                                    </Link>
                                    <Link to="/faq" className="dropdown-link">
                                        FAQ
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Services Dropdown */}
                        <div
                            className="dropdown"
                            onMouseEnter={handleMouseEnterServices}
                            onMouseLeave={handleMouseLeaveServices}
                        >
                            <Link className="link" to="/services">
                                <div className="inner-nav-row">
                                    <p className="link-title dropdown-title">Services</p>
                                    <IoIosArrowDown className="nav-arrow_0" />
                                </div>
                            </Link>

                            {isServicesDropdownOpen && (
                                <div className="dropdown-menu">
                                    <div
                                        className="subnav"
                                        onMouseEnter={handleMouseEnterSubNav}
                                        onMouseLeave={handleMouseLeaveSubNav}
                                    >
                                        <Link to="/services" className="dropdown-link">
                                            Health Insurance
                                        </Link>
                                        {subNav && (
                                            <div className="subnav-menu">
                                                <a
                                                    class="dropdown-link"
                                                    href="/services#medicare-assistance"
                                                >
                                                    Medicare Assistance
                                                </a>
                                                <a
                                                    class="dropdown-link"
                                                    href="/services#medicaid-assistance"
                                                >
                                                    Medicaid Assistance
                                                </a>
                                                {/* <a
                                                    class="dropdown-link"
                                                    href="/services#in-home-assitance"
                                                >
                                                    In-Home Services Assistance
                                                </a> */}
                                            </div>
                                        )}
                                    </div>
                                    <Link to="/services" className="dropdown-link">
                                        Medicaid Support
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link className="link" to="/blog">
                            <p className="link-title">Blog</p>
                        </Link>
                        <Link className="link" to="/contact">
                            <p className="link-title">Contact</p>
                        </Link>
                    </div>
                   <a href="tel:978-230-6080" style={{textDecoration: 'none'}}>
                    <div className="contact-btn">
                        <p className="link-title-cta-text">Call Today</p>
                    </div>
                   </a>
                   
                    <div>
                        <div
                            id="nav-icon1"
                            className={isMenuOpen ? 'open' : ''}
                            onClick={toggleMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link onClick={toggleMenu} className="link" to="/about">
                    <p className="link-title">About Us</p>
                </Link>
                <Link onClick={toggleMenu} className="link" to="/services">
                    <p className="link-title">Services</p>
                </Link>
                <Link onClick={toggleMenu} to="/blog" className="link">
                    <p className="link-title">Blog</p>
                </Link>
                <div onClick={toggleMenu}>
                    <p className="link-title">Close</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
