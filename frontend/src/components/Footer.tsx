import styles from './Footer.module.css';
import logo from '../assets/logo-white.svg';
import twitterIcon from '../assets/twitter.svg';
import facebookIcon from '../assets/facebook.svg';
import linkedinIcon from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerAbout}>
          <img src={logo} alt="Hugo Inc. Logo" />
          <p>Outsourcing+ built to make you better.</p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerColumn}>
            <h4>Solutions</h4>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Digital Operations</a></li>
              <li><a href="#">Trust & Safety</a></li>
              <li><a href="#">Data & AI</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Resources</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Copyright | All Rights Reserved</p>
        <div className={styles.footerSocials}>
          <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
