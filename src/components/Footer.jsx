import React, { useState } from 'react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsSuccess(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand Column with official sugar-premium-sp-logo.png (Clean single logo) */}
        <div className="footer-col brand-col">
          <div className="footer-logo-holder">
            <img 
              src="/assets/sugar-premium-sp-logo.png" 
              alt="Sugar Premium Ahmedabad" 
              className="footer-brand-logo-img" 
            />
          </div>
          <p className="footer-about">
            Operating from our single corporate headquarters in Ahmedabad, Sugar Premium provides bespoke luxury real estate advisory and transaction services across India—curating sky villas in Ahmedabad, pool villas in Goa, coastal penthouses in Alibaug, and sea-face duplexes in Mumbai.
          </p>
          <div className="footer-socials">
            <a href="#hero" aria-label="LinkedIn" className="soc-link">IN</a>
            <a href="#hero" aria-label="Instagram" className="soc-link">IG</a>
            <a href="#hero" aria-label="YouTube" className="soc-link">YT</a>
            <a href="#hero" aria-label="Architectural Digest India" className="soc-link">AD</a>
          </div>
        </div>

        {/* Developments & Verticals */}
        <div className="footer-col">
          <h4 className="footer-heading">Trophy Portfolios</h4>
          <ul className="footer-links">
            <li><a href="#projects">The Sovereign Sky Villas (SBR Ahmedabad)</a></li>
            <li><a href="#projects">Casa Mirador Pool Villa (Assagao Goa)</a></li>
            <li><a href="#projects">Coastal Cliff Penthouse (Alibaug)</a></li>
            <li><a href="#projects">Worli Sea-Face Duplex (Mumbai)</a></li>
            <li><a href="#projects">Villa Solstice Weekend Estate (Rancharda)</a></li>
            <li><a href="#projects">Signature Horizon Tower (SG Highway)</a></li>
          </ul>
        </div>

        {/* Single Corporate Address (One Place in Ahmedabad) */}
        <div className="footer-col">
          <h4 className="footer-heading">Corporate Head Office</h4>
          <ul className="footer-links">
            <li><strong>Sugar Premium Real Estate Services</strong></li>
            <li>Sugar Premium House, Rajpath Rangoli Road, Bodakdev, Ahmedabad, Gujarat 380054</li>
            <li><strong>Direct Desk:</strong> +91 (079) 4900-SUGAR</li>
            <li><strong>WhatsApp VIP:</strong> +91 98250 89200</li>
            <li><strong>Email:</strong> ahmedabad@sugarpremium.in</li>
            <li><strong>Scope:</strong> Pan-India Advisory (Ahmedabad HQ &bull; Goa &bull; Alibaug &bull; Mumbai)</li>
          </ul>
        </div>

        {/* Private Newsletter */}
        <div className="footer-col">
          <h4 className="footer-heading">Private Gazette</h4>
          <p className="newsletter-sub">
            Confidential quarterly intelligence on off-market trophy assets across Ahmedabad, Goa villas, Alibaug sea penthouses, and tax structuring.
          </p>
          <form className="newsletter-form" onSubmit={handleNewsletter}>
            <input 
              type="email" 
              placeholder="Enter private email" 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required 
              aria-label="Email for private newsletter" 
            />
            <button type="submit" aria-label="Subscribe">→</button>
          </form>
          {newsSuccess && (
            <div className="newsletter-success">
              ✓ Subscribed to Sugar Premium Private Gazette.
            </div>
          )}
        </div>
      </div>

      <div className="footer-bottom-line">
        <div className="container bottom-inner">
          <p>&copy; 2026 Sugar Premium Real Estate Services Ltd. Single Corporate Base: Bodakdev, Ahmedabad. All Rights Reserved.</p>
          <div className="bottom-legal">
            <span>GujRERA: PR/GJ/AHMEDABAD/2026</span>
            <span>&bull;</span>
            <span>MahaRERA: P52000049210</span>
            <span>&bull;</span>
            <span>Goa RERA: PR/GA/GOA/2025</span>
            <span>&bull;</span>
            <a href="#hero">Strict Non-Disclosure (NDA)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
