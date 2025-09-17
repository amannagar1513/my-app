import React from 'react';

function Advertisers() {
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
            Advertiser-Focused PPC Services & <br /> Performance Marketing Solutions
          </h1>
          <p className="lead text-white-50 fs-4">
            Optimize your advertising budget with performance-focused PPC strategies. . <br />
            We help advertisers reduce acquisition costs and scale growth through data-driven targeting.
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
                Performance-Driven Pay-Per-Call Solutions
              </h2>
              <p className="fs-5 text-muted mb-4">
                At Nexuscore, we understand the needs of advertisers. Our Pay-Per-Call model is designed to drive what truly counts—high-intent leads, reduced customer acquisition costs, and measurable ROI.
              </p>
              <ul className="list-unstyled fs-5 text-dark">
                <li className="mb-2">✅ Customizable campaigns tailored to your goals

</li>
                <li className="mb-2">✅ High-quality, TCPA-compliant calls from trusted sources

</li>
                <li className="mb-2">✅ Advanced fraud protection and real-time tracking

</li>
<li className="mb-2">✅ Dedicated support to optimize your CPA & ROI



</li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="col-md-6">
              <img
                src="/customer-service.png" 
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
               Strategic Pay-Per-Call Planning
              </h2>
              <p className="fs-5 text-muted mb-4">
                At Nexuscore, strategy isn’t just a step—it’s the cornerstone of everything we do.
                 We blend deep industry insight with flawless execution to drive scalable,
                  high-impact performance.
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
                src="/planning.png" 
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

export default Advertisers;
