import React, { useState, useEffect, use} from 'react';
import Banner from '../assets/stock1.jpg'
import Family from '../assets/family.png'
import MattImg from '../assets/Matt.png'
import "../index.css"
import {Link} from 'react-router-dom'



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

    const [openQuestion, setOpenQuestion] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "Why should I work with Bridgewell Insurance Agency?",
            answer: "At Bridgewell, we take the time to truly understand your unique needs and provide personalized support throughout your health insurance journey. Our team specializes in Medicaid applications and renewals, offering hands-on guidance to ensure you don’t face gaps in your coverage. Unlike many agencies, we’re committed to building lasting relationships, not just offering a one-time solution. With us, you're not just another client—you’re a valued partner on the path to securing a healthier, more stable future."
        },
        {
            id: 2,
            question: "Do I have to pay for your services?",
            answer: "No, our services are completely free to you. Our goal is to ensure that you have the support you need, at no cost to you."
        },
        {
            id: 3,
            question: "How can Bridgewell help me with Medicaid?",
            answer: "At Bridgewell, we assist with the entire Medicaid application and renewal process. We help you determine eligibility, gather necessary documentation, and ensure that your application is completed correctly to avoid delays."
        },
        {
            id: 4,
            question: "Can you help me with health insurance outside of Medicaid",
            answer: "Yes! In addition to Medicaid assistance, we offer a variety of health insurance options, including individual plans, family plans, and marketplace options. We’ll work with you to explore your choices and find the best plan for your needs."
        },
        {
            id: 5,
            question: "Do I have to pay for your services?",
            answer: "No, our Medicaid assistance services are completely free. Our goal is to ensure that you have the support you need, at no cost to you."
        },
        {
            id: 6,
            question: "I thought I could not enroll in another health plan after Open Enrollment Period (OEP). Can you still help?",
            answer: "If you missed the Open Enrollment Period, don’t worry—you may still qualify for a Special Enrollment Period (SEP) depending on your situation. Major life changes like moving, getting married, having a baby, or losing other health coverage can open new opportunities for you to enroll or make changes to your health plan. Our team is here to help you explore your options and guide you through the enrollment process, even outside of OEP."
        },
        {
            id: 7,
            question: "Do I need to pay for in-home services such as Personal Care Assistance (PCA) or Adult Foster Care (AFC)?",
            answer: "The cost for in-home services like Personal Care Assistance (PCA) or Adult Foster Care (AFC) can vary depending on your eligibility for Medicaid or other assistance programs. In many cases, if you qualify for Medicaid, these services may be covered or partially covered. However, the specific coverage depends on the state and the program’s guidelines. Our team can help refer you to trusted providers who will assess your eligibility and guide you through the process of accessing these services. We’re here to make sure you understand your options and get connected to the right support."
        },
      
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
            <div className='about-header'>

                <p className='ah-h5'>Our Story</p>
                <p className='ah-h3'>About Us</p>

            </div>
            <div className='inner-about-container'>
            <p className='about-p'>As a locally owned and operated agency in Massachusetts</p>
            <p className='about-h5'>We’re committed to providing personalized support for your health insurance needs</p>
            </div>

        </div>

        <div className="about-content_0">
            <div className="left-content_0">
                <div className="text-container_0">
                    <h2 className="title_0">We believe that everyone deserves access to affordable healthcare and essential services.</h2>
                    <p className="description_0">
                    As a locally owned and operated agency in Massachusetts, we’re committed to providing personalized support for your health insurance needs.
                    </p>
                    <a href="/projects" className="explore-link_0">
                        Explore Projects →
                    </a>
                </div>
                <div className="small-image-container_0">
                    <img 
                        src="https://images.pexels.com/photos/6939458/pexels-photo-6939458.jpeg?auto=compress&cs=tinysrgb&w=800" 
                        alt="Person working in greenhouse" 
                        className="small-image_0"
                    />
                </div>
            </div>

            <div className="right-content_0">
                <img 
                    src="https://images.pexels.com/photos/7477702/pexels-photo-7477702.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Gardeners working with trees" 
                    className="large-image_0"
                />
            </div>
        </div>

    


        <div className="values-container_0">
            <div className="values-header_0">
                <h2>Why choose us?</h2>
                <p>Core values of integrity, innovation, and excellence shape every solution we deliver.</p>
            </div>

            <div className="values-grid_0">
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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L4 10V22H20V10L12 2Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h3>Personalized Service</h3>
                    <p>Our team takes the time to understand your unique needs and provide the best health insurance options available.</p>
                </div>

                <div className="value-card_0">
                    <div className="icon-container_0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h3>In-Home Services Referrals</h3>
                    <p>We also assist with connecting you to trusted partners for in-home care services, such as adult foster care and adult day care.</p>
                </div>

                <div className="value-card_0">
                    <div className="icon-container_0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M1 21H23L12 2L1 21Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h3>Dedicated to Your Future</h3>
                    <p>Health insurance is about more than just today. It’s about securing your future. We help bridge the gap to a healthier tomorrow.</p>
                </div>
            </div>
        </div>
        <div className="vision-mission_0">
            <div className="images-container_0">
                <img 
                    src="https://images.pexels.com/photos/3824768/pexels-photo-3824768.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="People working with plants" 
                    className="image-left_0"
                />
                <img 
                    src="https://images.pexels.com/photos/5708422/pexels-photo-5708422.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Person planting seedlings" 
                    className="image-right_0"
                />
            </div>

            <div className="cards-container_0">
                <div className="info-card_0">
                    <h3>Our Vision</h3>
                    <p>We strive to transform every garden into a personal sanctuary that reflects our clients' unique tastes.</p>
                </div>

                <div className="info-card_0">
                    <h3>Our Mission</h3>
                    <p>By focusing on quality, and personalized solutions, we aim to deliver outstanding results that exceed expectations.</p>
                </div>

                <div className="info-card_0">
                    <h3>Plan & Goal</h3>
                    <p>We prioritize clear communication and thorough understanding of client expectations to ensure that every element.</p>
                </div>
            </div>
        </div>

        <div className='family-container'>


        {/* <div className='about-vision-2'>

<div className='inner-vision'>
<div className='about-vision-container'>
    <p className='about-vision-title'>Our Vision</p>
    <p className='about-vision-p'>We are a dynamic advocacy firm dedicated to driving positive change.</p>
</div>

<div className='about-vision-container-2'>
    <p className='about-vision-h2'>We're more than just an insurance agency. We're a trusted partner, dedicated to walking you through the complex world of health insurance and helping you secure the care and services you need for a better tomorrow.</p>
</div>
</div>

</div> */}

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

       <div className="faq-section_0">
            <div className="faq-header_0">
          
                <h2>Have any Questions?</h2>
            </div>

            <div className="faq-content_0">
                <div className="questions-list_0">
                    {faqData.map((faq) => (
                        <div key={faq.id} className="question-container_0">
                            <button
                                className={`question-button_0 ${openQuestion === faq.id ? 'active' : ''}`}
                                onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                            >
                                <span>{faq.question}</span>
                                <span className="plus-icon_0">+</span>
                            </button>
                            {openQuestion === faq.id && (
                                <div className="answer_0">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="still-questions_0">
                    <h3>Still Have Questions?</h3>
                    <p>Can't find the answer you're looking for? Please contact with our customer service.</p>
                    <a href="/contact" className="contact-link_0">
                        Contact us →
                    </a>
                </div>
            </div>
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