import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';


function Blog() {
    const articles = [
        {
            category: "Garden Lighting",
            date: "Aug 21, 2024",
            title: "Medicare Basic Information and Next Steps ",
            image: "https://images.pexels.com/photos/5708226/pexels-photo-5708226.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "https://www.medicare.gov/basics/get-started-with-medicare",
        },
        {
            category: "Soil Health",
            date: "Aug 21, 2024",
            title: "Medicare and You Guide Book 2025",
            image: "https://images.pexels.com/photos/6414618/pexels-photo-6414618.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "https://www.medicare.gov/medicare-and-you",
        },
        {
            category: "Horticulture",
            date: "Massachusetts Medicaid Frequently Asked.",
            title: "Massachusetts Medicaid Frequently Asked.",
            image: "https://images.pexels.com/photos/7551645/pexels-photo-7551645.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "https://www.mass.gov/info-details/myservices-frequently-asked-questions",
        },
        {
            category: "Horticulture",
            date: "Working Past 65.",
            title: "Working Past 65.",
            image: "https://images.pexels.com/photos/5485802/pexels-photo-5485802.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/working-past-65",
        }
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
        <div className="hero-section-ppp">
  <img
    src="https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg?auto=compress&cs=tinysrgb&w=1200" 
    alt="Team collaboration" 
    className="hero-image"
  />
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <h1>Latest Resources</h1>

    <a class='link' href="/blog#blogs">
    <button>Read Below →</button>
    </a>
  </div>
</div>
            <div className="articles-container_0">
                <div className="articles-header_0">
                    <div className="header-left_0">
                        <div className="header-label_0">
                            {/* <span className="leaf-icon_0">🌿</span> */}
                            {/* <span>News</span> */}
                        </div>
                        {/* <p className='rc-h2'>Resource Center</p> */}
                        <h2  style={{fontSize: "2.5rem", marginTop: "4rem"}}>Recent Articles</h2>
                    </div>
                 
                </div>

                <div id="blogs" className="articles-grid_0">
                    {articles.map((article, index) => (

                       <a target='_blank' href={article.url}  key={index} className='link-black'>
                        <article  className="article-card_0">
                            <div className="article-meta_0">
                                {/* <span className="category_0">{article.category}</span> */}
                                {/* <span className="date-separator_0">—</span> */}
                                {/* <span className="date_0">{article.date}</span> */}
                            </div>

                            <div className="article-image_0">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <h3 className="article-title_0">{article.title}</h3>


                            <a href="#" className="read-more_0">
                                Read More
                                <span className="arrow_0">→</span>
                            </a>
                        </article>
                       </a>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Blog
