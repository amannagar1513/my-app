import React from 'react';

function Publishers() {
  return (
    <div>

      {/* 🔹 Section 0: Publisher-Focused Intro */}
      <section
        style={{
          backgroundColor: '#4830d2',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 1rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1rem',
              textShadow: '0 0 8px rgba(255, 255, 255, 0.2)',
            }}
          >
            Publisher-First Pay-Per-Call Network
          </h1>

          <h4 style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
            Built on Trust & Performance
          </h4>

          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>
            NEXUSCORE isn't your typical Pay-Per-Call network. We partner with
            top-tier publishers, offering expert guidance, exclusive insights,
            and high-performing campaigns.
          </p>
        </div>
      </section>

      {/* 🔹 Section 1: Fullscreen Text Content
      <section
        className="text-white d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundColor: '#3265bd',
          minHeight: '100vh',
          padding: '60px 20px',
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-3 text-glow mb-4">
            Pay Per Click Services <br /> and Performance Solutions
          </h1>
          <p className="lead text-white-50 fs-4">
            Drive instant results with our targeted PPC strategies. <br />
            Explore how we help businesses lower cost-per-acquisition and boost ROI.
          </p>
        </div>
      </section> */}

      {/* 🔹 Section 2: Fullscreen Image */}
      <section
        style={{
          backgroundColor: '#000',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <img
          src="/publisherrs.jpg"
          alt="Pay Per Click"
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </section>

      {/* 🔹 Section 3: Content Left / Image Right */}
      <section
        className="d-flex align-items-center"
        style={{
          padding: '80px 20px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold display-5 mb-3 text-dark">
                Monetize Smarter with Pay-Per-Call
              </h2>
              <p className="fs-5 text-muted mb-4">
               Partner with Nexuscore and get rewarded for the results you deliver.
Our performance-driven Pay-Per-Call platform connects you directly with premium buyers—offering
 high payouts, fast payments, and dedicated support you can count on.
              </p>
              <ul className="list-unstyled fs-5 text-dark">
                <li className="mb-2">✅ Access to exclusive, direct-buyers in high-demand verticals</li>
                <li className="mb-2">✅ Top industry payouts with aggressive scaling options</li>
                <li className="mb-2">✅ Fast, reliable weekly payments</li>
                <li className="mb-2">✅ Quick response times and dedicated publisher support</li>
              </ul>
            </div>





            <div className="col-md-6">
              <img
                src="/publishers1.jpg"
                alt="PPC Solution"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Section 4: Image Left / Content Right */}
      <section
        className="d-flex align-items-center"
        style={{
          padding: '80px 20px',
          backgroundColor: '#ffffff',
        }}
      >
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold display-5 mb-3 text-dark">
                Performance-Driven Call Marketing Solutions
              </h2>
              <p className="fs-5 text-muted mb-4">
                At Nexuscore, we don’t just run campaigns—we engineer scalable growth.
Through data-driven strategy, expert media buying, and trusted publisher partnerships,
 we ensure every call delivers real value.
              </p>
              <ul className="list-unstyled fs-5 text-dark">
                <li className="mb-2">✅ Access to a curated network of top-tier call traffic providers</li>
                <li className="mb-2">✅ Internal media buying team focused on high-intent lead generation</li>
                <li className="mb-2">✅ Custom-built strategies backed by ongoing data optimization</li>
                <li className="mb-2">✅ Fully compliant call campaigns following TCPA guidelines</li>

              </ul>
            </div>

            <div className="col-md-6">
              <img
                src="/Publishers3.jpg"
                alt="Strategic Planning"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Publishers;
