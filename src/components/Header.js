import React, { useEffect, useState } from 'react';
import '../assets/styles/header.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`top-header ${hidden ? 'hidden' : ''}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/alex-chevroton/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="contact-info">
            <span>📞 06 12 34 56 78</span>
            <span>📧 contact@monsite.com</span>
          </div>
        </div>
      </header>
    );
  };

  export default Header;