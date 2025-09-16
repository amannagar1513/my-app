import React from 'react';
import './Hero.css'; // We'll add styles separately

function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text Content */}
          <div className="col-md-6 text-white text-shadow">
            <h1 className="display-4 fw-bold mb-4">
              Power Your Business with Nexuscore
            </h1>
            <p className="lead">
              We connect advertisers with high-quality leads through performance-based marketing. Grow faster, smarter, and more efficiently with our network.
            </p>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://via.placeholder.com/500x400.png?text=Your+3D+Image"
              alt="Hero Visual"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
