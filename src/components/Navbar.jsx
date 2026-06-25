import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import './Navbar.css';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownData = {
  'About Us': ['Our Story', 'Our Team', 'Mission & Vision'],
  'Our Services': ['Counselling', 'Legal Aid', 'Translation'],
  'Our Facilities': ['Study Room', 'Computer Lab', 'Prayer Room'],
  'Upcoming Programmes': ['This Week', 'This Month', 'All Programmes'],
  'News': ['Latest News', 'Newsletter', 'Press Release'],
  'Gallery': ['Photos', 'Videos', 'Events'],
  'Useful Information Resource': ['Employment', 'Education', 'Health'],
  'Member': ['Register', 'Login', 'Benefits'],
};

  const navLinks = [
    'Home',
    'About Us',
    'Our Services',
    'Our Facilities',
    'Upcoming Programmes',
    'News',
    'Gallery',
    'Useful Information Resource',
    'Contact Us',
    'Member',
  ];

  return (
    <header>
      <div className="topBar">
        <div className="logoWrap">
  <img src={logo} alt="iDEA Centre Logo" className="siteLogo" />
</div>

        <div className="topRight">
            <div className="topActions">
    <button className="iconCircle" aria-label="Search">
      <Search size={15} color="#fff" />
    </button>

    <button className="memberBtn">
      <div className="memberAvatar">
        <User size={16} color="#fff" />
      </div>
      <span className="memberLabel">
        Member Login
      </span>
    </button>
  </div>
       

          <div className="socialRow">
            <a href="/" className="soc" style={{ background: '#1877f2' }} aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="/" className="soc" style={{ background: '#e1306c' }} aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
              </svg>
            </a>
            <a href="/" className="soc" style={{ background: '#25d366' }} aria-label="WhatsApp">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
            <a href="/" className="soc" style={{ background: '#e84040' }} aria-label="youtube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </a>
          </div>

          <button
    className="hamburger"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <X size={22}/> : <Menu size={22}/>}
  </button>
        </div>
      </div>

      <nav className="navBar">
     <ul className="navList">
  {navLinks.map((link) => (
    <li
      key={link}
      className="navItem"
      onMouseEnter={() => setOpenDropdown(link)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <a
        href="/"
        className={activeLink === link ? 'navLink navLinkActive' : 'navLink'}
        onClick={(e) => { e.preventDefault(); setActiveLink(link); }}
      >
        {link}
        {dropdownData[link] && <span className="dropArrow">▾</span>}
      </a>

      {/* Dropdown Menu */}
      {dropdownData[link] && openDropdown === link && (
        <div className="dropdown">
          {dropdownData[link].map((item) => (
            <a key={item} href="/" className="dropItem">
              {item}
            </a>
          ))}
        </div>
      )}
    </li>
  ))}
</ul>
     
     
      </nav>

      {menuOpen && (
        <div className="mobileMenu">
          {navLinks.map((link) => (
            <a
              key={link}
              href="/"
              className={activeLink === link ? 'mobileLink mobileLinkActive' : 'mobileLink'}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link);
                setMenuOpen(false);
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
