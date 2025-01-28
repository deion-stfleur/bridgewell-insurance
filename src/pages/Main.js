import React, { useState } from 'react'
import MainImg from '../assets/main.jpg'
import MattImg from '../assets/Matt.png'
import { CiMedicalCase } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";






function Main() {

    return (

        <>
            <div className='main-container'>

                <div className='main-h1-container'>
                    <div className='inner-h1-contianer'>
                        <p className='main-h1'>Your Trusted Insurance Partner for Massachusetts.</p>
                        <p className='main-h2'>Together, We Bridge the Gaps That Matter Most—Your Health, Your Future.</p>


                        <div className='main-btn'>
                            <p className='btn-title'>Get Started</p>
                        </div>
                    </div>
                </div>


                <div className='main-img-container'>
                    <img src={MainImg} alt='woman holding children' className='main-img' />
                </div>


            </div>


            <div className='section-2-container'>
                <div className='section-2'>
                    <div className='inner-section-2'>
                        <div className='section-2-title'>
                            <p className='section-2-h1'>Get Started with Medicaid Assistance</p>

                            <p className='section-2-bold'>Offering clear, honest, and reliable insurance solutions for peace of mind.</p>

                            <div className='section-2-btn'>
                                <p className='btn-title-sec-2'>See More Details</p>
                            </div>
                        </div>

                        <div className='section-2-text'>
                            <p className='section-2-p'>Welcome to Bridgewell Insurance Agency! We’re here to make navigating your health insurance options easier and more accessible. Whether you’re looking to apply for Medicaid, renew your coverage, explore health insurance options, or find trusted in-home care services, our team is here to guide you every step of the way. At Bridgewell, we don’t just provide insurance; we bridge the gap between where you are now and a more secure, healthier future.</p>

                            <p className='section-2-bold-p'>Hablemos Español:</p>
                            <p className='section-2-p'>We offer services in Spanish. Feel free to contact us and let us know how we can assist you in your preferred language.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='section-4-container'>

<div className='section-4'>
    <p className='section-4-h1'>Why Choose Us?</p>
    <p className='section-4-p'>Your Trusted Insurance Partner. Your Health, Your Future</p>

    <div className='section-4-box-row'>

        <div className='section-4-box'>

            <div className='inner-section-4-box'>
            <CiMedicalCase className='section-4-icon' />

            </div>

            <div>
                <p className='section-4-bold'>Expert Medicaid Support</p>
                <p className='section-4-copy'>We specialize in Medicaid applications and renewals, offering hands-on assistance to ensure you don’t face gaps in coverage.</p>
            </div>
        </div>

        <div className='section-4-box'>

            <div className='inner-section-4-box'>
            <RiCustomerService2Fill  className='section-4-icon' />
            </div>

            <div>
                <p className='section-4-bold'>Personalized Service</p>
                <p className='section-4-copy'>Our team takes the time to understand your unique needs and provide the best health insurance options available.</p>
            </div>
        </div>

        <div className='section-4-box'>

            <div className='inner-section-4-box'>
            <FaHome className='section-4-icon' />
            </div>

            <div>
                <p className='section-4-bold'>In-Home Services Referrals</p>
                <p className='section-4-copy'>We also assist with connecting you to trusted partners for in-home care services, such as adult foster care and adult day care.</p>
            </div>
        </div>

        <div className='section-4-box'>

            <div className='inner-section-4-box'>
            <MdFamilyRestroom className='section-4-icon' />
            </div>

            <div>
                <p className='section-4-bold'>Dedicated to Your Future</p>
                <p className='section-4-copy'>Health insurance is about more than just today. It’s about securing your future. We help bridge the gap to a healthier tomorrow.</p>
            </div>
        </div>
    </div>





</div>

</div>
            <div className='section-3-container'>
                <div className='section-3'>

                    <div className='section-3-text-container'>

                        <p className='section-3-h1'>Simple, transparent insurance services with no hidden surprises.</p>
                        <p className='section-3-p'>Partnering with us provides your business expert guidance and strategic insurance solutions.</p>


                    <div className='section-3-btn-row'>
                        <div className='call-btn'>
                            <p className='call-btn-text'>Schedule Time to talk</p>
                        </div>

                    
                    </div>


                    </div>

                    <div className='section-3-img-container'>
                        <img src={MattImg} alt='Matt' className='matt-img' />
                    </div>

                </div>

            </div>



            <div className='section-6-container'>

                <div>
                    <p className='section-6-main-h1'>Our Services</p>
                    <p className='section-6-main-p'>We specialize in helping individuals navigate the complexities of Medicare and Medicaid.</p>
                    <p className='section-6-second-p'>Whether you’re new to these programs or need help understanding your current options, our team is here to ensure you have the right coverage.</p>
                </div>


                <div className='section-6-row'>

                    <div className='section-6-box'>
                        <p className='section-6-bold'>Medicare Assistance</p>
                        <p className='section-6-copy'>We guide you through the various parts of Medicare, helping you choose between Original Medicare, Medicare Advantage, Part D prescription drug plans, and supplemental coverage based on your specific health needs and budget.</p>

                    </div>

                    <div className='section-6-box'>
                        <p className='section-6-bold'>Medicaid Assistance</p>
                        <p className='section-6-copy'>Our team is here to guide you through every step of the process, ensuring that you have the support you need to complete your application and maintain continuous coverage.
                        </p>

                    </div>

                    <div className='section-6-box'>
                        <p className='section-6-bold'>In-Home Services Assistance</p>
                        <p className='section-6-copy'>We help connect you with trusted providers for essential in-home services, such as adult foster care programs and Adult Day Health programs. Our role is to refer you to reputable partners who can meet your needs.
                        </p>

                    </div>

                </div>

            </div>


            <footer className='footer-container'>
                <div className='footer-content'>
                    <div className='footer-section'>
                    <img className='logo' alt="Bridgwell Insurance Logo" src="https://iili.io/2iIvZBe.png" />
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h3>Connect With Us</h3>
                        <div className='social-links'>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>&copy; {new Date().getFullYear()} Bridgewell Insurance Agency. All rights reserved.</p>
                </div>
            </footer>




          


        </>
    )
}

export default Main
