import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import {
  FaMoneyBillWave,
  FaHome,
  FaPlane,
  FaUserShield,
  FaShieldAlt,
  FaBalanceScale,
  FaRobot,
  FaPhoneVolume,
  FaCheckCircle,
  FaUsers,
  FaHeadset,
  FaChartLine,
  FaArrowRight,
  FaStar,
} from 'react-icons/fa';
import './Hero.css';

function FAQItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`faq-item ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="faq-header">
        <h5>{item.question}</h5>
        <span className={`toggle-icon ${isOpen ? 'rotated' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </div>
      <div className={`faq-content ${isOpen ? 'expanded' : ''}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

function StatCard({ icon, number, label, delay }) {
  const [count, setCount] = useState(0);
  const targetNum = parseInt(number.replace(/\D/g, ''));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetNum / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetNum]);

  return (
    <div className="stat-card" style={{ animationDelay: delay }}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">
        {count.toLocaleString()}{number.includes('+') ? '+' : ''}{number.includes('%') ? '%' : ''}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Hero() {
  const servicesRef = useRef(null);
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleServiceClick = (serviceName) => {
    navigate('/services');
  };

  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const industries = [
    { name: 'Finance', icon: <FaMoneyBillWave /> },
    { name: 'Home Services', icon: <FaHome /> },
    { name: 'Travel', icon: <FaPlane /> },
    { name: 'Senior Care', icon: <FaUserShield /> },
    { name: 'Insurance', icon: <FaShieldAlt /> },
    { name: 'Legal', icon: <FaBalanceScale /> },
    { name: 'AI Solutions', icon: <FaRobot /> },
    { name: 'Inbound Leads', icon: <FaPhoneVolume /> },
  ];

  const services = [
    'SSDI',
    'Health Insurance',
    'Debt Settlement',
    'Final Expenses',
    'Auto Insurance',
    'Credit Repair',
    'Home Insurance',
    'SSDI Ticket to Work',
    'AI Support',
    'AI Agent Support',
    'Inbound Traffic Leads',
  ];

  const faqs = [
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
    {
      question: 'Home Insurance',
      answer:
        'Connect with homeowners actively seeking property protection coverage. We deliver high-intent calls from consumers comparing quotes for comprehensive home insurance policies.',
    },
    {
      question: 'SSDI Ticket to Work',
      answer:
        'Help SSDI beneficiaries explore employment opportunities while maintaining their benefits. We connect eligible individuals with Employment Networks and vocational services.',
    },
    {
      question: 'AI Support',
      answer:
        'Leverage cutting-edge AI solutions for 24/7 customer engagement. Our intelligent automation handles inquiries, qualifies leads, and seamlessly escalates to human agents when needed.',
    },
    {
      question: 'AI Agent Support',
      answer:
        'Empower your live agents with real-time AI assistance. From sentiment analysis to automated documentation, boost productivity and improve customer satisfaction.',
    },
    {
      question: 'Inbound Traffic Leads',
      answer:
        'Receive high-intent, conversion-ready prospects through our multi-channel acquisition strategy. Every lead is validated for genuine interest and delivered in real-time.',
    },
  ];

  return (
    <section className="hero-section">
      {/* Animated Background */}
      <div className="hero-bg">
        <div 
          className="gradient-orb orb-1" 
          style={{ 
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` 
          }}
        />
        <div 
          className="gradient-orb orb-2"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)` 
          }}
        />
        <div 
          className="gradient-orb orb-3"
          style={{ 
            transform: `translate(${mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)` 
          }}
        />
        <div className="grid-overlay"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}/>
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="row align-items-center min-vh-100 py-5">
            {/* Left Content */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-text">
                <div className="badge-premium">
                  <span className="badge-dot"></span>
                  Performance Marketing Leaders
                </div>
                
                <h1 className="hero-title">
                  Power Your Business with{' '}
                  <span className="gradient-text">NexusCore Sync</span>
                </h1>

                <p className="hero-subtitle">
                  We connect advertisers with high-quality leads through
                  performance-based marketing. Grow faster, smarter, and more
                  efficiently with our network.
                </p>

                <div className="hero-features">
                  <div className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    <span>Verified High-Intent Leads</span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    <span>Real-Time Call Transfers</span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    <span>Compliance Guaranteed</span>
                  </div>
                </div>

                <div className="hero-cta">
                  <button
                    className="btn-primary-glow"
                    onClick={handleScrollToServices}
                  >
                    Get Started
                    <FaArrowRight className="btn-icon" />
                  </button>
                  <button className="btn-secondary-outline" onClick={() => navigate('/contact')}>
                    Contact Sales
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="trust-indicators">
                  <div className="trust-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                    <span>4.9/5 from 500+ partners</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="image-container">
                  <img
                    src="/home-photo.jpg"
                    alt="NexusCore Business"
                    className="hero-image"
                  />
                  <div className="image-glow"></div>
                </div>

                {/* Floating Cards */}
                <div className="floating-card card-1">
                  <div className="card-icon success">
                    <FaChartLine />
                  </div>
                  <div className="card-content">
                    <span className="card-number">+147%</span>
                    <span className="card-label">ROI Increase</span>
                  </div>
                </div>

                <div className="floating-card card-2">
                  <div className="card-icon primary">
                    <FaUsers />
                  </div>
                  <div className="card-content">
                    <span className="card-number">10K+</span>
                    <span className="card-label">Active Leads</span>
                  </div>
                </div>

                <div className="floating-card card-3">
                  <div className="card-icon warning">
                    <FaHeadset />
                  </div>
                  <div className="card-content">
                    <span className="card-number">24/7</span>
                    <span className="card-label">Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCard 
              icon={<FaUsers />} 
              number="500+" 
              label="Active Partners" 
              delay="0s"
            />
            <StatCard 
              icon={<FaPhoneVolume />} 
              number="1000000+" 
              label="Calls Generated" 
              delay="0.1s"
            />
            <StatCard 
              icon={<FaChartLine />} 
              number="98%" 
              label="Client Satisfaction" 
              delay="0.2s"
            />
            <StatCard 
              icon={<FaShieldAlt />} 
              number="100%" 
              label="Compliance Rate" 
              delay="0.3s"
            />
          </div>
        </div>
      </div>

      {/* Industries Marquee */}
      <div className="industries-section">
        <div className="container">
          <h3 className="section-label">NEXUSCORE's Pay-Per-Call Industries</h3>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...industries, ...industries].map((item, index) => (
              <div className="marquee-item" key={index}>
                <span className="marquee-icon">{item.icon}</span>
                <span className="marquee-text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Services That Convert.</h2>
            <p className="section-subtitle">Expertise That Scales.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <button
                key={index}
                className="service-card"
                onClick={() => handleServiceClick(service)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="service-name">{service}</span>
                <FaArrowRight className="service-arrow" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Help Center</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about our services</p>
          </div>

          <div className="faq-grid">
            <div className="faq-list">
              {faqs.slice(0, 6).map((item, index) => (
                <FAQItem key={index} item={item} index={index} />
              ))}
            </div>
            <div className="faq-list">
              {faqs.slice(6).map((item, index) => (
                <FAQItem key={index + 6} item={item} index={index + 6} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Scale Your Business?</h2>
              <p>Join 500+ partners who trust NexusCore for high-quality lead generation</p>
            </div>
            <div className="cta-actions">
              <button className="btn-primary-glow" onClick={() => navigate('/contact')}>
                Start Today
                <FaArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;