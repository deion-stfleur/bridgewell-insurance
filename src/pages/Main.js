import React, { useState, useEffect } from 'react'
import MainImg from '../assets/main.jpg'
import MattImg from '../assets/Matt.png'
import { CiMedicalCase } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import {Link} from 'react-router-dom'
import "../index.css"
import Footer from '../components/Footer';
import { MdOutlineStar } from "react-icons/md";








function Main() {
    const [currentSlider, setCurrentSlider] = useState(0);

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

    const testimonialser = [
      {
        title: "\"Bridgewell made navigating Medicare simple and stress-free!\"",
        quote: "I was so overwhelmed by all the Medicare options out there, but the team at Bridgewell Insurance Agency took the time to explain everything in detail. Matt helped me find the right plan that fits my needs, and I feel much more confident now. Thank you for making this process so much easier!",
        author: "Michelle M., Massachusetts",
        location: "New Mexico, USA",
        image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: "\"Personalized service that truly cares about your health and future.\"",
        quote: "After years of feeling confused about my Medicaid healthcare coverage, I finally feel like I have the right insurance plan for me, thanks to Bridgewell. They truly listened to my concerns and found a solution that fits my budget and healthcare needs.",
        author: "Henry T., Massachusetts",
        location: "Georgia, USA",
        image: "https://images.pexels.com/photos/7578806/pexels-photo-7578806.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: "\"Bridgewell Was a Godsend!\"",
        quote: "After turning 65, I was completely lost when it came to applying for Medicaid. Unfortunately, I went months without coverage and was stressed about what to do. Thankfully, Bridgewell Insurance Agency stepped in and helped me get my MassHealth coverage back on track. Their team was patient, knowledgeable, and truly cared about getting me the coverage I needed. I can't thank them enough for their support and for making the process so much easier.",
        author: "Margaret L., Massachusetts",
        location: "Georgia, USA",
        image: "https://images.pexels.com/photos/19471013/pexels-photo-19471013/free-photo-of-young-pharmacist-in-drugstore.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: "\"Bridgewell Helped Me When No One Else Would\"",
        quote: "I was struggling to get the help I needed with my medications, and no one seemed to care or offer solutions. Then I reached out to Matt from Bridgewell Insurance Agency. They truly went above and beyond to help me resolve the issues with my prescriptions. Their team was supportive, understanding, and worked hard to find a solution when I felt like there was no hope. I’m so grateful for their assistance and the peace of mind they provided.",
        author: "James B., Massachusetts",
        location: "Georgia, USA",
        image: "https://images.pexels.com/photos/19471013/pexels-photo-19471013/free-photo-of-young-pharmacist-in-drugstore.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      // Add more testimonials as needed
    ];
  
    const nextSlider = () => {
      setCurrentSlider((prev) => (prev + 1) % testimonialser.length);
     
     
    };
  
    const prevSlider = () => {
      setCurrentSlider((prev) => (prev - 1 + testimonialser.length) % testimonialser.length);
     
    };

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
            url: "/services#medicare-assistance",
            title: "Medicare Assistance",
            description: "We guide you through the various parts of Medicare, helping you choose between Original Medicare, Medicare Advantage, Part D prescription drug plans, and supplemental coverage based on your specific health needs and budget.",
            image: "https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=1200"
        },
        {
            number: "02",
            url: "/services#medicaid-assistance",
            title: "Medicaid Assistance",
            description: "We understand that applying for Medicaid or renewing your coverage can be confusing and time-consuming. Our team is here to guide you through every step of the process, ensuring that you have the support you need to complete your application and maintain continuous coverage.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },

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

    const [multiplier, setMultiplier] = useState(25);


    useEffect(() => {
        const updateMultiplier = () => {
          const width = window.innerWidth;
          if (width >= 1600) {
            setMultiplier(50); // Change this value as needed
          } else if (width <= 768) {
            setMultiplier(110); // Change this value as needed
          } else {
            setMultiplier(25);
          }
        };
    
        updateMultiplier(); // Set initial value
        window.addEventListener("resize", updateMultiplier);
    
        return () => window.removeEventListener("resize", updateMultiplier);
      }, []);


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
                        <div className='text-content animate fadeInUp'>
                            <h1>Your Trusted Insurance Partner for Massachusetts.</h1>
                            <p className='main0'>Together, We Bridge the Gaps That Matter Most—Your Health, Your Future.</p>
                            
                            <Link to="/about" className='link'>
                            <button className="learn-more-btn">About Us →</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div> 

            <div className={`story-container_0 fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}>
            <div className="story-image_0">
                <img 
                    src={MattImg} 
                    alt="Meet Matt CEO of Bridgewell Insurance" 
                />
                <div className='name-pos animate fadeInUp'>
                <p className='pos-h1'>Matthew Matos</p>
                <p className='pos-h2'>Licensend Medicare Advisor</p>
                </div>
            </div>

            <div className="story-content_0">
                <div className="story-header_0">
                    <div className="header-label_0">
                        {/* <span className="leaf-icon_0">🌿</span> */}
                        <span className='hl0-h1'> Welcome to Bridgewell Insurance Agency!</span>
                    </div>
                    {/* <h2>The story of our commitment to gardening excellence</h2> */}
                </div>

                <p className="story-description_0">
                I'm Matthew, your licensed Medicare advisor, and at Bridgewell Insurance, we specialize in helping you bridge the gaps that matter most-your health and your future.
                </p>
                <p className="story-description_0">Navigating the world of Medicare can be overwhelming, but you don't have to do it alone. I'm here to guide you through every step, making sure you understand your options and find the plan that best fits your unique needs. Whether you're new to Medicare or looking to make changes, we're committed to helping you make informed decisions for a healthier and more secure future.</p>

                {/* <ul className="story-features_0">
                    <li>Decades of combined expertise in creating green spaces.</li>
                    <li>Proven expertise in transforming outdoor spaces with passion.</li>
                    <li>Seasoned professionals dedicated to perfecting garden aesthetics.</li>
                </ul>
         */}
               
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

            <p className='os-h2'>Our Services at a Glance</p>
            <p className='os-h7'>Offering clear, honest, and reliable insurance solutions for your peace of mind.</p>
            <div className='services-grid'
   >
            {services.map((service) => (
                <div 
                    key={service.number} 
                    className="service-card animate fadeInUp "
                    style={{
                        backgroundImage: `linear-gradient(
                            rgba(0, 0, 0, 0.7),
                            rgba(0, 0, 0, 0.7)
                        ), url(${service.image})`
                    }}
                >
                    <div className="card-content">
                        {/* <div className="service-number">{service.number}</div> */}
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>

                        <a href={service.url} class='link'>
                        <button className="learn-more">LEARN MORE</button>
                        </a>
                    </div>
                </div>
            ))}
        </div>

        <div className="values-container_0">
            <div className="values-header_0">
                <h2>Why choose us?</h2>
                <p>Core values of integrity, innovation, and excellence shape every solution we deliver.</p>
            </div>

            <div className="values-grid_0" id="grid-fix">
                <div className="value-card_0">
                    <div className="icon-container_0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" fill="currentColor"/>
                            <path d="M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h3>Expert Medicaid Support</h3>
                   <p>We specialize in Medicaid applications and renewals, offering hands-on <Link className='link-blue' to="/why-choose-us"><strong>Read More...</strong></Link></p>
                </div>

                <div className="value-card_0">
                    <div className="icon-container_0">
                    <RiCustomerService2Fill />
                    </div>
                    <h3>Personalized Service</h3>
                    <p>Our team takes the time to understand your unique needs and provide <Link className='link-blue' to="/why-choose-us"><strong>Read More...</strong></Link></p>
                </div>

                {/* <div className="value-card_0">
                    <div className="icon-container_0">
                    <FaHome />
                    </div>
                    <h3>In-Home Services Referrals</h3>
                     <p>We also assist with connecting you to trusted partners for in-home care services <Link className='link-blue' to="/why-choose-us"><strong>Read More...</strong></Link></p>
                </div> */}

                <div className="value-card_0">
                    <div className="icon-container_0">
                    <MdFamilyRestroom />
                    </div>
                    <h3>Dedicated to Your Future</h3>
                    <p>Health insurance is about more than just today. It’s about securing your future. <Link className='link-blue' to="/why-choose-us"><strong>Read More...</strong></Link></p> 
                </div>
            </div>


            {/* <Link className='link' to="/why-choose-us">
            <div className='lm-us-btn'>
                <p className='lmus-text'>Learn More →</p>
            </div>
            </Link> */}
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
        </div> */}

     
       



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

<section className="testimonials">
      <div className="testimonials-header">
        <div className="header-left">
          {/* <span className="icon">📣</span> */}
        </div>
        <h3>What our clients are saying</h3>
      </div>

      <div className="testimonials-slider">
        <div className="testimonials-track" style={{
          transform: `translateX(-${currentSlider *  multiplier}%)`,
        }}>
          {testimonialser.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
           
              <div className="testimonial-content">

                <div className='tc-inner'>
                <h4>{testimonial.title}</h4>
                <p className="quote">{testimonial.quote}</p>
                <div className="author-info">
                  <p className="author">{testimonial.author}</p>
                  {/* <p className="location">{testimonial.location}</p> */}
                </div>

                <div style={{marginBottom: 40}}>

                <MdOutlineStar  style={{color:'gold', fontSize: 25}} />
                <MdOutlineStar style={{color:'gold', fontSize: 25}} />
                <MdOutlineStar style={{color:'gold', fontSize: 25}} />
                <MdOutlineStar style={{color:'gold', fontSize: 25}} />
                <MdOutlineStar style={{color:'gold', fontSize: 25}} />
            </div>
            </div> 
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <button 
          className="control-button" 
          onClick={prevSlider}
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <button 
          className="control-button" 
          onClick={nextSlider}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </section>

<div className="hero-section">
  <img
    src="https://images.pexels.com/photos/6917033/pexels-photo-6917033.jpeg?auto=compress&cs=tinysrgb&w=1200" 
    alt="Team collaboration" 
    className="hero-image"
  />
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <h1>Protecting what matters, empowering your future.</h1>

    <Link className='link' to="/contact">
    <button>Contact Now →</button>
    </Link>
  </div>
</div>


<Footer />





          


        </>
    )
}

export default Main
