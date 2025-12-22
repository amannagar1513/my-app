import React, { useState, useEffect } from 'react';
import { 
  FaPhoneAlt, 
  FaExchangeAlt, 
  FaDatabase, 
  FaBullhorn,
  FaEye,
  FaBullseye,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import './About.css';

function InfoCard({ icon, title, text, delay }) {
  return (
    <div className="info-card" style={{ animationDelay: delay }}>
      <div className="info-card-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

function FeatureCard({ icon, title, text, delay }) {
  return (
    <div className="feature-card" style={{ animationDelay: delay }}>
      <div className="feature-icon">{icon}</div>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
}

function StatItem({ number, label, delay }) {
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
    <div className="stat-item" style={{ animationDelay: delay }}>
      <span className="stat-number">
        {count.toLocaleString()}{number.includes('+') ? '+' : ''}{number.includes('%') ? '%' : ''}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function About() {
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

  const strategies = [
    {
      icon: <FaPhoneAlt />,
      title: 'Inbound Calls',
      text: 'Direct connections with high-intent customers via phone.'
    },
    {
      icon: <FaExchangeAlt />,
      title: 'Transfers',
      text: 'Seamless TCPA-compliant call transfers through trusted centers.'
    },
    {
      icon: <FaDatabase />,
      title: 'Leads & Data',
      text: 'Automated and accurate lead delivery with real-time data.'
    },
    {
      icon: <FaBullhorn />,
      title: 'Advertising Channels',
      text: 'Multi-channel strategies including search, social, display, and more.'
    },
  ];

  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: 'Health Insurance',
      text: 'Get tailored health insurance options that fit your lifestyle and budget — all from trusted providers.'
    },
    {
      icon: <FaChartLine />,
      title: 'Debt Settlement',
      text: 'Reduce your outstanding balances with expert-led debt settlement programs designed to bring financial relief.'
    },
    {
      icon: <FaUsers />,
      title: 'Final Expenses',
      text: 'Secure peace of mind with final expense coverage that helps your loved ones manage end-of-life costs with ease.'
    },
  ];

  const values = [
    'Results-driven performance marketing',
    'High-intent, verified leads',
    'TCPA-compliant call transfers',
    'Real-time analytics & reporting',
    'Multi-channel advertising strategies',
    'Dedicated partner support'
  ];

  return (
    <section className="about-page">
      {/* Animated Background */}
      <div className="about-bg">
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
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}/>
        ))}
      </div>

      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="section-tag">About Us</span>
            <h1 className="about-hero-title">
              NEXUSCORE SYNC <span className="gradient-text">PRIVATE LIMITED</span>
            </h1>
            <p className="about-hero-subtitle">
              A results-driven performance marketing network focused on connecting
              businesses with high-intent leads through strategic partnerships,
              real-time analytics, and a customer-first approach.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats-section">
        <div className="container">
          <div className="stats-row">
            <StatItem number="500+" label="Active Partners" delay="0s" />
            <StatItem number="1000000+" label="Calls Generated" delay="0.1s" />
            <StatItem number="98%" label="Client Satisfaction" delay="0.2s" />
            <StatItem number="100%" label="Compliance Rate" delay="0.3s" />
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="about-content-section">
        <div className="container">
          <div className="about-card">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="about-text">
                  <span className="section-tag">Who We Are</span>
                  <h2 className="section-title">Empowering Businesses Through Performance Marketing</h2>
                  <p>
                    With NEXUSCORE, lead generation and customer acquisition become seamless. 
                    We deliver inbound calls tailored to your business through Pay-Per-Call 
                    campaigns — driving lower CPAs and higher ROI.
                  </p>
                  <p>
                    From TCPA-compliant transfers via trusted onshore and offshore centers 
                    to automated lead and data delivery, we simplify the process end-to-end. 
                    Our diverse advertising channels include paid search, display, social media, 
                    directories, and more.
                  </p>
                  <div className="value-list">
                    {values.map((value, index) => (
                      <div key={index} className="value-item">
                        <FaCheckCircle className="value-icon" />
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image-container">
                  <img 
                    src="/about-image.jpg" 
                    alt="NexusCore Team" 
                    className="about-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="image-glow-effect"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="vision-mission-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Purpose</span>
            <h2 className="section-title">Vision & Mission</h2>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <InfoCard
                icon={<FaEye />}
                title="Company Vision"
                text="To become the most trusted and results-driven lead generation partner for U.S.-based businesses in the health, financial, and senior care sectors. We deliver high-intent, verified leads using innovation, data-driven strategies, and regulatory compliance to fuel sustainable growth."
                delay="0s"
              />
            </div>
            <div className="col-lg-6">
              <InfoCard
                icon={<FaBullseye />}
                title="Company Mission"
                text="To deliver reliable, scalable lead generation solutions across healthcare and financial services. We connect businesses with qualified, high-intent consumers, striving for operational excellence and measurable outcomes."
                delay="0.1s"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Strategies Section */}
      <div className="strategies-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title">Unlock Top ROI with Proven Pay-Per-Call Strategies</h2>
            <p className="section-subtitle">
              Comprehensive solutions designed to maximize your lead generation potential
            </p>
          </div>

          <div className="strategies-grid">
            {strategies.map((strategy, index) => (
              <div key={index} className="strategy-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="strategy-icon">{strategy.icon}</div>
                <h4>{strategy.title}</h4>
                <p>{strategy.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Features & Benefits</h2>
            <p className="section-subtitle">Spotlight features that captivate audiences</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                text={benefit.text}
                delay={`${index * 0.1}s`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="about-cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Partner with Us?</h2>
              <p>Join hundreds of businesses who trust NexusCore for high-quality lead generation</p>
            </div>
            <div className="cta-actions">
              <a href="/contact" className="btn-primary-glow">
                Get Started
                <FaArrowRight className="btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
