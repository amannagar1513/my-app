import React from 'react';
import './Footer.css'; // Custom styles

function Footer() {
  return (
    <footer className="footer-section text-white pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Innovar</h4>
            <p>
              We offer a full suite of performance-based services across high-demand verticals like SSDI, Health Insurance,
              Auto Insurance, and Credit Repair — all designed to drive real results.
            </p>
          </div>

          {/* Services */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Our Services</h5>
            <ul className="list-unstyled">
              <li>SSDI</li>
              <li>Health Insurance</li>
              <li>Debt Settlement</li>
              <li>Final Expenses</li>
              <li>Auto Insurance</li>
              <li>Credit Repair</li>
              <br></br>
              <li>Pay-Per-Call</li>
              <li>Advertisers</li>
              <li>Publishers</li>
              <li>Media Buying</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Office</h5>
            <p>
              H-150 Noida<br />
              NOIDA 210012
            </p>
            <p>Email: <a href="mailto:contacts@unicorncallpointmedia.com" className="text-white">hr@nexuscore.com</a></p>
            <p>Phone: <a href="tel:+918240243162" className="text-white">+91 9560720420</a></p>
          </div>
        </div>

        <hr className="border-light" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-2">
          <p className="mb-1">&copy; 2025-2029 NEXUSCORE SYNC PRIVATE LIMITED. All Rights Reserved.</p>
          <div>
            <a href="#" className="text-white me-3 text-decoration-underline">Terms of Use</a>
            <a href="#" className="text-white text-decoration-underline">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;