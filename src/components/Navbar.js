import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logoLight from '../assets/logos/logo-light.png';
import logoDark from '../assets/logos/logo-dark.png';
import '../assets/styles/navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        scrolled ? 'navbar-scrolled fixed-top' : 'navbar-top absolute-top'
      }`}
    >
      <div className="container">
        <ScrollLink to="top" smooth duration={600} offset={-70} className="navbar-brand">
          <img src={scrolled ? logoDark : logoLight} alt="Logo" className="navbar-logo-img"/>
        </ScrollLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink to="services" className="nav-link" smooth duration={600} offset={-70} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Services
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="skills" className="nav-link" smooth duration={600} offset={-70} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Compétences
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="pricing" className="nav-link" smooth duration={600} offset={-70} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >
                Tarifs
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="about" className="nav-link" smooth duration={600} offset={-70} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                À propos
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;