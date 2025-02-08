import React from 'react'
import Footer from '../components/Footer'
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import MattImg from '../assets/Matt.png'
import { Link } from 'react-router-dom';


function Contact() {

   
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

        <div className='wd-container'>
        <div className='contact-title-container-top'>
                    <div className='contact-title-top-inner'>
                    <FaSquarePhone className='contact-icon-title' />
                    <p className='contact-title-btn'>Contact us</p>
                    </div>
                </div>
        </div>
        <div className='ct-container-page animate fadeIn'>
            <div className='inner-ct-left'>

           
            <p className='ct-h1'>Reach out to us directly</p>
            </div>
            <div className='inner-ct-right'>
            <p className='ct-p-right'>Have questions or need assistance? Reach out to us and we'll be happy to help!</p>
            </div> 
        </div>

        <div className='ct-container animate fadeIn'>
        <div className='contact-card'>
                 <FaSquarePhone className='contact-icon' />
                <p className='contact-p'>Phone Number</p>
                <p className='contact-copy'>978-230-6080</p>
            </div>
            <div className='contact-card'>
                <MdEmail className='contact-icon' />
                <p className='contact-p'>Email</p>
                <p className='contact-copy'>infor@bridgewellinsuranceagency.com</p>
            </div>

            <div className='contact-card'>
                 <FaFax className='contact-icon' />
                <p className='contact-p'>Fax</p>
                <p className='contact-copy'>978-400-4704</p>
            </div>

           
        </div>

        <div className='bottom-contact-container'>

            <div className='contact-img-left'>
                <img src={MattImg} className='contact-img' />
            </div>

            <div className='contact-img-right'>
                <p className='bottom-contact-h1'>Have more Questions?</p>
                <p>Our team is ready to assist you. Reach out today and get the answers you need with confidence.</p>
                
                <Link className='link' to='/faq'>
                <div>
                    <p>See More</p>
                </div>
                </Link>
            </div>
        </div>

        <Footer />  
    </>
  )
}

export default Contact
