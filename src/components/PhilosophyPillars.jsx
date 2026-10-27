import React from 'react';

export default function PhilosophyPillars() {
  return (
    <section className="philosophy-section" id="about">
      <div className="container">
        <div className="philosophy-grid">
          <div className="philosophy-text-col">
            <span className="section-tag">BESPOKE SERVICES &bull; HEADQUARTERED IN AHMEDABAD</span>
            <h2 className="section-title">Beyond Real Estate.<br />A National Legacy of Trust.</h2>
            <p className="philosophy-lead">
              Founded and headquartered in Ahmedabad, Sugar Premium is an integrated luxury real estate services and advisory firm. While our corporate heart remains on Sindhu Bhavan Road, our private mandates span India's premier leisure retreats and commercial capitals—curating private pool villas in Goa, coastal penthouses in Alibaug, and trophy sky mansions in South Mumbai.
            </p>
            
            <div className="philosophy-points">
              <div className="phil-point">
                <div className="point-num">01</div>
                <div className="point-content">
                  <h4>Ahmedabad Headquarters &bull; Pan-India Reach</h4>
                  <p>Our centralized Ahmedabad advisory council orchestrates transactions across Gujarat, Goa, Alibaug, and Mumbai with discreet non-disclosure agreements (NDAs) to protect family privacy.</p>
                </div>
              </div>
              
              <div className="phil-point">
                <div className="point-num">02</div>
                <div className="point-content">
                  <h4>Multi-State RERA Title Precision</h4>
                  <p>Full legal verification spanning GujRERA, MahaRERA, and Goa RERA registrations, sanctioned coastal regulation (CRZ) clearances, and Section 54 Capital Gains structuring.</p>
                </div>
              </div>
              
              <div className="phil-point">
                <div className="point-num">03</div>
                <div className="point-content">
                  <h4>Leisure Villa Concierge &amp; Turnkey Asset Care</h4>
                  <p>Turnkey management for second homes—from private chef onboarding in Assagao, Goa to speedboat charters in Alibaug and full interior fit-out stewardship for Gujarat and global NRG families.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="philosophy-visual-col">
            <div className="quote-card-luxury">
              <div className="quote-marks">“</div>
              <blockquote className="quote-text">
                "Personalized guidance. The right spaces. A seamless experience. Because every property decision is a step towards a brighter tomorrow."
              </blockquote>
              <div className="quote-author">
                <strong>Sugar Premium Advisory Council</strong>
                <span>Head Office: Ahmedabad &bull; Desks: Goa, Alibaug &amp; Mumbai</span>
              </div>
            </div>

            <div className="stats-counter-card">
              <div className="counter-item">
                <span className="counter-number">450+</span>
                <span className="counter-label">National HNI Clients</span>
              </div>
              <div className="counter-item">
                <span className="counter-number">₹8,500+ Cr</span>
                <span className="counter-label">Capital Facilitated</span>
              </div>
              <div className="counter-item">
                <span className="counter-number">100%</span>
                <span className="counter-label">Multi-RERA Clear Title</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
