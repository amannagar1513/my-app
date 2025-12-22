import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import './Services.css';

const services = [
  { title: 'SSDI', description: 'Legal support for disability benefits', link: 'https://www.disablebenefit.com/', icon: '⚖️' },
  { title: 'Health Insurance', description: 'ACA and private health plan access', icon: '🏥' },
  { title: 'Debt Settlement', description: 'Financial relief via inbound calls', icon: '💰' },
  { title: 'Final Expenses', description: 'Peace of mind through final expense coverage', icon: '🛡️' },
  { title: 'Auto Insurance', description: 'Targeted campaigns for higher policy conversions', icon: '🚗' },
  { title: 'Credit Repair', description: 'Credible help for financial recovery', icon: '📈' },
  { title: 'Flight Booking', description: 'Seamless travel booking solutions', link: 'https://www.easierflightbooking.com/', icon: '✈️' },
  { title: 'Home Insurance', description: 'Comprehensive property protection plans', icon: '🏠' },
  { title: 'SSDI Ticket to Work', description: 'Employment support for disability beneficiaries', icon: '💼' },
  { title: 'AI Support', description: 'Intelligent automation for customer engagement', icon: '🤖' },
  { title: 'AI Agent Support', description: 'AI-powered assistance for live agents', icon: '🎯' },
  { title: 'Inbound Traffic Leads', description: 'High-intent inbound lead generation', icon: '📞' },
];

