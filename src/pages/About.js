import React, { useState, useEffect, use} from 'react';
import Banner from '../assets/stock1.jpg'
import Family from '../assets/family.png'
import MattImg from '../assets/Matt.png'



function About() {

    const services = [
        {
            number: "01",
            title: "Medicare Assistance",
            description: "We guide you through the various parts of Medicare, helping you choose between Original Medicare, Medicare Advantage, Part D prescription drug plans, and supplemental coverage based on your specific health needs and budget.",
            image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBhc3Npc3RhbmNlfGVufDB8MXwwfHx8MA%3D%3D"
        },
        {
            number: "02",
            title: "Medicaid Enrollment & Renewal",
            description: "Our team is here to assist with the Medicaid enrollment process, ensuring that you understand eligibility requirements and complete all necessary steps. We also offer help with Medicaid renewals, so you never have to worry about losing vital coverage.",
            image: "https://images.unsplash.com/photo-1643818657367-491080baeece?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFtaWx5fGVufDB8MXwwfHx8MA%3D%3D"
        },
        {
            number: "03",
            title: "Medicare & Medicaid Plan Comparison",
            description: "We help you compare different plans to ensure you're getting the most comprehensive and cost-effective coverage available to you.",
            image: "https://images.unsplash.com/photo-1674080990621-1ae6e91f0d05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhbWlseSUyMCUyMGNvbXB1dGVyfGVufDB8MXwwfHx8MA%3D%3D"
        },
        {
            number: "04",
            title: "Personalized Support",
            description: "Our team takes the time to understand your healthcare needs and helps you select the best Medicare or Medicaid plan to meet your goals.",
            image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwcG9ydHxlbnwwfDF8MHx8fDA%3D"
        },
        {
            number: "05",
            title: "Adult Foster Care Referrals",
            description: "Need a more personal care setting? We can refer you to trusted adult foster care providers in your area who offer compassionate care in a family setting.",
            image: "https://images.pexels.com/photos/7545368/pexels-photo-7545368.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            number: "06",
            title: "Adult Day Care Referrals",
            description: "For those needing daytime support, we connect you with local adult day care centers that provide engaging activities, social interaction, and medical supervision.",
            image: "https://images.pexels.com/photos/7551614/pexels-photo-7551614.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            number: "07",
            title: "Personalized Referrals",
            description: "We take the time to understand your specific needs and connect you with the right care providers to ensure you're receiving the best support.",
            image: "https://images.pexels.com/photos/6158671/pexels-photo-6158671.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    ];


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const words = entry.target.children;
                const wordArray = Array.from(words);
                
                if (entry.isIntersecting) {
                    // Scrolling down - add animation
                    const scrollPosition = entry.boundingClientRect.top;
                    const windowHeight = window.innerHeight;
                    const progress = 1 - (entry.boundingClientRect.top / windowHeight);
                    const wordsToAnimate = Math.floor(wordArray.length * progress);
                    
                    wordArray.forEach((word, index) => {
                        if (index <= wordsToAnimate) {
                            word.classList.add('animate-word');
                        } else {
                            word.classList.remove('animate-word');
                        }
                    });
                } else {
                    // Scrolling up - remove animation
                    wordArray.forEach(word => {
                        word.classList.remove('animate-word');
                    });
                }
            });
        }, { 
            threshold: Array.from({ length: 100 }, (_, i) => i / 100), // Create thresholds from 0 to 1
            rootMargin: "0px"
        });

        const paragraphs = document.querySelectorAll('.family-p');
        paragraphs.forEach(p => {
            // Split text into words and wrap each in a span
            const words = p.textContent.split(' ');
            p.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
            observer.observe(p);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
        
        
        <div className='about-container'>
            <div className='inner-about-container'>
            <h1 className='about-h1'>About us</h1>
            <p className='about-p'>About Bridgewell Insurance</p>
            </div>

        </div>

        <div className='bg-pos'>
            <div className='bg-color'></div>
         <img src={Banner} alt='Banner' className='banner-img' />
        </div>



        <div className='about-vision'>

            <div className='inner-vision'>
            <div className='about-vision-container'>
                <p className='about-vision-title'>Our Vision</p>
                <p className='about-vision-p'>We are a dynamic advocacy firm dedicated to driving positive change.</p>
            </div>

            <div className='about-vision-container-2'>
                <p className='about-vision-h2'>We're more than just an insurance agency. We're a trusted partner, dedicated to walking you through the complex world of health insurance and helping you secure the care and services you need for a better tomorrow.</p>
            </div>
            </div>
            
        </div>

      

        <div className='family-container'>


        <div className='about-vision-2'>

<div className='inner-vision'>
<div className='about-vision-container'>
    <p className='about-vision-title'>Our Vision</p>
    <p className='about-vision-p'>We are a dynamic advocacy firm dedicated to driving positive change.</p>
</div>

<div className='about-vision-container-2'>
    <p className='about-vision-h2'>We're more than just an insurance agency. We're a trusted partner, dedicated to walking you through the complex world of health insurance and helping you secure the care and services you need for a better tomorrow.</p>
</div>
</div>

</div>

            <div className='family-img-container'>
            <img src={Family} alt='Family' className='family-img' />

            <div className='family-text-container'>
                <p className='family-title'>Why Choose Us</p>
                <p className='family-p'>"At Bridgewell Insurance Agency, we believe that everyone deserves access to affordable healthcare and essential services. As a locally owned and operated agency in Massachusetts, we're committed to providing personalized support for your health insurance needs. What sets us apart is our focus on helping individuals and families navigate Medicaid applications and renewals—ensuring that you don't miss out on vital coverage."</p>
                

                <div className='matt-container'>
                <img src={MattImg} alt='Matt-CEO of Bridgwell' className='matt-img-about' />
                   
                   <div className='matt-name'>
                    <p className='ceo-title'>Matthew Matos</p>
                    <p>CEO & Founder</p>
                   </div>
                </div>
            
            
            </div>
            </div>
        </div>


       <div>
              <div className="services-container">
            <div className="services-header">
                <span className="plus-icon">+</span>
                <h1>Our services in depth</h1>
                <p>We’re a trusted partner, dedicated to walking you through the complex world of health insurance and helping you secure the care and services you need for a better tomorrow.</p>
                </div>
            
            <div className="services-grid">
            {services.map((service) => (
    <div 
        key={service.number} 
        className="service-card"
        style={{
            backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
            ), url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    >
        <div className="service-number">{service.number}</div>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <button className="learn-more">LEARN MORE</button>
    </div>
))}
            </div>
        </div>
       <div>

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
                    <p className='copyright'>&copy; {new Date().getFullYear()} Bridgewell Insurance Agency. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}


export default About;