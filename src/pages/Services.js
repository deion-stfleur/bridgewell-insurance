import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Services() {

    const articles = [
        {
            id: "1",
            category: "Garden Lighting",
            date: "Aug 21, 2024",
            title: "Medicare Assistance",
            copy: "We guide you through the various parts of Medicare, helping you choose between Original Medicare, Medicare Advantage, Part D prescription drug plans, and supplemental coverage based on your specific health needs and budget.",
            image: "https://images.pexels.com/photos/5708226/pexels-photo-5708226.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/services#medicare-assistance"
        },
        {   id: "2",
            category: "Soil Health",
            date: "Aug 21, 2024",
            title: "Medicaid Assistance",
            copy: "We understand that applying for Medicaid or renewing your coverage can be confusing and time-consuming. Our team is here to guide you through every step of the process, ensuring that you have the support you need to complete your application and maintain continuous coverage.",
            image: "https://images.pexels.com/photos/6414618/pexels-photo-6414618.jpeg?auto=compress&cs=tinysrgb&w=800",
             url: "/services#medicaid-assistance"
        },
        // {   id: "3",
        //     category: "Horticulture",
        //     date: "Massachusetts Medicaid Frequently Asked.",
        //     title: "In-Home Services Assistance",
        //     copy: "We help connect you with trusted providers for essential in-home services, such as adult foster care programs and Adult Day Health programs. Please note while we don't directly approve these services, our role is to refer you to reputable partners who can meet your needs.",
        //     image: "https://images.pexels.com/photos/7551645/pexels-photo-7551645.jpeg?auto=compress&cs=tinysrgb&w=800",
        //     url: "/services#in-home-assitance"
        // },

    ];


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
            {/* <div className='os-inner-container'>
            </div> */}
            {/* <p className='os-h3'>What We Do</p> */}
        </div>
            {/* <p className='os-h9'>Our Services</p> */}
            <p className='os-h2_01'>Our Services</p>
            <p className='sc_02'>We’re a trusted partner, dedicated to walking you through the complex world of health insurance and helping you secure the care and services you need for a better tomorrow.</p>
        <div className="articles-grid_0">
                    {articles.map((article, index) => (

                        <>
                      <a className='article-link' href={article.url}>
                        <article key={index} className="article-card_0">
                               <div className="article-image_0">
                                <img src={article.image} alt={article.title} />
                            </div>
                           
                          
                   
                            <h3 className="article-title_0">{article.title}</h3>
                            {/* <p className='article-copy'>{article.copy}</p> */}

                            <Link to={article.url} className='link'>
                            <div className="read-more_0">
                                Read More
                                <span className="arrow_0">→</span>
                            </div>
                            
                            </Link>
                        </article>
                        </a>  
                        </>
                    ))}
                </div>


            <div id="medicare-assistance" style={{backgroundColor: '#FAF9F6'}}>
                <div className='medical-container_012'>
                <h1 className='medical-h1'>Medicare Assistance</h1>
                </div>
            </div>
                <div className="story-container_0">
            <div className="story-image_0">
                <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Meet Matt CEO of Bridgewell Insurance" 
                />
            </div>

            <div className="story-content_0">
               


        <div className="service-container_01">
            <div className="service-content_0">
                <div className="service-header_0">
                
                  
                </div>

            

                <section className="about-service_0">
                    {/* <h2>About</h2> */}
                    <p className="service-copy_099">At Bridgewell Insurance Agency, we specialize in helping individuals navigate the complexities of Medicare and Medicaid. Whether you’re new to these programs or need help understanding your current options, our team is here to ensure you have the right coverage.</p>
                    

                    <ul className="service-features_0">
                        <li><strong>Medicare Assistance:</strong> We guide you through the various parts of Medicare, helping you choose between Original Medicare, Medicare Advantage, Part D prescription drug plans, and supplemental coverage based on your specific health needs and budget.</li>
                        <li><strong>Medicaid Enrollment & Renewal:</strong> Our team is here to assist with the Medicaid enrollment process, ensuring that you understand eligibility requirements and complete all necessary steps. We also offer help with Medicaid renewals, so you never have to worry about losing vital coverage.</li>
                        <li><strong>Medicare & Medicaid Plan Comparison:</strong> We help you compare different plans to ensure you're getting the most comprehensive and cost-effective coverage available to you.</li>
                        <li><strong>Personalized Support:</strong>Our team takes the time to understand your healthcare needs and helps you select the best Medicare or Medicaid plan to meet your goals.</li>
                    </ul>
                </section>

              

            </div>

         
        </div>


       
               
            </div>
        </div>


        <div id="medicaid-assistance" style={{backgroundColor: '#FAF9F6'}}>
                <div className='medical-container_0122'>
                <h1 className='medical-h11'>Medicaid Assistance</h1>
                </div>
            </div>       
        <div id="medicaid-assistance-mob-fix" className="story-container_0">
         

            <div className="story-content_0">
               


        <div className="service-container_01">
            <div className="service-content_0">
                <div className="service-header_0">
                
                  
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

              

            </div>

         
        </div>


       
               
            </div>

            <div id="fa-fix" className="story-image_0">
                <img 
                    src="https://images.pexels.com/photos/6972787/pexels-photo-6972787.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Family sitting at table" 
                />
            </div>
        </div>


        {/* <div id="in-home-assitance" style={{backgroundColor: '#FAF9F6'}}>
                <div className='medical-container_012'>
                <h1 className='medical-h1'>In-Home Services Assistance</h1>
                </div>
            </div> */}

        {/* <div className="story-container_0">
            <div className="story-image_0">
                <img 
                    src="https://images.pexels.com/photos/7799552/pexels-photo-7799552.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Meet Matt CEO of Bridgewell Insurance" 
                />
            </div>

            <div className="story-content_0">
               


        <div className="service-container_01">
            <div className="service-content_0">
                <div className="service-header_0">
                
                  
                </div>

            

                <section className="about-service_0">
                        <h2>About</h2>
                        <p>At Bridgewell, we recognize that health and well-being extend beyond just insurance. We help connect you with trusted providers for essential in-home services, such as adult foster care programs and Adult Day Health programs. Please note while we don’t directly approve these services, our role is to refer you to reputable partners who can meet your needs.</p>
                        
    
                        <ul className="service-features_0">
                            <li><strong>Adult Foster Care Referrals:</strong>Need a more personal care setting? We can refer you to trusted adult foster care providers in your area who offer compassionate care in a family setting.</li>
                            <li><strong>Medicaid Enrollment & Renewal:</strong>For those needing daytime support, we connect you with local adult day care centers that provide engaging activities, social interaction, and medical supervision.</li>
                            <li><strong>Personalized Referrals:</strong>We take the time to understand your specific needs and connect you with the right care providers to ensure you're receiving the best support.</li>
                        </ul>
                    </section>
    
                    <p>Please note that the approval and enrollment in these services are handled directly by the providers. Our goal is to ensure you are connected to reliable, trusted professionals who can provide the care you need.</p>

    

              

            </div>

         
        </div>


       
               
            </div>
        </div> */}



                <Footer />

   
   </>
  )
}

export default Services
