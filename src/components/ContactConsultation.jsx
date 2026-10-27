import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function ContactConsultation({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'residential',
    budget: '10-20',
    timeline: 'immediate',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#9D5C32', '#B46F41', '#C5A065', '#FAF8F5']
      });
    } catch {
      // Fallback
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card-wrapper">
          {/* Left Column: Discretion & Direct Reach */}
          <div className="contact-left-info">
            <div>
              <span className="section-tag" style={{ color: '#DFBF8C' }}>CONFIDENTIAL ENGAGEMENT &bull; AHMEDABAD HQ &amp; PAN-INDIA</span>
              <h2 className="contact-title">Begin Your Mandate With Sugar Premium</h2>
              <p className="contact-desc">
                Headquartered in Ahmedabad, our senior advisory partners steward landmark acquisitions across India—from Sindhu Bhavan Road sky villas to serene weekend pool estates in Goa, coastal penthouses in Alibaug, and trophy sea-facing duplexes in Mumbai.
              </p>

              <div className="contact-bullet-list">
                <div className="bullet-item">
                  <span className="bullet-icon">✦</span>
                  <div>
                    <strong>Multi-State RERA Verification (GujRERA &bull; MahaRERA &bull; Goa RERA)</strong>
                    <p>Receive verified search reports, title deeds, sanctioned coastal zone layouts, and off-market dossiers.</p>
                  </div>
                </div>

                <div className="bullet-item">
                  <span className="bullet-icon">✦</span>
                  <div>
                    <strong>Section 54 Tax &amp; National Leisure Portfolio Advisory</strong>
                    <p>Dedicated advisory for Gujarat Family Offices, domestic business leaders, and global NRIs investing across India.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="direct-reach-box">
              <p className="reach-label">CORPORATE HEADQUARTERS (ONE CENTRAL BASE)</p>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', marginBottom: '8px' }}>
                Sugar Premium House, Rajpath Rangoli Road, Bodakdev, Ahmedabad, Gujarat 380054
              </p>
              <p className="reach-phone">+91 (079) 4900-SUGAR &bull; +91 98250 89200</p>
              <p className="reach-email">ahmedabad@sugarpremium.in</p>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: '6px' }}>
                All client mandates across Ahmedabad, Goa, Alibaug, and Mumbai are stewarded directly through our single Ahmedabad headquarters.
              </p>
            </div>
          </div>

          {/* Right Column: Confidential Form */}
          <div className="contact-right-form">
            <form className="inquiry-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Request Private Consultation</h3>
              <p className="form-sub">A senior advisory partner will reach out within 4 business hours.</p>

              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    placeholder="e.g. Harshad Patel" 
                    required 
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="harshad@patelholdings.in" 
                    required 
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="phone">Mobile / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    placeholder="+91 98250 12345" 
                    required 
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="service">Portfolio Mandate *</label>
                  <select 
                    id="service" 
                    value={formData.service} 
                    onChange={handleChange}
                    required
                  >
                    <option value="residential">Ahmedabad Sky Villa / Penthouse (SBR / Ambli)</option>
                    <option value="goa-villa">Goa Weekend Pool Villa (Assagao / Siolim)</option>
                    <option value="alibaug-penthouse">Alibaug Coastal Penthouse (Awas / Mandwa)</option>
                    <option value="mumbai-duplex">Mumbai Trophy Duplex (Worli Sea Face)</option>
                    <option value="commercial">Commercial Trophy Tower (SG Highway / GIFT City)</option>
                    <option value="weekend-estate">Weekend Countryside / Hill Sanctuary (Rancharda / Kasauli)</option>
                    <option value="buy-sell">Discreet National Sell Mandate (Strict NDA)</option>
                    <option value="rent-lease">Luxury Penthouse Lease / Corporate Relocation</option>
                  </select>
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="budget">Target Budget (in INR ₹)</label>
                  <select 
                    id="budget" 
                    value={formData.budget} 
                    onChange={handleChange}
                  >
                    <option value="5-10">₹5 Cr – ₹10 Cr</option>
                    <option value="10-20">₹10 Cr – ₹20 Cr</option>
                    <option value="20-40">₹20 Cr – ₹40 Cr</option>
                    <option value="40+">₹40 Cr+ Institutional Trophy Assets</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="timeline">Timeline Horizon</label>
                  <select 
                    id="timeline" 
                    value={formData.timeline} 
                    onChange={handleChange}
                  >
                    <option value="immediate">Immediate (Next 30 Days)</option>
                    <option value="quarter">Within Q2 / Q3 2026</option>
                    <option value="discreet">Strategic Long-term Family Office Mandate</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Destination, Vastu &amp; Specific Requirements</label>
                <textarea 
                  id="message" 
                  rows="3" 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="e.g. Seeking a 4 BHK Portuguese pool villa in Assagao Goa or an off-market penthouse on SBR Ahmedabad. Vastu compliance required."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block submit-btn">
                <span>Submit Confidential Consultation Request</span>
                <span className="btn-arrow">&rarr;</span>
              </button>

              <div className="form-footer-note">
                🔒 All inquiries governed under strict Non-Disclosure Agreements (NDAs). Your information is never shared.
              </div>

              {submitted && (
                <div className="form-success-banner">
                  <div className="success-icon">✓</div>
                  <div>
                    <strong>Consultation Request Logged</strong>
                    <p>A Senior Advisory Partner from our Ahmedabad headquarters will contact you within 4 business hours.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
