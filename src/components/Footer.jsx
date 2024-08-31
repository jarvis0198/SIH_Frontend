import navi from '../assets/Logo.png';
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={navi} alt="NIT Kurukshetra Logo" />
          <p>NATIONAL INSTITUTE OF TECHNOLOGY, KURUKSHETRA</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>FAQs</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow us</h4>
            <ul className="social-media">
              <li><i className="fab fa-twitter"></i> Twitter</li>
              <li><i className="fab fa-facebook"></i> Facebook</li>
              <li><i className="fab fa-linkedin"></i> LinkedIn</li>
              <li><i className="fab fa-youtube"></i> YouTube</li>
            </ul>
            <p>abcde@mail.com</p>
            <p>(205) 387-2122</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>© 2024 Brand, Inc. - Privacy - Terms - Sitemap</p>
      </div>
    </footer>
  );
};

export default Footer;

