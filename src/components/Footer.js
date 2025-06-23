import React, { useState } from 'react';
import LegalModal from './LegalModal';
import '../assets/styles/footer.scss';

const Footer = () => {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} MonSite. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:contact@monsite.com">Contact</a>
          <button
            className="legal-button"
            onClick={() => setShowLegal(true)}
          >
            Mentions légales
          </button>          
        </div>
      </div>

      <LegalModal isOpen={showLegal} onClose={() => setShowLegal(false)} />
    </footer>
  );
};

export default Footer;
