import React from 'react';
import '../assets/styles/header.scss';

const Header = ({ hidden }) => {
  return (
    <div className={`header-top ${hidden ? 'hidden' : ''}`}>
        <div className="container" id="top">
              <div className="socials">
                  <a href="#">FB</a>
                  <a href="#">TW</a>
                  <a href="#">IG</a>
              </div>
              <div className="contact">
                  📞 01 23 45 67 89 &nbsp; | &nbsp; ✉️ contact@monsite.com
              </div>
        </div>
    </div>
  );
};

export default Header;
