import React from 'react';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-main">
        <div className="footer-about">
          <img src="https://hugoinc.com/wp-content/themes/hugo-theme/static/logo.svg" alt="Hugo Inc. logo" />
          <p>Outsourcing+ built to make you better.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Digital Operations</a></li>
              <li><a href="#">Trust & Safety</a></li>
              <li><a href="#">Data & AI</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Resources</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Copyright | All Rights Reserved</p>
        <div className="footer-socials">
          <a href="#"><img src="https://hugoinc.com/wp-content/themes/hugo-theme/static/twitter.svg" alt="Twitter" /></a>
          <a href="#"><img src="https://hugoinc.com/wp-content/themes/hugo-theme/static/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="https://hugoinc.com/wp-content/themes/hugo-theme/static/linkedin.svg" alt="LinkedIn" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
