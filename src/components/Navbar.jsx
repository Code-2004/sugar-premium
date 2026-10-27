import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container navbar-inner">
          {/* Industry-Grade Minimalist Logo (Height ~32px, organic Shivalik/WeWork placement) */}
          <a href="#hero" className="brand-logo" aria-label="Sugar Premium Ahmedabad & Pan-India">
            <img 
              src="/assets/sugar-premium-sp-logo.png" 
              alt="Sugar Premium" 
              className="brand-logo-img" 
            />
          </a>

          {/* Clean, spacious desktop navigation */}
          <nav className="nav-menu" id="navMenu">
            <a href="#projects" className="nav-link">Portfolios</a>
            <a href="#services" className="nav-link">The Standard</a>
            <a href="#about" className="nav-link">Our Legacy</a>
            <a href="#locations" className="nav-link">Destinations</a>
            <a href="#calculator" className="nav-link">EMI Estimator</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Quick Direct Desk & CTA */}
          <div className="nav-actions">
            <a href="tel:+917949007842" className="nav-phone-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-phone-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91 (079) 4900-SUGAR</span>
            </a>
            <a href="#contact" className="btn btn-primary nav-btn">
              <span>Schedule Visit</span>
            </a>
            <button 
              className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer active">
          <nav className="mobile-nav">
            <a href="#projects" className="mobile-link" onClick={closeMobile}>Portfolios</a>
            <a href="#services" className="mobile-link" onClick={closeMobile}>Services &amp; Standard</a>
            <a href="#about" className="mobile-link" onClick={closeMobile}>About Advisory</a>
            <a href="#locations" className="mobile-link" onClick={closeMobile}>Destinations</a>
            <a href="#calculator" className="mobile-link" onClick={closeMobile}>EMI Estimator</a>
            <a href="#contact" className="mobile-link" onClick={closeMobile}>Schedule Visit</a>
          </nav>
          <div className="mobile-drawer-footer">
            <p className="drawer-contact-line"><strong>Head Office:</strong> Sugar Premium House, Bodakdev, Ahmedabad</p>
            <p className="drawer-contact-line">Direct Desk: +91 (079) 4900-SUGAR &bull; +91 98250 89200</p>
            <p className="drawer-contact-line">ahmedabad@sugarpremium.in</p>
          </div>
        </div>
      )}
    </>
  );
}
