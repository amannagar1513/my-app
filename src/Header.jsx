import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header
      className="container-fluid py-3 shadow-sm"
      style={{
        background: 'linear-gradient(90deg, #0b0b0bff 0%, #0f0e0eff 100%)',
        borderBottom: '1px solid #dee2e6'
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">

        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src="/Nexuscore__2_-removebg-preview.png"
            alt="Company Logo"
            className="me-2"
            style={{ height: '70px' }}
          />
          <span className="fw-bold fs-9 text-primary">NexusCore Sync Private Limited</span>
        </div>

        {/* Centered Navbar */}
        <nav className="d-none d-lg-flex justify-content-center flex-grow-1">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link px-3 text-white fw-medium" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white fw-medium" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white fw-medium" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white fw-medium" to="/paypercall">Pay Per Call</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white fw-medium" to="/advertisers">Advertisers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white fw-medium" to="/publishers">Publishers</Link>
            </li>
          </ul>
        </nav>

        {/* "Get in Touch" Button
        <div className="d-none d-lg-block">
          <button className="btn btn-primary rounded-pill px-4 shadow-sm">
            Get in Touch
          </button>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
