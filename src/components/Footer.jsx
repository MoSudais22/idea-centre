import React from 'react';
import './Footer.css';

import sponsorLogo from '../assets/footer_logos.png';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footerMenu">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Our Services</a>
        <a href="/">Our Facilities</a>
        <a href="/">Upcoming Programmes</a>
        <a href="/">News</a>
        <a href="/">Gallery</a>
        <a href="/">Useful Information Resource</a>
        <a href="/">Contact Us</a>
        <a href="/">Member</a>
      </div>

      <div className="sponsoredText">
        Sponsored by
      </div>

      <div className="sponsorImage">
        <img src={sponsorLogo} alt="Sponsors" />
      </div>

      <div className="copyright">
        ©IDEA Centre all rights reserved
      </div>

    </footer>
  );
};

export default Footer;