import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function MedicaidAssitance() {

    const services = [


        {
            name: "Medicare Assistance",
            url: "/services/Medicare-Assistance"
        },
        {
            name: "Medicaid Assistance",
            url: "/services/Medicaid-Assistance"
        },
        {
            name: "In-Home Services Assistance",
            url: "/services/In-Home-Assitance"
        },
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

        <div className="service-container_01">
            <div className="service-content_0">
                <div className="service-header_0">
                    <div className="header-label_01">
                        {/* <span className="leaf-icon_0">🌿</span> */}
                        <Link to="/services" className='services-links'>
                        <span>Services</span>
                        </Link>
                        <span>&gt;</span>
                        <Link to="/services/Medicaid-Assitance" className='services-links'>
                        <span>Medicaid Assistance</span>
                        </Link>
                    </div>
                    <h1 className='medical-h1'>Medicaid Assistance</h1>
                </div>

                <div className="main-image_0">
                    <img 
                        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae" 
                        alt="Soil enrichment service" 
                    />
                </div>

                <section className="about-service_0">
                    {/* <h2>About</h2> */}
                    <p>We understand that applying for Medicaid or renewing your coverage can be confusing and time-consuming. Our team is here to guide you through every step of the process, ensuring that you have the support you need to complete your application and maintain continuous coverage.</p>
                    

                    <ul className="service-features_0">
                        <li>Medicaid Enrollment & Application Assistance</li>
                        <li>Medicaid Renewal Help</li>
                        <li>Eligibility Checks and Guidance</li>
                        <li>Ongoing Support and Updates</li>
              
                    </ul>
                </section>

           

                {/* <section className="whats-included_0">
                    <h2>What's Include In The Services?</h2>
                    <p>From initial consultation and personalized design plans to professional installation and meticulous maintenance, we cover every aspect to ensure your garden thrives. Our offerings include expert advice on plant selection, soil health, and sustainable practices, as well as specialized techniques to enhance the beauty.</p>
                    
                    <button className="contact-btn_0">Contact us →</button>
                </section> */}
            </div>

            <div className="service-sidebar_0">
                <div className="sidebar-content_0">
                    <h3>Services</h3>
                    <ul className="service-list_0">
                    {services.map((service, index) => (
                            <li className='side-list' key={index}>
                                <a 
                                    className="side-links" 
                                    href={service.url}
                                >
                                    {service.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className="faq-section_0">
            <div className="faq-header_0">
          
                <h2 className='faq-services'>Have any Questions?</h2>
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
  )
}

export default MedicaidAssitance
