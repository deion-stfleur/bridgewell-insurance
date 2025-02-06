import React, { useState } from 'react'
import {Link} from 'react-router-dom'


function Blog() {
    const articles = [
        {
            category: "Garden Lighting",
            date: "Aug 21, 2024",
            title: "Medicare Basic Information and Next Steps ",
            image: "https://images.pexels.com/photos/5708226/pexels-photo-5708226.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            category: "Soil Health",
            date: "Aug 21, 2024",
            title: "Medicare and You Guide Book 2025",
            image: "https://images.pexels.com/photos/6414618/pexels-photo-6414618.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            category: "Horticulture",
            date: "Massachusetts Medicaid Frequently Asked.",
            title: "Essential gardening tools every gardener should own",
            image: "https://images.pexels.com/photos/7551645/pexels-photo-7551645.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            category: "Horticulture",
            date: "Working Past 65.",
            title: "Working Past 65.",
            image: "https://images.pexels.com/photos/5485802/pexels-photo-5485802.jpeg?auto=compress&cs=tinysrgb&w=800",
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
            <div className="articles-container_0">
                <div className="articles-header_0">
                    <div className="header-left_0">
                        <div className="header-label_0">
                            {/* <span className="leaf-icon_0">🌿</span> */}
                            {/* <span>News</span> */}
                        </div>
                        <p className='rc-h2'>Resource Center</p>
                        <h2>Latest Blogs</h2>
                    </div>
                 
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

                            <a href="#" className="read-more_0">
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
                            <a href="mailto:Info@bridgewellinsuranceagency.com" target="_blank" rel="noopener noreferrer">
                                {/* <i className="fab fa-facebook"></i> */}
                                <p className='white'>Info@bridgewellinsuranceagency.com</p>
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

export default Blog
