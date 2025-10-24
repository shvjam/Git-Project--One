import styles from './Header.module.css';
import logo from '../../assets/logo-dark.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Hugo Inc. logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Industries</a></li>
          <li><a href="#">Our Agents</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </nav>
      <div className={styles.cta}>
        <button>Get Started</button>
      </div>
    </header>
  );
}

export default Header;
