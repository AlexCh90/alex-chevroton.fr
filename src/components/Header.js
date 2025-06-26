import React, { useEffect, useState } from 'react';
import '../assets/styles/header.scss';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
            <a href="https://www.facebook.com/alexchevroton" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/alexchevroton_developpeurweb/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/alex-chevroton/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="contact-info">
            <span>📞 07 77 75 21 50</span>
            <span>📧 contact@alex-chevroton.fr</span>
          </div>
        </div>
      </header>
    );
  };

  export default Header;