function ProcessBox({ number, title, description, delay }) {
  return (
    <div className="process-box" style={{ animationDelay: delay }}>
      <span className="process-number">{number}</span>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}

function ServiceSection({ title, subtitle, processes, image, imageAlt, reverse }) {
  return (
    <div className="service-detail-section">
      <div className="container">
        <div className="section-header-sm">
          <span className="section-tag">{title}</span>
          <h2 className="section-title-sm">{subtitle}</h2>
        </div>
        
        <div className={`row align-items-center ${reverse ? 'flex-md-row-reverse' : ''}`}>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="process-grid">
              {processes.map((process, index) => (
                <ProcessBox
                  key={index}
                  number={`0${index + 1}`}
                  title={process.title}
                  description={process.description}
                  delay={`${index * 0.1}s`}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-image-container">
              <img src={image} alt={imageAlt} className="service-image" />
              <div className="image-glow-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
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

  const handleServiceClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const serviceDetails = [
    {
      title: 'SSDI',
      subtitle: 'Our Proven Process to Connect SSDI Claimants',
      image: '/services-ssid.jpg',
      imageAlt: 'SSDI Process',
      reverse: false,
      processes: [
        { title: 'Audience Targeting', description: 'We use data-driven strategies to identify individuals likely eligible for SSDI benefits, ensuring relevance and accuracy from the start.' },
        { title: 'Qualification Screening', description: 'Leads are qualified through compliant pre-screening questions to ensure they meet basic SSDI requirements before connecting them further.' },
        { title: 'Live Call Transfer', description: 'Once qualified, prospects are live-transferred to SSDI legal service providers, ensuring warm, high-intent calls every time.' },
        { title: 'Conversion Optimization', description: 'We continuously refine campaign performance through analytics, ensuring higher conversion rates and compliance at scale.' },
      ],
    },
    {
      title: 'Health Insurance',
      subtitle: 'Our Proven Process to Connect Health Coverage Seekers',
      image: '/closeup-doctor-filling-life-insurance-form.jpg',
      imageAlt: 'Health Insurance',
      reverse: true,
      processes: [
        { title: 'Targeted Lead Generation', description: 'We identify individuals actively seeking health coverage using intent-based data, search behavior, and demographic insights to ensure quality leads.' },
        { title: 'Eligibility Screening', description: 'We pre-qualify consumers based on age, location, and insurance needs to match them with the most relevant plan options, from ACA to private coverage.' },
        { title: 'Live Agent Transfer', description: 'Once verified, prospects are transferred directly to licensed agents for real-time plan discussions and enrollments, reducing drop-offs and delays.' },
        { title: 'Performance Monitoring', description: 'We track key metrics—like contact rates and conversion outcomes—to continuously optimize campaign efficiency and deliver maximum ROI.' },
      ],
    },
    {
      title: 'Debt Settlement',
      subtitle: 'Our Proven Process to Connect Debt Relief Seekers',
      image: '/debt- services.jpg',
      imageAlt: 'Debt Settlement',
      reverse: false,
      processes: [
        { title: 'Debt-Relief Targeting', description: 'We identify financially stressed individuals actively seeking debt solutions using behavioral signals, credit indicators, and geo-targeted data.' },
        { title: 'Pre-Qualification', description: 'Each lead is screened based on total debt, employment status, and hardship type to ensure they\'re a match for settlement programs.' },
        { title: 'Live Call Transfer', description: 'Qualified consumers are immediately connected to certified debt relief agents for real-time consultations, increasing enrollment chances.' },
        { title: 'Performance Optimization', description: 'We monitor lead quality, contact rates, and conversion metrics continuously, optimizing for efficiency, compliance, and campaign ROI.' },
      ],
    },
    {
      title: 'Final Expenses',
      subtitle: 'Connecting Families with Trusted Coverage',
      image: '/finalexp-services.jpg',
      imageAlt: 'Final Expenses',
      reverse: true,
      processes: [
        { title: 'Intent-Based Targeting', description: 'We identify seniors and families researching funeral coverage and end-of-life planning, ensuring outreach is compassionate and timely.' },
        { title: 'Pre-Qualification', description: 'Consumers are screened based on age, income, and coverage needs to ensure alignment with available final expense insurance policies.' },
        { title: 'Warm Transfer', description: 'Qualified individuals are live-transferred to licensed insurance agents for real-time quotes and enrollment support, improving policy conversion.' },
        { title: 'Campaign Optimization', description: 'We monitor call quality, lead feedback, and sales outcomes in real time to refine campaign performance and maximize ROI for our partners.' },
      ],
    },
    {
      title: 'Auto Insurance',
      subtitle: 'Driving Higher Policy Conversions',
      image: '/insurance (2).jpg',
      imageAlt: 'Auto Insurance',
      reverse: false,
      processes: [
        { title: 'Auto Insurance Intent Targeting', description: 'We leverage behavioral data, online search signals, and geo-demographic filters to identify drivers actively comparing auto insurance quotes.' },
        { title: 'Qualification & Filtering', description: 'We pre-screen prospects based on coverage needs, vehicle details, and driver history to match them with appropriate policy providers.' },
        { title: 'Live Transfer to Licensed Agents', description: 'Verified leads are instantly connected to licensed auto insurance agents, enabling real-time quoting, bundling, and policy discussions.' },
        { title: 'Real-Time Campaign Optimization', description: 'We track performance indicators like bind rate, contact speed, and agent feedback to refine traffic sources and maximize ROI on every lead.' },
      ],
    },
    {
      title: 'Credit Repair',
      subtitle: 'Helping Consumers Rebuild Financial Health',
      image: '/credit.jpg',
      imageAlt: 'Credit Repair',
      reverse: true,
      processes: [
        { title: 'Credit-Damaged Lead Targeting', description: 'We locate individuals actively seeking credit repair through financial behavior, online intent signals, and credit bureau insights.' },
        { title: 'Pre-Qualification', description: 'Leads are vetted based on credit score range, financial goals, and recent credit inquiries to ensure fit with credit repair services.' },
        { title: 'Live Transfer', description: 'Engaged prospects are connected directly to credit repair specialists for real-time evaluations, increasing consultation success.' },
        { title: 'Conversion Monitoring', description: 'We track call outcomes, agent performance, and enrollment rates, continuously optimizing campaigns for better ROI and compliance.' },
      ],
    },
    {
      title: 'Home Insurance',
      subtitle: 'Our Proven Process to Connect Homeowners with Coverage',
      image: '/home-insurance.jpg',
      imageAlt: 'Home Insurance',
      reverse: false,
      processes: [
        { title: 'Homeowner Targeting', description: 'We identify homeowners actively shopping for property coverage using real estate data, mortgage triggers, and online search behavior.' },
        { title: 'Property Assessment', description: 'Leads are pre-qualified based on property type, location, coverage needs, and risk factors to match with appropriate insurers.' },
        { title: 'Live Agent Connection', description: 'Qualified homeowners are transferred directly to licensed agents for personalized quotes, bundling options, and policy discussions.' },
        { title: 'Performance Analytics', description: 'We continuously monitor bind rates, quote accuracy, and customer satisfaction to optimize campaign performance and ROI.' },
      ],
    },
    {
      title: 'SSDI Ticket to Work',
      subtitle: 'Empowering Beneficiaries Through Employment',
      image: '/ticket-to-work.jpg',
      imageAlt: 'SSDI Ticket to Work',
      reverse: true,
      processes: [
        { title: 'Beneficiary Identification', description: 'We target SSDI recipients eligible for the Ticket to Work program using benefit data and employment readiness indicators.' },
        { title: 'Program Education', description: 'Prospects are informed about how Ticket to Work allows them to explore employment while keeping their benefits secure.' },
        { title: 'Service Provider Connection', description: 'Qualified individuals are connected with Employment Networks and vocational rehabilitation services for personalized support.' },
        { title: 'Outcome Tracking', description: 'We monitor enrollment rates, job placements, and benefit retention to ensure program success and continuous improvement.' },
      ],
    },
    {
      title: 'AI Support',
      subtitle: 'Intelligent Automation for Customer Engagement',
      image: '/ai-support.jpg',
      imageAlt: 'AI Support',
      reverse: false,
      processes: [
        { title: 'AI Integration', description: 'We deploy cutting-edge AI solutions that seamlessly integrate with your existing systems for 24/7 customer support capabilities.' },
        { title: 'Natural Language Processing', description: 'Our AI understands context, intent, and sentiment to provide accurate, human-like responses to customer inquiries.' },
        { title: 'Smart Escalation', description: 'Complex queries are intelligently routed to human agents with full context, ensuring seamless handoffs and faster resolutions.' },
        { title: 'Continuous Learning', description: 'Our AI models continuously improve through feedback loops, enhancing accuracy and customer satisfaction over time.' },
      ],
    },
    {
      title: 'AI Agent Support',
      subtitle: 'Empowering Live Agents with AI Assistance',
      image: '/ai-agent-support.jpg',
      imageAlt: 'AI Agent Support',
      reverse: true,
      processes: [
        { title: 'Real-Time Assistance', description: 'AI provides live agents with instant access to knowledge bases, scripts, and recommended responses during customer interactions.' },
        { title: 'Sentiment Analysis', description: 'Real-time emotion detection helps agents adjust their approach, improving customer satisfaction and call outcomes.' },
        { title: 'Automated Documentation', description: 'AI automatically captures call summaries, action items, and follow-ups, reducing after-call work and boosting productivity.' },
        { title: 'Performance Insights', description: 'Detailed analytics on agent performance, common issues, and resolution patterns drive continuous training and improvement.' },
      ],
    },
    {
      title: 'Inbound Traffic Leads',
      subtitle: 'High-Intent Prospects Ready to Convert',
      image: '/inbound-leads.jpg',
      imageAlt: 'Inbound Traffic Leads',
      reverse: false,
      processes: [
        { title: 'Multi-Channel Acquisition', description: 'We generate inbound leads through SEO, paid media, content marketing, and strategic partnerships across high-intent channels.' },
        { title: 'Intent Verification', description: 'Every lead is validated for genuine interest and readiness to engage, ensuring you receive only conversion-ready prospects.' },
        { title: 'Real-Time Delivery', description: 'Qualified leads are delivered instantly to your sales team or CRM, enabling immediate follow-up while intent is highest.' },
        { title: 'Quality Optimization', description: 'We continuously analyze lead sources, conversion rates, and feedback to refine targeting and maximize your ROI.' },
      ],
    },
  ];

  return (
    <section className="services-page">
      {/* Animated Background */}
      <div className="services-bg">
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
      <div className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <span className="section-tag">What We Offer</span>
            <h1 className="services-hero-title">Our Services</h1>
            <p className="services-hero-subtitle">
              Performance-driven solutions tailored to maximize results across industries
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card ${service.link ? 'clickable' : ''}`}
                onClick={() => handleServiceClick(service.link)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="service-card-inner">
                  <div className="service-icon">{service.icon}</div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                  {service.link && (
                    <div className="service-link">
                      <span>Learn More</span>
                      <FaExternalLinkAlt />
                    </div>
                  )}
                </div>
                <div className="service-card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Summary */}
      <div className="service-summary-section">
        <div className="container">
          <div className="summary-card">
            <div className="summary-header">
              <span className="section-tag">Overview</span>
              <h2 className="summary-title">Service Summary</h2>
            </div>
            <div className="summary-content">
              <p>
                At <strong>Nexuscore</strong>, we deliver a full spectrum of performance-driven solutions tailored to maximize results across industries.
                For <strong>SSDI</strong>, we connect eligible individuals with legal professionals through targeted lead generation—ensuring claimants receive the help they need.
                In <strong>Health Insurance</strong>, we drive high-intent traffic for both ACA-compliant and private plans, enabling consumers to access affordable, quality coverage.
              </p>
              <p>
                Our <strong>Debt Settlement</strong> campaigns generate inbound calls from financially distressed individuals actively seeking relief,
                helping partners improve enrollment outcomes. For <strong>Final Expenses</strong>, we connect families with trusted insurers at key decision moments,
                supporting peace of mind when it matters most.
              </p>
              <p>
                In <strong>Auto Insurance</strong>, we leverage behavioral targeting to engage ready-to-bind customers and drive strong policy conversion rates.
                For <strong>Credit Repair</strong>, we identify consumers eager to rebuild their financial health and connect them with trusted service providers.
                Our <strong>Home Insurance</strong> campaigns connect homeowners with comprehensive property protection plans tailored to their needs.
              </p>
              <p>
                Through <strong>SSDI Ticket to Work</strong>, we help disability beneficiaries explore employment opportunities while maintaining their benefits.
                Our <strong>AI Support</strong> and <strong>AI Agent Support</strong> solutions leverage cutting-edge artificial intelligence to enhance customer engagement 
                and empower live agents with real-time assistance. With <strong>Inbound Traffic Leads</strong>, we generate high-intent, conversion-ready prospects 
                that drive measurable results for our partners.
              </p>
              <p>
                Through our core focus on <strong>Pay-Per-Call</strong>, we craft and optimize call flows that are high-intent, compliant, and conversion-ready.
                For <strong>Advertisers</strong>, we offer custom-built, ROI-focused campaigns powered by real-time insights and premium media placements.
                And for <strong>Publishers</strong>, we provide high-performing offers, real-time tracking, and dedicated support—making monetization simple, scalable, and more profitable than ever.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Sections */}
      {serviceDetails.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          subtitle={service.subtitle}
          processes={service.processes}
          image={service.image}
          imageAlt={service.imageAlt}
          reverse={service.reverse}
        />
      ))}

      {/* CTA Section */}
      <div className="services-cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Partner with NexusCore and transform your lead generation strategy</p>
            </div>
            <div className="cta-actions">
              <a href="/contact" className="btn-primary-glow">
                Contact Us
                <FaArrowRight className="btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;