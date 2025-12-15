import React from 'react';
import './Services.css';

const services = [
  { title: 'SSDI', description: 'Legal support for disability benefits', link: 'https://www.disablebenefit.com/' },
  { title: 'Health Insurance', description: 'ACA and private health plan access' },
  { title: 'Debt Settlement', description: 'Financial relief via inbound calls' },
  { title: 'Final Expenses', description: 'Peace of mind through final expense coverage' },
  { title: 'Auto Insurance', description: 'Targeted campaigns for higher policy conversions' },
  { title: 'Credit Repair', description: 'Credible help for financial recovery' },
  { title: 'Flight Booking', description: 'Seamless travel booking solutions', link: 'https://www.easierflightbooking.com/' },
  { title: 'Home Insurance', description: 'Comprehensive property protection plans' },
  { title: 'SSDI Ticket to Work', description: 'Employment support for disability beneficiaries' },
  { title: 'AI Support', description: 'Intelligent automation for customer engagement' },
  { title: 'AI Agent Support', description: 'AI-powered assistance for live agents' },
  { title: 'Inbound Traffic Leads', description: 'Organic leads generation' },
];

function Services() {
  const handleServiceClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="services-container">
      <div className="container py-5">
        <h2 className="section-title text-center mb-5">Our Services</h2>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div 
                className={`service-card tilt-card ${service.link ? 'clickable' : ''}`}
                onClick={() => handleServiceClick(service.link)}
                style={service.link ? { cursor: 'pointer' } : {}}
              >
                <div className="card-gradient"></div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                {service.link && (
                  <div className="learn-more">
                    Learn More →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-white mt-5 px-2" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
         <h1>Service Summary:</h1>
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

        {/* SSDI Process Section */}
        <div className="ssdi-process container my-5">
          <h5 className="section-title text-center mb-5">SSDI</h5>
          <h2 className="section-title text-center mb-5">Our Proven Process to Connect SSDI Claimants</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="process-grid">
                <div className="process-box">
                  <span>01</span>
                  <h5>Audience Targeting</h5>
                  <p>We use data-driven strategies to identify individuals likely eligible for SSDI benefits, ensuring relevance and accuracy from the start.</p>
                </div>
                <div className="process-box">
                  <span>02</span>
                  <h5>Qualification Screening</h5>
                  <p>Leads are qualified through compliant pre-screening questions to ensure they meet basic SSDI requirements before connecting them further.</p>
                </div>
                <div className="process-box">
                  <span>03</span>
                  <h5>Live Call Transfer</h5>
                  <p>Once qualified, prospects are live-transferred to SSDI legal service providers, ensuring warm, high-intent calls every time.</p>
                </div>
                <div className="process-box">
                  <span>04</span>
                  <h5>Conversion Optimization</h5>
                  <p>We continuously refine campaign performance through analytics, ensuring higher conversion rates and compliance at scale.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src="/services-ssid.jpg" alt="SSDI Process" className="img-fluid rounded shadow" style={{ maxHeight: '500px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Health Insurance Section */}
        <div className="ssdi-process container my-5">
          <h2 className="section-title text-center mb-5">Health Insurance</h2>
          <h2 className="section-title text-center mb-5">Our Proven Process to Connect Health Coverage Seekers</h2>
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img src="/closeup-doctor-filling-life-insurance-form.jpg" alt="Health Insurance" className="img-fluid rounded shadow" style={{ maxHeight: '550px', maxWidth: '450px', objectFit: 'cover' }} />
            </div>
            <div className="col-md-6">
              <div className="process-grid">
                <div className="process-box"><span>01</span><h5>Targeted Lead Generation</h5><p>We identify individuals actively seeking health coverage using intent-based data, search behavior, and demographic insights to ensure quality leads.</p></div>
                <div className="process-box"><span>02</span><h5>Eligibility Screening</h5><p>We pre-qualify consumers based on age, location, and insurance needs to match them with the most relevant plan options, from ACA to private coverage.</p></div>
                <div className="process-box"><span>03</span><h5>Live Agent Transfer</h5><p>Once verified, prospects are transferred directly to licensed agents for real-time plan discussions and enrollments, reducing drop-offs and delays.</p></div>
                <div className="process-box"><span>04</span><h5>Performance Monitoring</h5><p>We track key metrics—like contact rates and conversion outcomes—to continuously optimize campaign efficiency and deliver maximum ROI.</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Debt Settlement Section */}
        <div className="ssdi-process container my-5">
          <h2 className="section-title text-center mb-5">Debt Settlement</h2>
          <h2 className="section-title text-center mb-5">Our Proven Process to Connect Debt Relief Seekers</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="process-grid">
                <div className="process-box"><span>01</span><h5>Debt-Relief Targeting</h5><p>We identify financially stressed individuals actively seeking debt solutions using behavioral signals, credit indicators, and geo-targeted data.</p></div>
                <div className="process-box"><span>02</span><h5>Pre-Qualification</h5><p>Each lead is screened based on total debt, employment status, and hardship type to ensure they're a match for settlement programs.</p></div>
                <div className="process-box"><span>03</span><h5>Live Call Transfer</h5><p>Qualified consumers are immediately connected to certified debt relief agents for real-time consultations, increasing enrollment chances.</p></div>
                <div className="process-box"><span>04</span><h5>Performance Optimization</h5><p>We monitor lead quality, contact rates, and conversion metrics continuously, optimizing for efficiency, compliance, and campaign ROI.</p></div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src="/debt- services.jpg" alt="Debt Settlement" className="img-fluid rounded shadow" style={{ maxHeight: '600px', maxWidth: '600px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Final Expenses Section */}
        <div className="ssdi-process container my-5">
          <h2 className="section-title text-center mb-5">Final Expenses</h2>
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img src="/finalexp-services.jpg" alt="Final Expenses" className="img-fluid rounded shadow" style={{ maxHeight: '500px', objectFit: 'cover' }} />
            </div>
            <div className="col-md-6">
              <div className="process-grid">
                <div className="process-box"><span>01</span><h5>Intent-Based Targeting</h5><p>We identify seniors and families researching funeral coverage and end-of-life planning, ensuring outreach is compassionate and timely.</p></div>
                <div className="process-box"><span>02</span><h5>Pre-Qualification</h5><p>Consumers are screened based on age, income, and coverage needs to ensure alignment with available final expense insurance policies.</p></div>
                <div className="process-box"><span>03</span><h5>Warm Transfer</h5><p>Qualified individuals are live-transferred to licensed insurance agents for real-time quotes and enrollment support, improving policy conversion.</p></div>
                <div className="process-box"><span>04</span><h5>Campaign Optimization</h5><p>We monitor call quality, lead feedback, and sales outcomes in real time to refine campaign performance and maximize ROI for our partners.</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Auto Insurance Section */}
        <div className="ssdi-process container my-5">
          <h2 className="section-title text-center mb-5">Auto Insurance</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="process-grid">
                <div className="process-box"><span>01</span><h5>Auto Insurance Intent Targeting</h5><p>We leverage behavioral data, online search signals, and geo-demographic filters to identify drivers actively comparing auto insurance quotes.</p></div>
                <div className="process-box"><span>02</span><h5>Qualification & Filtering</h5><p>We pre-screen prospects based on coverage needs, vehicle details, and driver history to match them with appropriate policy providers.</p></div>
                <div className="process-box"><span>03</span><h5>Live Transfer to Licensed Agents</h5><p>Verified leads are instantly connected to licensed auto insurance agents, enabling real-time quoting, bundling, and policy discussions.</p></div>
                <div className="process-box"><span>04</span><h5>Real-Time Campaign Optimization</h5><p>We track performance indicators like bind rate, contact speed, and agent feedback to refine traffic sources and maximize ROI on every lead.</p></div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src="/insurance (2).jpg" alt="Auto Insurance" className="img-fluid rounded shadow" style={{ maxHeight: '500px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Credit Repair Section */}
        <div className="ssdi-process container my-5">
          <h2 className="section-title text-center mb-5">Credit Repair</h2>
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img src="/credit.jpg" alt="Credit Repair" className="img-fluid rounded shadow" style={{ maxHeight: '500px', objectFit: 'cover' }} />
            </div>
            <div className="col-md-6">
              <div className="process-grid">
                <div className="process-box"><span>01</span><h5>Credit-Damaged Lead Targeting</h5><p>We locate individuals actively seeking credit repair through financial behavior, online intent signals, and credit bureau insights.</p></div>
                <div className="process-box"><span>02</span><h5>Pre-Qualification</h5><p>Leads are vetted based on credit score range, financial goals, and recent credit inquiries to ensure fit with credit repair services.</p></div>
                <div className="process-box"><span>03</span><h5>Live Transfer</h5><p>Engaged prospects are connected directly to credit repair specialists for real-time evaluations, increasing consultation success.</p></div>
                <div className="process-box"><span>04</span><h5>Conversion Monitoring</h5><p>We track call outcomes, agent performance, and enrollment rates, continuously optimizing campaigns for better ROI and compliance.</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Insurance Section */}
        <div className="ssdi-process container my-5">
          <h2 className="section-title text-center mb-5">Home Insurance</h2>
          <h2 className="section-title text-center mb-5">Our Proven Process to Connect Homeowners with Coverage</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="process-grid">
                <div className="process-box"><span>01</span><h5>Homeowner Targeting</h5><p>We identify homeowners actively shopping for property coverage using real estate data, mortgage triggers, and online search behavior.</p></div>
                <div className="process-box"><span>02</span><h5>Property Assessment</h5><p>Leads are pre-qualified based on property type, location, coverage needs, and risk factors to match with appropriate insurers.</p></div>
                <div className="process-box"><span>03</span><h5>Live Agent Connection</h5><p>Qualified homeowners are transferred directly to licensed agents for personalized quotes, bundling options, and policy discussions.</p></div>
                <div className="process-box"><span>04</span><h5>Performance Analytics</h5><p>We continuously monitor bind rates, quote accuracy, and customer satisfaction to optimize campaign performance and ROI.</p></div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src="/home.jpg" alt="Home Insurance" className="img-fluid rounded shadow" style={{ maxHeight: '500px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* SSDI Ticket to Work Section */}
        <div className="ssdi-process container my-5">
          <h2 className="section-title text-center mb-5">SSDI Ticket to Work</h2>
          <h2 className="section-title text-center mb-5">Empowering Beneficiaries Through Employment</h2>
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img src="/services-ssid.jpg" alt="SSDI Ticket to Work" className="img-fluid rounded shadow" style={{ maxHeight: '500px', objectFit: 'cover' }} />
            </div>
            <div className="col-md-6">
              <div className="process-grid">
                <div className="process-box"><span>01</span><h5>Beneficiary Identification</h5><p>We target SSDI recipients eligible for the Ticket to Work program using benefit data and employment readiness indicators.</p></div>
                <div className="process-box"><span>02</span><h5>Program Education</h5><p>Prospects are informed about how Ticket to Work allows them to explore employment while keeping their benefits secure.</p></div>
                <div className="process-box"><span>03</span><h5>Service Provider Connection</h5><p>Qualified individuals are connected with Employment Networks and vocational rehabilitation services for personalized support.</p></div>
                <div className="process-box"><span>04</span><h5>Outcome Tracking</h5><p>We monitor enrollment rates, job placements, and benefit retention to ensure program success and continuous improvement.</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Support Section */}
        <div className="ssdi-process container my-5">
          <h2 className="section-title text-center mb-5">AI Support</h2>
          <h2 className="section-title text-center mb-5">Intelligent Automation for Customer Engagement</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="process-grid">
                <div className="process-box"><span>01</span><h5>AI Integration</h5><p>We deploy cutting-edge AI solutions that seamlessly integrate with your existing systems for 24/7 customer support capabilities.</p></div>
                <div className="process-box"><span>02</span><h5>Natural Language Processing</h5><p>Our AI understands context, intent, and sentiment to provide accurate, human-like responses to customer inquiries.</p></div>
                <div className="process-box"><span>03</span><h5>Smart Escalation</h5><p>Complex queries are intelligently routed to human agents with full context, ensuring seamless handoffs and faster resolutions.</p></div>
                <div className="process-box"><span>04</span><h5>Continuous Learning</h5><p>Our AI models continuously improve through feedback loops, enhancing accuracy and customer satisfaction over time.</p></div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src="/AI.jpg" alt="AI Support" className="img-fluid rounded shadow" style={{ maxHeight: '500px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* AI Agent Support Section */}
        <div className="ssdi-process container my-5">
          <h2 className="section-title text-center mb-5">AI Agent Support</h2>
          <h2 className="section-title text-center mb-5">Empowering Live Agents with AI Assistance</h2>
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img src="/Ai-agent.jpg" alt="AI Agent Support" className="img-fluid rounded shadow" style={{ maxHeight: '500px', objectFit: 'cover' }} />
            </div>
            <div className="col-md-6">
              <div className="process-grid">
                <div className="process-box"><span>01</span><h5>Real-Time Assistance</h5><p>AI provides live agents with instant access to knowledge bases, scripts, and recommended responses during customer interactions.</p></div>
                <div className="process-box"><span>02</span><h5>Sentiment Analysis</h5><p>Real-time emotion detection helps agents adjust their approach, improving customer satisfaction and call outcomes.</p></div>
                <div className="process-box"><span>03</span><h5>Automated Documentation</h5><p>AI automatically captures call summaries, action items, and follow-ups, reducing after-call work and boosting productivity.</p></div>
                <div className="process-box"><span>04</span><h5>Performance Insights</h5><p>Detailed analytics on agent performance, common issues, and resolution patterns drive continuous training and improvement.</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Inbound Traffic Leads Section */}
        <div className="ssdi-process container my-5">
          <h2 className="section-title text-center mb-5">Inbound Traffic Leads</h2>
          <h2 className="section-title text-center mb-5">High-Intent Prospects Ready to Convert</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="process-grid">
                <div className="process-box"><span>01</span><h5>Multi-Channel Acquisition</h5><p>We generate inbound leads through SEO, paid media, content marketing, and strategic partnerships across high-intent channels.</p></div>
                <div className="process-box"><span>02</span><h5>Intent Verification</h5><p>Every lead is validated for genuine interest and readiness to engage, ensuring you receive only conversion-ready prospects.</p></div>
                <div className="process-box"><span>03</span><h5>Real-Time Delivery</h5><p>Qualified leads are delivered instantly to your sales team or CRM, enabling immediate follow-up while intent is highest.</p></div>
                <div className="process-box"><span>04</span><h5>Quality Optimization</h5><p>We continuously analyze lead sources, conversion rates, and feedback to refine targeting and maximize your ROI.</p></div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src="/home-photo.jpg" alt="Inbound Traffic Leads" className="img-fluid rounded shadow" style={{ maxHeight: '500px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;