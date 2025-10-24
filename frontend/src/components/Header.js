import React from 'react';

function Header() {
  return (
    <header className="App-header">
      <div className="logo">
        <img src="https://hugoinc.com/wp-content/themes/hugo-theme/static/logo-dark.svg" alt="Hugo Inc. logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Industries</a></li>
          <li><a href="#">Our Agents</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </nav>
      <div className="cta">
        <button>Get Started</button>
      </div>
    </header>
  );
}

export default Header;
