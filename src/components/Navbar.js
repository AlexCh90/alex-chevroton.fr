import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../assets/styles/navbar.scss';
import logoDark from '../assets/logos/logo-dark.png';
import logoLight from '../assets/logos/logo-light.png';

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <ScrollLink
          to="top"
          smooth={true}
          duration={600}
          offset={-70}
          className="navbar-logo"
        >
          <img
            src={scrolled ? logoLight : logoDark}
            alt="Logo"
            className="navbar-logo-img"
          />
        </ScrollLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Compétences</a></li>
            <li className="nav-item"><a className="nav-link" href="#pricing">Tarifs</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">A propos</a></li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
