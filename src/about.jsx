// About.jsx
import React from 'react';
import { FaPhoneAlt, FaExchangeAlt, FaDatabase, FaBullhorn } from 'react-icons/fa';
import './About.css';

function InfoCard({ title, text }) {
  return (
    <div className="info-card p-4 rounded-4 h-100 shadow" style={{ backgroundColor: '#2e3a59' }}>
      <h4 className="fw-semibold mb-3 text-white">{title}</h4>
      <p className="text-white-50">{text}</p>
    </div>
  );
}

function About() {
  return (
    <section className="about-section d-flex align-items-center justify-content-center">
      <div className="container text-center px-3" style={{ maxWidth: '1000px' }}>
        
        {/* Company Name & Intro */}
        <h1 className="display-4 fw-bold mb-4 text-glow">NEXUSCORE SYNC PRIVATE LIMITED</h1>
        <p className="lead text-white-50 mb-5 fade-in">
          NEXUSCORE is a results-driven performance marketing network focused on connecting
          businesses with high-intent leads. Through strategic partnerships, real-time
          analytics, and a customer-first approach, we empower advertisers to grow smarter,
          faster, and more efficiently. With NEXUSCORE, lead generation and customer
          acquisition become seamless. We deliver inbound calls tailored to your business
          through Pay-Per-Call campaigns — driving lower CPAs and higher ROI. From 
          TCPA-compliant transfers via trusted onshore and offshore centers to automated
          lead and data delivery, we simplify the process end-to-end. Our diverse 
          advertising channels include paid search, display, social media, directories,
          and more.
        </p>

        {/* Vision & Mission Cards */}
        <div className="row gx-4 gy-4 text-start mb-5">
          <div className="col-md-6">
            <InfoCard
              title="Company Vision"
              text="To become the most trusted and results-driven lead generation partner for U.S.-based businesses in the health, financial, and senior care sectors. We deliver high-intent, verified leads using innovation, data-driven strategies, and regulatory compliance to fuel sustainable growth."
            />
          </div>
          <div className="col-md-6">
            <InfoCard
              title="Company Mission"
              text="To deliver reliable, scalable lead generation solutions across healthcare and financial services. We connect businesses with qualified, high-intent consumers, striving for operational excellence and measurable outcomes."
            />
          </div>
        </div>

        {/* 🔵 Dark Blue Info Row */}
        <div className="rounded-4 shadow-lg px-4 py-5 mb-5" style={{ backgroundColor: '#10243e' }}>
          <h3 className="mb-4 fw-bold text-white">Unlock Top ROI with Proven Pay-Per-Call Strategies</h3>
          <div className="row g-4 justify-content-center text-start">
            <div className="col-sm-6 col-md-3">
              <div className="text-center text-white">
                <FaPhoneAlt size={40} className="mb-3" />
                <h5>Inbound Calls</h5>
                <p className="text-white-50">Direct connections with high-intent customers via phone.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="text-center text-white">
                <FaExchangeAlt size={40} className="mb-3" />
                <h5>Transfers</h5>
                <p className="text-white-50">Seamless TCPA-compliant call transfers through trusted centers.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="text-center text-white">
                <FaDatabase size={40} className="mb-3" />
                <h5>Leads & Data</h5>
                <p className="text-white-50">Automated and accurate lead delivery with real-time data.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="text-center text-white">
                <FaBullhorn size={40} className="mb-3" />
                <h5>Advertising Channels</h5>
                <p className="text-white-50">Multi-channel strategies including search, social, display, and more.</p>
              </div>
            </div>
          </div>
        </div>
        {/* ✅ Features & Benefits Section */}
<div className="py-5 px-4 text-white" style={{ backgroundColor: '#10243e' }}>
  <h3 className="fw-bold mb-4 text-center text-glow">Features & Benefits</h3>
  <p className="lead text-center text-white-50 mb-5">Spotlight features that captivate audiences</p>

  <div className="row g-4">
    <div className="col-md-4">
      <div className="p-4 rounded-4 h-100 shadow" style={{ backgroundColor: '#2a4c99ff' }}>
        <h5 className="fw-semibold text-white mb-3">Health Insurance</h5>
        <p className="text-white-50">
          Get tailored health insurance options that fit your lifestyle and budget — all from trusted providers.
        </p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-4 rounded-4 h-100 shadow" style={{ backgroundColor: '#2a4c99ff' }}>
        <h5 className="fw-semibold text-white mb-3">Debt Settlement</h5>
        <p className="text-white-50">
          Reduce your outstanding balances with expert-led debt settlement programs designed to bring financial relief.
        </p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-4 rounded-4 h-100 shadow" style={{ backgroundColor: '#2a4c99ff' }}>
        <h5 className="fw-semibold text-white mb-3">Final Expenses</h5>
        <p className="text-white-50">
          Secure peace of mind with final expense coverage that helps your loved ones manage end-of-life costs with ease.
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}

export default About;
