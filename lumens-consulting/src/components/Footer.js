import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <span className="logo-text">Lumens</span>
              <span className="logo-sub">Consulting</span>
            </div>
            <p>Illuminating your business with cutting-edge AI solutions and strategic consulting.</p>
            <div className="social-links">
             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
  LinkedIn
</a>

<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
  Twitter (X)
</a>

<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
  GitHub
</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/ai-solutions">AI Solutions</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: hello@lumensconsulting.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Innovation St, Tech City, TC 12345</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Lumens Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;