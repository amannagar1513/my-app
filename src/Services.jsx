import React from 'react';
import './Services.css';

const services = [
  { title: 'SSDI', description: 'Legal support for disability benefits' },
  { title: 'Health Insurance', description: 'ACA and private health plan access' },
  { title: 'Debt Settlement', description: 'Financial relief via inbound calls' },
  { title: 'Final Expenses', description: 'Peace of mind through final expense coverage' },
  { title: 'Auto Insurance', description: 'Targeted campaigns for higher policy conversions' },
  { title: 'Credit Repair', description: 'Credible help for financial recovery' },
];

function Services() {
  return (
    <section className="services-container">
      <div className="container py-5">
        <h2 className="section-title text-center mb-5">Our Services</h2>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="service-card tilt-card">
                <div className="card-gradient"></div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔽 Add your paragraph here */}
        <div className="text-white mt-5 px-2" style={{ maxWidth: '900px', margin: '0   auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
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
          </p>
          <p>
            Through our core focus on <strong>Pay-Per-Call</strong>, we craft and optimize call flows that are high-intent, compliant, and conversion-ready.
            For <strong>Advertisers</strong>, we offer custom-built, ROI-focused campaigns powered by real-time insights and premium media placements.
            And for <strong>Publishers</strong>, we provide high-performing offers, real-time tracking, and dedicated support—making monetization simple, scalable, and more profitable than ever.
          </p>
        </div>
        {/* ✅ SSDI Process Section */}
<div className="ssdi-process container my-5">
    <h5 className="section-title text-center mb-5">SSDI</h5>

  <h2 className="section-title text-center mb-5">Our Proven Process to Connect SSDI Claimants</h2>
  <div className="row align-items-center">
    
    {/* Left Side - 4 Box Grid */}
    <div className="col-md-6 mb-4 mb-md-0">
      <div className="process-grid">
        {/* Step 1 */}
        <div className="process-box">
          <span>01</span>
          <h5>Audience Targeting</h5>
          <p>
            We use data-driven strategies to identify individuals likely eligible for SSDI benefits,
            ensuring relevance and accuracy from the start.
          </p>
        </div>
        {/* Step 2 */}
        <div className="process-box">
          <span>02</span>
          <h5>Qualification Screening</h5>
          <p>
            Leads are qualified through compliant pre-screening questions to ensure they meet basic SSDI
            requirements before connecting them further.
          </p>
        </div>
        {/* Step 3 */}
        <div className="process-box">
          <span>03</span>
          <h5>Live Call Transfer</h5>
          <p>
            Once qualified, prospects are live-transferred to SSDI legal service providers, ensuring warm,
            high-intent calls every time.
          </p>
        </div>
        {/* Step 4 */}
        <div className="process-box">
          <span>04</span>
          <h5>Conversion Optimization</h5>
          <p>
            We continuously refine campaign performance through analytics, ensuring higher conversion rates
            and compliance at scale.
          </p>
        </div>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="col-md-6 text-center">
      <img
        src="/services-ssid.jpg"  
        alt="SSDI Process"
        className="img-fluid rounded shadow"
        style={{ maxHeight: '500px', objectFit: 'cover' }}
      />
    </div>
  </div>
</div>
{/* === SECTION 2 (Image Left, Boxes Right) === */}
<div className="ssdi-process container my-5">
  <h2 className="section-title text-center mb-5">Health Insurance</h2>
  <h2 className="section-title text-center mb-5">Our Proven Process to Connect Health Coverage Seekers</h2>
  <div className="row align-items-center flex-md-row-reverse">
    {/* Image Left */}
    <div className="col-md-6 text-center mb-4 mb-md-0">
      <img
        src="/closeup-doctor-filling-life-insurance-form.jpg"
        alt="Section 2"
        className="img-fluid rounded shadow"
        style={{ maxHeight: '550px', maxWidth: '450px', objectFit: 'cover' }}
      />
    </div>

    {/* Boxes Right */}
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

{/* === SECTION 3 (Image Right, Boxes Left) === */}
<div className="ssdi-process container my-5">
  <h2 className="section-title text-center mb-5">Debt Settlement</h2>
    <h2 className="section-title text-center mb-5">Our Proven Process to Connect Debt Relief Seekers</h2>

  <div className="row align-items-center">
    {/* Boxes Left */}
    <div className="col-md-6 mb-4 mb-md-0">
      <div className="process-grid">
        <div className="process-box"><span>01</span><h5>Debt-Relief Targeting</h5><p>We identify financially stressed individuals actively seeking debt solutions using behavioral signals, credit indicators, and geo-targeted data.</p></div>
        <div className="process-box"><span>02</span><h5>Pre-Qualification</h5><p>Each lead is screened based on total debt, employment status, and hardship type to ensure they're a match for settlement programs.</p></div>
        <div className="process-box"><span>03</span><h5>Live Call Transfer</h5><p>Qualified consumers are immediately connected to certified debt relief agents for real-time consultations, increasing enrollment chances.</p></div>
        <div className="process-box"><span>04</span><h5>Performance Optimization</h5><p>We monitor lead quality, contact rates, and conversion metrics continuously, optimizing for efficiency, compliance, and campaign ROI.</p></div>
      </div>
    </div>

    {/* Image Right */}
    <div className="col-md-6 text-center">
      <img
        src="/debt- services.jpg"
        alt="Section 3"
        className="img-fluid rounded shadow"
        style={{ maxHeight: '600px',maxWidth: '600px', objectFit: 'cover' }}
      />
    </div>
  </div>
</div>

{/* === SECTION 4 (Image Left) === */}
<div className="ssdi-process container my-5">
  <h2 className="section-title text-center mb-5">Final Expenses</h2>
  <div className="row align-items-center flex-md-row-reverse">
    {/* Image Left */}
    <div className="col-md-6 text-center mb-4 mb-md-0">
      <img
        src="/finalexp-services.jpg"
        alt="Section 4"
        className="img-fluid rounded shadow"
        style={{ maxHeight: '500px', objectFit: 'cover' }}
      />
    </div>

    {/* Boxes Right */}
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

{/* === SECTION 5 (Image Right) === */}
<div className="ssdi-process container my-5">
  <h2 className="section-title text-center mb-5">Auto Insurance</h2>
  <div className="row align-items-center">
    {/* Boxes Left */}
    <div className="col-md-6 mb-4 mb-md-0">
      <div className="process-grid">
        <div className="process-box"><span>01</span><h5>Auto Insurance Intent Targeting</h5><p>We leverage behavioral data, online search signals, and geo-demographic filters to identify drivers actively comparing auto insurance quotes.</p></div>
        <div className="process-box"><span>02</span><h5>Qualification & Filtering</h5><p>We pre-screen prospects based on coverage needs, vehicle details, and driver history to match them with appropriate policy providers.</p></div>
        <div className="process-box"><span>03</span><h5>Live Transfer to Licensed Agents</h5><p>Verified leads are instantly connected to licensed auto insurance agents, enabling real-time quoting, bundling, and policy discussions.</p></div>
        <div className="process-box"><span>04</span><h5>Real-Time Campaign Optimization</h5><p>We track performance indicators like bind rate, contact speed, and agent feedback to refine traffic sources and maximize ROI on every lead.</p></div>
      </div>
    </div>

    {/* Image Right */}
    <div className="col-md-6 text-center">
      <img
        src="/insurance (2).jpg"
        alt="Section 5"
        className="img-fluid rounded shadow"
        style={{ maxHeight: '500px', objectFit: 'cover' }}
      />
    </div>
  </div>
</div>
{/* === SECTION 5 (Image Right) === */}
<div className="ssdi-process container my-5">
  <h2 className="section-title text-center mb-5">Credit Repair</h2>
  <div className="row align-items-center">
    {/* Boxes Left */}
    <div className="col-md-6 mb-4 mb-md-0">
      <div className="process-grid">
        <div className="process-box"><span>01</span><h5>Credit-Damaged Lead Targeting</h5><p>We locate individuals actively seeking credit repair through financial behavior, online intent signals, and credit bureau insights.</p></div>
        <div className="process-box"><span>02</span><h5>Pre-Qualification</h5><p>Leads are vetted based on credit score range, financial goals, and recent credit inquiries to ensure fit with credit repair services.</p></div>
        <div className="process-box"><span>03</span><h5>Live Transfer</h5><p>Engaged prospects are connected directly to credit repair specialists for real-time evaluations, increasing consultation success.</p></div>
        <div className="process-box"><span>04</span><h5>Conversion Monitoring</h5><p>We track call outcomes, agent performance, and enrollment rates, continuously optimizing campaigns for better ROI and compliance.</p></div>
      </div>
    </div>

    {/* Image Right */}
    <div className="col-md-6 text-center">
      <img
        src="/credit.jpg"
        alt="Section 5"
        className="img-fluid rounded shadow"
        style={{ maxHeight: '500px', objectFit: 'cover' }}
      />
    </div>
  </div>
</div>
      </div>
      
    </section>
    
  );
}

export default Services;
