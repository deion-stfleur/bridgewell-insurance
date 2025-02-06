import React, { useState } from 'react'
import MainImg from '../assets/main.jpg'
import MattImg from '../assets/Matt.png'
import { CiMedicalCase } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import {Link} from 'react-router-dom'
import "../index.css"





function Main() {

    const slides = [
        {
            number: "01",
            title: "Medicare Basic Information and Next Steps ",
            description: "Offering proactive risk assessment, legal conflict prevention, and comprehensive support in preparing and strategizing for litigation.",
            image: "https://images.pexels.com/photos/6034413/pexels-photo-6034413.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            number: "02",
            title: "Medicare and You Guide Book ",
            description: "We help you communicate effectively with the public, media, and other stakeholders through strategic messaging and engagement.",
            image: "https://images.pexels.com/photos/6034413/pexels-photo-6034413.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            number: "03",
            title: "Massachusetts Medicaid Frequently Asked",
            description: "From media relations to strategic messaging, we craft compelling narratives that amplify your message and build public support.",
            image: "https://images.pexels.com/photos/6034413/pexels-photo-6034413.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            number: "04",
            title: "Working Past 65",
            description: "From media relations to strategic messaging, we craft compelling narratives that amplify your message and build public support.",
            image: "https://images.pexels.com/photos/6034413/pexels-photo-6034413.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
    ];

    const services = [
        {
            number: "01",
            url: "/services/Medicare-Assistance",
            title: "Medicare Assistance",
            description: "We guide you through the various parts of Medicare, helping you choose between Original Medicare, Medicare Advantage, Part D prescription drug plans, and supplemental coverage based on your specific health needs and budget.",
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            number: "02",
            url: "/services/Medicaid-Assistance",
            title: "Medicaid Assistance",
            description: "We understand that applying for Medicaid or renewing your coverage can be confusing and time-consuming. Our team is here to guide you through every step of the process, ensuring that you have the support you need to complete your application and maintain continuous coverage.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            number: "03",
            url: "/services/In-Home-Assitance",
            title: "In-Home Services Assistance",
            description: "We help connect you with trusted providers for essential in-home services, such as adult foster care programs and Adult Day Health programs. Please note while we don't directly approve these services, our role is to refer you to reputable partners who can meet your needs.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];



const valuesList = {
    Integrity: {
        title: "Integrity",
        description: "We uphold the highest standards of professional ethics, ensuring every interaction and decision reflects our commitment to honesty and moral principles.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    Transparency: {
        title: "Transparency",
        description: "Our foundation is built on honesty, openness, and responsibility. Ethical practices drive our actions, ensuring that trust and integrity are always at the core of our advocacy.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    Collaboration: {
        title: "Collaboration",
        description: "We believe in the power of working together, combining our expertise with your vision to achieve exceptional results and create lasting partnerships.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
};

const testimonials = [
    {
        quote: "Nomad Partners has been instrumental in helping us navigate complex policy challenges. Their team's expertise and dedication to our cause allowed us to successfully advocate for critical healthcare reforms. We couldn't have done it without them!",
        author: "Guy Hawkins",
        position: "Public Affairs Director"
    },
    {
        quote: "Working with Nomad Partners transformed our advocacy strategy. Their deep understanding of policy and stakeholder engagement helped us achieve remarkable results.",
        author: "Sarah Johnson",
        position: "Executive Director"
    }
    // Add more testimonials as needed
];

const articles = [
    {
        category: "Garden Lighting",
        url: "https://www.medicare.gov/basics/get-started-with-medicare",
        date: "Aug 21, 2024",
        title: "Medicare Basic Information and Next Steps ",
        image: "https://images.pexels.com/photos/5708226/pexels-photo-5708226.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        category: "Soil Health",
        url: "https://www.medicare.gov/medicare-and-you",
        date: "Aug 21, 2024",
        title: "Medicare and You Guide Book",
        image: "https://images.pexels.com/photos/6414618/pexels-photo-6414618.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        category: "Horticulture",
        url: "https://www.mass.gov/info-details/myservices-frequently-asked-questions",
        date: "Massachusetts Medicaid Frequently Asked.",
        title: "Essential gardening tools every gardener should own",
        image: "https://images.pexels.com/photos/7551645/pexels-photo-7551645.jpeg?auto=compress&cs=tinysrgb&w=800",
    }
];

const [currentIndex, setCurrentIndex] = useState(0);

const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
};

const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
};

    const [currentSlide, setCurrentSlide] = useState(0);

    const [activeValue, setActiveValue] = useState(null);

    const handleValueClick = (value) => {
        if (activeValue === value) {
            setActiveValue(null);
        } else {
            setActiveValue(value);
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };


    return (

        <>
            {/* <div className='main-container'>

                <div className='main-h1-container'>
                    <div className='inner-h1-contianer'>
                        <p className='main-h1'>Your Trusted Insurance Partner for Massachusetts.</p>
                        <p className='main-h2'>Together, We Bridge the Gaps That Matter Most—Your Health, Your Future.</p>


                         <div className='main-btn'>
                            <p className='btn-title'>Schedule Consulation</p>
                        </div> 
                    </div>
                </div>


                <div className='main-img-container'>
                    <img src="https://images.pexels.com/photos/8439679/pexels-photo-8439679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='woman holding children' className='main-img' />
                </div>


            </div> */}


            <div className='main-container-2'>
                <div className='main-img-container-2'>
                    <img 
                        src="https://images.pexels.com/photos/8439679/pexels-photo-8439679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt='woman holding children' 
                        className='main-img-2' 
                    />
                    <div className='overlay'>
                        <div className='text-content'>
                            <h1>Your Trusted Insurance Partner for Massachusetts.</h1>
                            <p className='main0'>Together, We Bridge the Gaps That Matter Most—Your Health, Your Future.</p>
                            
                            <Link to="/about" className='link'>
                            <button className="learn-more-btn">Learn More →</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="story-container_0">
            <div className="story-image_0">
                <img 
                    src="https://images.pexels.com/photos/5757153/pexels-photo-5757153.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Gardener working in greenhouse" 
                />
            </div>

            <div className="story-content_0">
                <div className="story-header_0">
                    <div className="header-label_0">
                        {/* <span className="leaf-icon_0">🌿</span> */}
                        <span>Our Story</span>
                    </div>
                    <h2>The story of our commitment to gardening excellence</h2>
                </div>

                <p className="story-description_0">
                    With a commitment to quality and sustainability, we use only the finest materials & 
                    practices to ensure your garden thrives for years to come.
                </p>

                <ul className="story-features_0">
                    <li>Decades of combined expertise in creating green spaces.</li>
                    <li>Proven expertise in transforming outdoor spaces with passion.</li>
                    <li>Seasoned professionals dedicated to perfecting garden aesthetics.</li>
                </ul>
        
                <Link to="/about" className='link'>
                <button className="more-about-btn_0">
                    More About us
                    <span className="arrow-icon_0">→</span>
                </button>
                </Link>
            </div>
        </div>
   

            {/* <div className='section-2-container'>
                <div className='section-2'>
                    <div className='inner-section-2'>
                        <div className='section-2-title'>
                            <p className='section-2-h1'>Get Started with Medicaid Assistance</p>
                            <hr className='main-line' />
                            <p className='section-2-bold'>Offering clear, honest, and reliable insurance solutions for peace of mind.</p>
                            

                     
                        </div>

                        <div className='section-2-text'>
                            <p className='section-2-p'>Welcome to Bridgewell Insurance Agency! We're here to make navigating your health insurance options easier and more accessible. Whether you're looking to apply for Medicaid, renew your coverage, explore health insurance options, or find trusted in-home care services, our team is here to guide you every step of the way. At Bridgewell, we don't just provide insurance; we bridge the gap between where you are now and a more secure, healthier future.</p>

                            <p className='section-2-bold-p'>Hablemos Español:</p>
                            <p className='section-2-p'>We offer services in Spanish. Feel free to contact us and let us know how we can assist you in your preferred language.</p>
                        </div>
                    </div>
                </div>

            </div> */}

            {/* <div className="medicare-container">
            <div className="medicare-image">
                <img 
                    src="https://images.pexels.com/photos/6787970/pexels-photo-6787970.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Senior couple sitting on porch" 
                />
            </div>
            
            <div className="medicare-content">
                <h1>New to Medicare? Start here</h1>
                <p>We specialize in helping individuals navigate the complexities of Medicare and Medicaid</p>
                
                <button className="get-started-btn">
                    Get started
                    <span className="arrow">→</span>
                </button>
            </div>
        </div> */}

            <p className='os-h2'>Our Services</p>
            <p className='os-h7'>Offering clear, honest, and reliable insurance solutions for peace of mind.</p>
            <div className="services-grid">
            {services.map((service) => (
                <div 
                    key={service.number} 
                    className="service-card"
                    style={{
                        backgroundImage: `linear-gradient(
                            rgba(0, 0, 0, 0.7),
                            rgba(0, 0, 0, 0.7)
                        ), url(${service.image})`
                    }}
                >
                    <div className="card-content">
                        <div className="service-number">{service.number}</div>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>

                        <Link to={service.url} className='link'>
                        <button className="learn-more">LEARN MORE</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>


        <div className="who-section">
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
                        We are a team of experienced digital consultants dedicated to helping 
                        businesses thrive in the digital era. From strategy to execution, we deliver 
                        solutions tailored to your unique needs.
                    </p>

                    <Link className='link' to="/about">
                    <button className="about-us-btn">About us</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>

     
       



            {/* <div className='section-6-container'>

                <div>
                    <p className='section-6-main-h1'>Our Services</p>
                    <p className='section-6-main-p'>We specialize in helping individuals navigate the complexities of Medicare and Medicaid.</p>
                    <p className='section-6-second-p'>Whether you're new to these programs or need help understanding your current options, our team is here to ensure you have the right coverage.</p>
                </div>


                <div className='section-6-row'>


                    <div className='section-6-box'>
                        <p className='section-6-bold'>Medicare Assistance</p>
                        <p className='section-6-copy'>We guide you through the various parts of Medicare, helping you choose between Original Medicare, Medicare Advantage, Part D prescription drug plans...<Link className='read-more-link' to='/about'><strong className='read-more'>Read More</strong></Link></p>

                    </div>


                    <div className='section-6-box'>
                        <p className='section-6-bold'>Medicaid Assistance</p>
                        <p className='section-6-copy'>Our team is here to guide you through every step of the process, ensuring that you have the support you need to complete your application and...<Link className='read-more-link' to='/about'><strong className='read-more'>Read More</strong></Link></p>
                    
                    </div>

                    <div className='section-6-box'>
                        <p className='section-6-bold'>In-Home Services Assistance</p>
                        <p className='section-6-copy'>We help connect you with trusted providers for essential in-home services, such as adult foster care programs and Adult Day Health programs....<Link className='read-more-link' to='/about'><strong className='read-more'>Read More</strong></Link>
                        </p>

                    </div>

                </div>

            </div> */}

            {/* <div className="slider-section">
            <div className="slider-header">
                <h3>+ Resource Center</h3>
                <h1>We offer a range of strategic services.</h1>
                <p>Comprehensive suite of services designed to help organizations navigate complex advocacy landscapes.</p>

                <div className="slider-controls">
                    <button onClick={prevSlide} className="nav-button">←</button>
                    <button onClick={nextSlide} className="nav-button">→</button>
                </div>
            
            </div>

            <div className="slider-container">
                <div 
                    className="slides"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                 {slides.map((slide, index) => (
    <div 
        key={index} 
        className="slide"
        style={{
            backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
            ), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    >
        <div className="slide-number">{slide.number}</div>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
        <button className="learn-more">LEARN MORE</button>
    </div>
))}
                </div>

                
            </div>
        </div> */}

<div className="articles-container_0">
            <div className="articles-header_0">
                <div className="header-left_0">
                    <div className="header-label_0">
                        {/* <span className="leaf-icon_0">🌿</span> */}
                        {/* <span>News</span> */}
                    </div>
                    <h2>Latest Resources</h2>
                </div>
                <a href="/blog" className="view-all_0">
                    View All Blogs →
                </a>
            </div>

            <div className="articles-grid_0">
                {articles.map((article, index) => (
                    <article key={index} className="article-card_0">
                        <div className="article-meta_0">
                            {/* <span className="category_0">{article.category}</span> */}
                            {/* <span className="date-separator_0">—</span> */}
                            {/* <span className="date_0">{article.date}</span> */}
                        </div>
                        
                        <h3 className="article-title_0">{article.title}</h3>
                        
                        <div className="article-image_0">
                            <img src={article.image} alt={article.title} />
                        </div>
                        
                        <a href={article.url} className="read-more_0">
                            Read More
                            <span className="arrow_0">→</span>
                        </a>
                    </article>
                ))}
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

export default Main
