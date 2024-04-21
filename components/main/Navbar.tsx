import Image from 'next/image';
import React from 'react';
import { Socials } from '@/constants';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <a href="#about-me" className="logo-container">
          <Image src="/navlogo.png" alt="logo" width={40} height={40} className="logo-spin" />
          <span className="logo-text"> Data Science Chain </span>
        </a>
        <div className="nav-links">
          <a href="#about-me" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#blogs" className="nav-link">
            Blogs
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;