  import { useNavigate } from 'react-router-dom';
  import React, { useState, useRef } from 'react';
  import {
    FaMoneyBillWave,
    FaHome,
    FaPlane,
    FaUserShield,
    FaShieldAlt,
    FaBalanceScale,
  } from 'react-icons/fa';
  import './Hero.css';

  function FAQItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        className={`faq-item p-3 mb-2 rounded ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.05)' }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">{item.question}</h5>
          <span className="toggle-icon fs-4">{isOpen ? '−' : '+'}</span>
        </div>
        {isOpen && <p className="mt-3 mb-0">{item.answer}</p>}
      </div>
    );
  }

  function Hero() {
    const servicesRef = useRef(null);
    const navigate = useNavigate();

const handleServiceClick = (serviceName) => {
  navigate('/services'); // You can pass state or query later
};


    const handleScrollToServices = () => {
      servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <section className="hero-section text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Text Content */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="glass-panel p-5 rounded-4 shadow-lg">
                <h1 className="display-5 fw-bold mb-3">
                  Power Your Business with{' '}
                  <span style={{ color: '#cac112ff' }}>NexusCore Sync</span>
                </h1>

                <p className="lead text-glow">
                  We connect advertisers with high-quality leads through
                  performance-based marketing. Grow faster, smarter, and more
                  efficiently with our network.
                </p>
                <button
                  className="btn btn-light mt-4 px-4 py-2 fw-semibold rounded-pill glow-button"
                  onClick={handleScrollToServices}
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-md-6 text-center">
              <div className="img-glow-wrapper position-relative">
                <img
                  src="/home-photo.jpg"
                  alt="Business"
                  className="img-fluid rounded-4 hero-tilt"
                  style={{ maxHeight: '420px' }}
                />
                <div className="neon-frame"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔁 Scrolling Industries */}
        <div className="industry-section text-center py-5">
          <h3 className="text-white mb-4">
            Check Out NEXUSCORE's Pay-Per-Call Industries
          </h3>
          <div className="industry-marquee-wrapper">
            <div className="industry-marquee">
              <div className="industry-track">
                {[
                  { name: 'Finance', icon: <FaMoneyBillWave /> },
                  { name: 'Home Services', icon: <FaHome /> },
                  { name: 'Travel', icon: <FaPlane /> },
                  { name: 'Senior Care', icon: <FaUserShield /> },
                  { name: 'Insurance', icon: <FaShieldAlt /> },
                  { name: 'Legal', icon: <FaBalanceScale /> },
                ].map((item, index) => (
                  <div className="industry-item" key={index}>
                    {item.icon}
                    <span className="ms-2">{item.name}</span>
                  </div>
                ))}
                {[...Array(6)].map((_, i) => {
                  const item = [
                    { name: 'Finance', icon: <FaMoneyBillWave /> },
                    { name: 'Home Services', icon: <FaHome /> },
                    { name: 'Travel', icon: <FaPlane /> },
                    { name: 'Senior Care', icon: <FaUserShield /> },
                    { name: 'Insurance', icon: <FaShieldAlt /> },
                    { name: 'Legal', icon: <FaBalanceScale /> },
                  ][i];
                  return (
                    <div className="industry-item" key={`repeat-${i}`}>
                      {item.icon}
                      <span className="ms-2">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 🧾 About Us */}
        {/* <div className="about-section text-white text-center py-5 px-3">
          <h4 className="fw-bold mb-3">About Us</h4>
          <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
            NEXUSCORE is a small yet dynamic firm focused on fostering meaningful
            connections between online advertisers and publishers.
          </p>
        </div> */}

        {/* 🌟 Services Buttons */}
        <div
          ref={servicesRef}
          className="services-buttons-section text-center text-white py-5 px-3"
        >
          <h4 className="fw-bold mb-2">Services That Convert.</h4>
          <p className="lead mb-4">Expertise That Scales.</p>

          <div className="container">
            <div className="row g-3 justify-content-center">
              {[
  'SSDI',
  'Health Insurance',
  'Debt Settlement',
  'Final Expenses',
  'Auto Insurance',
  'Credit Repair',
].map((service, index) => (
  <div className="col-12 col-sm-6 col-md-4" key={index}>
    <button
      className="btn btn-outline-light service-button w-100 py-3"
      onClick={() => handleServiceClick(service)}
    >
      {service}
    </button>
  </div>
))}

            </div>
          </div>
        </div>

        {/* 📘 FAQ Section */}
        <div className="faq-section text-white text-center py-5 px-3">
          <h4 className="fw-bold mb-3">Help Center</h4>
          <h2 className="mb-4">Frequently Asked Questions</h2>

          <div className="container text-start">
            {[
              {
                question: 'SSDI (Social Security Disability Insurance)',
                answer:
                  'Connect with consumers actively seeking help with disability benefits. Our Pay-Per-Call model ensures every lead is high intent and verified.',
              },
              {
                question: 'Health Insurance',
                answer:
                  'Deliver exclusive calls from individuals looking for ACA, Medicare, and private health insurance plans. HIPAA-compliant and high-converting.',
              },
              {
                question: 'Debt Settlement',
                answer:
                  'Generate calls from consumers struggling with debt and in need of urgent financial solutions. Drive results with compliant, quality traffic.',
              },
              {
                question: 'Final Expense Insurance',
                answer:
                  'Connect with seniors and families exploring affordable life insurance options to cover end-of-life costs. High intent, aged 50+ traffic.',
              },
              {
                question: 'Auto Insurance',
                answer:
                  'Tap into the high-demand auto insurance market. We deliver real-time calls from drivers actively comparing quotes and providers.',
              },
              {
                question: 'Credit Repair',
                answer:
                  'Reach motivated consumers ready to improve their credit scores. Our filtering ensures your agents only speak to eligible and engaged leads.',
              },
            ].map((item, index) => (
              <FAQItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  export default Hero;
