import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { FaHome } from 'react-icons/fa'
import { MdFamilyRestroom } from 'react-icons/md'

function Why() {
  return (
   <>
    <div className='about-container'>
            <div className='about-header'>

             

            </div>
            <div className='inner-about-container'>
              
            <p className='about-p'>As a locally owned and operated agency in Massachusetts</p>
            <p className='about-h5'>We’re committed to providing personalized support for your health insurance needs</p>
            </div>

        </div>

        <div id="values" className="values-container_0">
            <div className="values-header_0">
                <h2>Why choose us?</h2>
                <p>Core values of integrity, innovation, and excellence shape every solution we deliver.</p>
            </div>

            <div id="vgr-fix" className="values-grid_0 animate fadeIn">
                <div className="value-card_0">
                    <div className="icon-container_0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" fill="currentColor"/>
                            <path d="M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h3>Expert Medicaid Support</h3>
                    <p>We specialize in Medicaid applications and renewals, offering hands-on assistance to ensure you don’t face gaps in coverage.</p>
                </div>

                <div className="value-card_0">
                    <div className="icon-container_0">
                    <RiCustomerService2Fill />
                    </div>
                    <h3>Personalized Service</h3>
                    <p>Our team takes the time to understand your unique needs and provide the best health insurance options available.</p>
                </div>

                <div className="value-card_0">
                    <div className="icon-container_0">
                    <FaHome />
                    </div>
                    <h3>In-Home Services Referrals</h3>
                    <p>We also assist with connecting you to trusted partners for in-home care services, such as adult foster care and adult day care.</p>
                </div>

                <div className="value-card_0">
                    <div className="icon-container_0">
                    <MdFamilyRestroom />
                    </div>
                    <h3>Dedicated to Your Future</h3>
                    <p>Health insurance is about more than just today. It’s about securing your future. We help bridge the gap to a healthier tomorrow.</p>
                </div>
            </div>
        </div>

           {/* <div className="who-section">
            <div className="who-container">
                <div className="image-section">
                    <img 
                        src="https://images.pexels.com/photos/6667797/pexels-photo-6667797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Professional with laptop" 
                    />
                </div>
                
                <div className="text-section">

                    <div className='inner-text-section'>
                    <h1>Who we are</h1>
                    <p>
                    We’re here to make navigating your health insurance options easier and more accessible.
                    </p>

                    <Link className='link' to="/about">
                    <button className="about-us-btn">About us</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>  */}

        <Footer />
   
   </>
  )
}

export default Why
