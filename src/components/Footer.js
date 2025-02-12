import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



function Footer() {
  return (
    <>
    <footer class="footer_01">
  <div class="footer-container_01">
    <div class="about-us_01">
      <h3 class="footer-title_01">About Us</h3>
      <p className='ft_01'>
      At Bridgewell Insurance Agency, we believe that everyone deserves access to affordable healthcare and essential services.
      </p>
      <Link to="/about" className='link'>
      <button class="history-btn_01">History</button>
      </Link>
    </div>
    <div class="services_01">
      <h3 class="footer-title_01">Services</h3>
      <ul>
        <a href="/services#medicare-assistance" class='links'>
        <li>Health Insurance</li>
        </a>
        <a href="/services#medicaid-assistance" class='links'>
        <li>Medicaid Support</li>
        </a>
      </ul>
    </div>
    <div class="quick-links_01">
      <h3 class="footer-title_01">Quick Links</h3>
      <ul>
        <Link className='link_nav' to="/">
        <li>Home</li>
        </Link>
        <Link className='link_nav' to="/about">
        <li>About</li>
        </Link>
        <Link className='link_nav' to="/events">
        <li>Events</li>
        </Link>
        <Link className='link_nav' to="/blog">
        <li>Blog</li>
        </Link>
      </ul>
    </div>
    <div class="other-links_01">
      <h3 class="footer-title_01">Other Links</h3>
      <ul>
        <Link className='link_nav' to='/privacy-policy'>
        <li>Privacy Policy</li>
        </Link>
        <Link className='link_nav' to='/faq'>
        <li>FAQs</li>
        </Link>
        <Link className='link_nav' to='/contact'>
        <li>Contact</li>
        </Link>
     
      </ul>
    </div>
  </div>
  <div class="footer-bottom_01">
    <div class="footer-logo_01">
      <img src="https://iili.io/2iIvZBe.png" alt="Bridgewell Insurance Agency Logo" />
     
     <div class="sm-row">
     <Link target="_blank" to="https://www.facebook.com/profile.php?id=61573094572375&mibextid=wwXIfr&rdid=GmXGxZvoPJwM4AIJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1648BsGHU6%2F%3Fmibextid%3DwwXIfr#" className='link-white'>
      <FaFacebook />
     </Link>

     <Link target="_blank"  to="https://www.instagram.com/bridgewell_insuranceagency?igsh=MTM1YzZocTJpY3JhcA==" className='link-white'>
      <FaInstagram />
     </Link>
     </div>
      <p className='copy_01'>&copy; 2025 | Bridgewell Insurance Agency, LLC | All Rights Reserved</p>
      {/* <p>Website by Melcs Creative Designs</p> */}
    </div>

  </div>
</footer>
    </>
  )
}

export default Footer
