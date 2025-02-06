import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Services() {

    const articles = [
        {
            id: "1",
            category: "Garden Lighting",
            date: "Aug 21, 2024",
            title: "Medicare Assitance",
            copy: "We guide you through the various parts of Medicare, helping you choose between Original Medicare, Medicare Advantage, Part D prescription drug plans, and supplemental coverage based on your specific health needs and budget.",
            image: "https://images.pexels.com/photos/5708226/pexels-photo-5708226.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/services/Medicare-Assistance"
        },
        {   id: "2",
            category: "Soil Health",
            date: "Aug 21, 2024",
            title: "Medicaid Assistance",
            copy: "We understand that applying for Medicaid or renewing your coverage can be confusing and time-consuming. Our team is here to guide you through every step of the process, ensuring that you have the support you need to complete your application and maintain continuous coverage.",
            image: "https://images.pexels.com/photos/6414618/pexels-photo-6414618.jpeg?auto=compress&cs=tinysrgb&w=800",
             url: "/services/Medicaid-Assistance"
        },
        {   id: "3",
            category: "Horticulture",
            date: "Massachusetts Medicaid Frequently Asked.",
            title: "In-Home Services Assistance",
            copy: "We help connect you with trusted providers for essential in-home services, such as adult foster care programs and Adult Day Health programs. Please note while we don't directly approve these services, our role is to refer you to reputable partners who can meet your needs.",
            image: "https://images.pexels.com/photos/7551645/pexels-photo-7551645.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/services/In-Home-Assitance"
        },

    ];

    const [counter, setCounter] = useState(0);

    const count = () => {
        for (let i = 0; i <= articles.length; i++) {
            setCounter(counter + 1)
        }
        return setCounter;
     }
  return (
   <>
          <div class="about-container">
                <div class="about-header">
                    {/* <p class="ah-h3">About Us</p> */}
                </div>
            <div class="inner-about-container">
                <p className="about-p">As a locally owned and operated agency in Massachusetts</p>
                <p className="about-h5">We’re committed to providing personalized support for your health insurance needs</p>
            </div>
        </div>

        <div className='os-container'>
            <div className='os-inner-container'>
            <p className='os-h3'>What We Do</p>
            <p className='os-h9'>Our Services</p>
            </div>
        </div>

        <div className="articles-grid_0">
                    {articles.map((article, index) => (
                        <article key={index} className="article-card_0">
                               <div className="article-image_0">
                                <img src={article.image} alt={article.title} />
                            </div>
                           
                          
                         <p className='article_id'>#{article.id}</p>
                            <h3 className="article-title_0">{article.title}</h3>
                            <p className='article-copy'>{article.copy}</p>

                            <Link to={article.url} className='link'>
                            <div className="read-more_0">
                                Read More
                                <span className="arrow_0">→</span>
                            </div>
                            
                            </Link>
                        </article>
                    ))}
                </div>


                <footer className='footer-container'>
                <div className='footer-content'>
                    <div className='footer-section'>
                    <img className='logo' alt="Bridgwell Insurance Logo" src="https://iili.io/2iIvZBe.png" />
                    <ul>
                            <li><Link to="/" className='link'>Home</Link></li>
                            <li><Link to="/" className='link'>About Us</Link></li>
                            <li><Link to="/" className='link'>Services</Link></li>
                            {/* <li><Link to="/" className='link'>Contact Us</Link></li> */}
                            <li><Link to="/" className='link'>Blog</Link></li>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h3>Connect With Us</h3>
                        <div className='social-links'>
                            <a href="mailto:Info@bridgewellinsuranceagency.com" target="_blank" rel="noopener noreferrer">
                                {/* <i className="fab fa-facebook"></i> */}
                                <p className='white'>Info@bridgewellinsuranceagency.com</p>
                            </a>
                            <a href="mailto:Info@bridgewellinsuranceagency.com" target="_blank" rel="noopener noreferrer">
                                {/* <i className="fab fa-facebook"></i> */}
                                <p className='white'>Fax: #978-400-4704</p>
                            </a>
                            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p className='copyright'>&copy; {new Date().getFullYear()} Bridgewell Insurance Agency. All rights reserved.</p>
                </div>
            </footer>

   
   </>
  )
}

export default Services
