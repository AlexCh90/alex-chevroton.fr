import React from 'react';
import '../assets/styles/carousel.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const images = [
  '/images/chat1.jpg',
  '/images/chat2.jpg',
];

const Carousel = () => {
  return (
    <div className="carousel-background">
      <div className="carousel-header">
        <h1 className="carousel-title">Alex Chevroton</h1>
        <h2 className="carousel-subtitle">Développeur web indépendant</h2>
      </div>
      <div id="carouselExample" className="carousel slide carousel-fade h-100" data-bs-ride="carousel">
        <div className="carousel-inner h-100">
          {images.map((src, index) => (
            <div key={index} className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`}>
              <img src={src} className="d-block w-100 h-100 object-fit-cover" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <a href="#services" className="scroll-down">
        <span>&#x25BC;</span>
      </a>
    </div>
  );
};

export default Carousel;
