import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About TechWave XR</h3>
            <p>TechWave XR is revolutionizing the way we experience augmented reality. With cutting-edge technology and innovative solutions, we're pushing the boundaries of what's possible.</p>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Stay updated with the latest news and promotions from TechWave XR. Subscribe to our newsletter now!</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
