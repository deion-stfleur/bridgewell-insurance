import React from 'react'
import Footer from '../components/Footer'
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { FaFacebook, FaSquarePhone } from "react-icons/fa6";
import MattImg from '../assets/Matt.png'
import { Link } from 'react-router-dom';
import { FaInstagramSquare } from "react-icons/fa";



function Contact() {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
  
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
          setVisible(entry.isIntersecting);
        });
      });
  
      const { current } = domRef;
      observer.observe(current);
  
      return () => observer.unobserve(current);
    }, []);
   
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

            <a href="tel:9782306080" className='contact-link contact-card'>
        <div>
                 <FaSquarePhone className='contact-icon' />
                <p className='contact-p'>Phone Number</p>
                <p className='contact-copy'>978-230-6080</p>
            </div>
            </a>

            <a href="mailto:infor@bridgewellinsuranceagency.com" className='contact-link contact-card'>
            <div>
                <MdEmail className='contact-icon' />
                <p className='contact-p'>Email</p>
                <p className='contact-copy'>infor@bridgewellinsuranceagency.com</p>
            </div>
            </a>

            <div className='contact-card'>
                 <FaFax className='contact-icon' />
                <p className='contact-p'>Fax</p>
                <p className='contact-copy'>978-400-4704</p>
            </div>

           
        </div>

        <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}>

        <div className='bottom-contact-container'>

            <div className='contact-img-left' id="contact-fix">
                <img src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1200" className='contact-img' />
            </div>

            <div className='contact-img-right'>
                <p className='bottom-contact-h1'>Have more Questions?</p>
                <p>Our team is ready to assist you. Reach out today and get the answers you need with confidence.</p>
                
                <Link className='link' to='/faq'>
                <div className='bottom-contact-btn-hover'>
                    <p>See More →</p>
                </div>
                </Link>
            </div>
        </div>


        <div className='bottom-contact-container'>

        <div className='contact-img-right'>
                <p className='bottom-contact-h1'>We would love to connect with you on social media!</p>
               

               <div className='fbook-container'  style={{display: 'flex', alignItems: 'center'}}>
               <Link target='_blank' to="https://www.facebook.com/profile.php?id=61573094572375&mibextid=wwXIfr&rdid=xi8ldIUxYuiLqB5V&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1648BsGHU6%2F%3Fmibextid%3DwwXIfr#">
                <FaFacebook style={{color: '#3b5998', fontSize: '70px'}} />
               </Link>
               <Link className='fbook'  to="https://www.facebook.com/profile.php?id=61573094572375&mibextid=wwXIfr&rdid=xi8ldIUxYuiLqB5V&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1648BsGHU6%2F%3Fmibextid%3DwwXIfr#" target='_blank'>
                <p className='fbook-p'>Bridgewell Insurance Agency LLC.</p> 
               </Link>
               </div>

               <div className='fbook-container'  style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
               <Link target='_blank' to="/https://www.instagram.com/bridgewell_insuranceagency?igsh=MTM1YzZocTJpY3JhcA==">
                <FaInstagramSquare style={{color: '#E1306C', fontSize: '70px'}} />
               </Link>
               <Link className='fbook'  to="/" target='_blank'>
                <p className='fbook-p'>Bridgewell Insurance Agency LLC.</p> 
               </Link>
               </div>

            </div>

            <div className='contact-img-left'>
                <img src="https://images.pexels.com/photos/221179/pexels-photo-221179.jpeg?auto=compress&cs=tinysrgb&w=1200" className='contact-img' />
            </div>

         
        </div>
        </div>



        <Footer />  
    </>
  )
}

export default Contact
