import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/paypercall', label: 'Pay Per Call' },
    { path: '/advertisers', label: 'Advertisers' },
    { path: '/publishers', label: 'Publishers' },
  ];

  return (
    <>
      <style>{`
        .header-main {
          background: linear-gradient(135deg, #16145aff 0%, #1a1a2e 50%, #1f225fff 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .header-scrolled {
          background: rgba(10, 10, 10, 0.95);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }

        .company-name {
          font-size: 1.1rem;
          font-weight: 700;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.5px;
          margin-top: -8px;
          line-height: 1.2;
        }

        .logo-container {
          display: flex;
          align-items: flex-start;
        }

        .logo-text-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 8px;
        }

        .nav-link-custom {
          position: relative;
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 1.25rem !important;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }

        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .nav-link-custom:hover {
          color: #fff !important;
          transform: translateY(-2px);
        }

        .nav-link-custom:hover::after {
          width: 60%;
        }

        .nav-link-active {
          color: #4facfe !important;
        }

        .nav-link-active::after {
          width: 60%;
        }

        .cta-button {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          border: none;
          color: #0a0a0a;
          font-weight: 600;
          padding: 0.6rem 1.8rem;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(79, 172, 254, 0.5);
          color: #0a0a0a;
        }

        .logo-img {
          height: 70px;
          transition: transform 0.3s ease;
        }

        .logo-img:hover {
          transform: scale(1.05);
        }

        @media (max-width: 991px) {
          .company-name {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <header
        className={`container-fluid py-3 position-sticky top-0 header-main ${scrolled ? 'header-scrolled' : ''}`}
        style={{ zIndex: 1000 }}
      >
        <div className="container d-flex align-items-center justify-content-between">

          {/* Logo */}
          <Link to="/" className="text-decoration-none logo-container">
            <img
              src="/Nexuscore__2_-removebg-preview.png"
              alt="NexusCore Logo"
              className="me-2 logo-img"
            />
            <div className="logo-text-wrapper">
              <span className="company-name">NexusCore Sync</span>
              <span style={{ 
                fontSize: '0.7rem', 
                color: 'rgba(255,255,255,0.5)', 
                fontWeight: 400,
                letterSpacing: '1px',
                marginTop: '2px'
              }}>
                PRIVATE LIMITED
              </span>
            </div>
          </Link>

          {/* Centered Navbar */}
          <nav className="d-none d-lg-flex justify-content-center flex-grow-1">
            <ul className="nav">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.path}>
                  <Link
                    className={`nav-link nav-link-custom ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* "Get in Touch" Button */}
          <div className="d-none d-lg-block">
            <Link to="/contact">
              <button className="cta-button">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;