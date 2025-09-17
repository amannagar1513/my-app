import React from 'react';

function PayPerCall() {
  return (
    <div>

      {/* 🔹 Section 1: Fullscreen Text Content */}
      <section
        className="text-white d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundColor: '#4830d2',
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
      </section>

      {/* 🔹 Section 2: Fullscreen Image */}
      <section
        style={{
          backgroundColor: '#000',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <img
          src="/PPC.jpg"
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
            {/* Left: Text Content */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold display-5 mb-3 text-dark">
                Pay Per Click Solution
              </h2>
              <p className="fs-5 text-muted mb-4">
                Maximize your digital visibility with data-driven PPC campaigns.
                Our solutions deliver high-converting traffic with precision targeting.
              </p>
              <ul className="list-unstyled fs-5 text-dark">
                <li className="mb-2">✅ Lower cost-per-click (CPC)</li>
                <li className="mb-2">✅ Boost ad conversion rates</li>
                <li className="mb-2">✅ Optimize ad spend & ROI</li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="col-md-6">
              <img
                src="/ppc1.jpg" 
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
            {/* Right: Text Content */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold display-5 mb-3 text-dark">
                Strategic Planning
              </h2>
              <p className="fs-5 text-muted mb-4">
                Drive growth through intentional action. Our strategic planning turns insight into execution with measurable results.
              </p>
              <ul className="list-unstyled fs-5 text-dark">
                <li className="mb-2">✅ Align goals with market trends</li>
                <li className="mb-2">✅ Streamline decision-making</li>
                <li className="mb-2">✅ Measure and optimize outcomes</li>
              </ul>
            </div>

            {/* Left: Image */}
            <div className="col-md-6">
              <img
                src="/strategy-planning.jpg" 
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

export default PayPerCall;
