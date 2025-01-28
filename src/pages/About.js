import React, { useState, useEffect, use} from 'react';
import Banner from '../assets/about-banner-2.png'
import Family from '../assets/family.png'



function About() {

 
    return (
        <>
        
        
        <div className='about-container'>
            <h1 className='about-h1'>About us</h1>
            <p className='about-p'>About Bridgewell Insurance</p>
        </div>
            <img src={Banner} alt='About-Banner' className='banner-img' />



        <div className='about-vision'>
            <div className='about-vision-container'>
                <p className='about-vision-title'>Our Vision</p>
                <p className='about-vision-p'>We are a dynamic advocacy firm dedicated to driving positive change.</p>
            </div>

            <div className='about-vision-container-2'>
                <p className='about-vision-h2'>We’re more than just an insurance agency. We’re a trusted partner, dedicated to walking you through the complex world of health insurance and helping you secure the care and services you need for a better tomorrow.</p>
            </div>
        </div>


        <div className='family-container'>

            <div className='family-img-container'>
            <img src={Family} alt='Family' className='family-img' />

            <div className='family-text-container'>
                <p className='family-title'>Why Choose Us</p>
                <p className='family-p'>At Bridgewell Insurance Agency, we believe that everyone deserves access to affordable healthcare and essential services. As a locally owned and operated agency in Massachusetts, we’re committed to providing personalized support for your health insurance needs. What sets us apart is our focus on helping individuals and families navigate Medicaid applications and renewals—ensuring that you don’t miss out on vital coverage. Additionally, we understand the importance of support beyond just health insurance, which is why we also connect you with trusted partners offering in-home services like adult foster care and adult day care.</p>
            </div>
            </div>
        </div>
        </>
    );
}


export default About;