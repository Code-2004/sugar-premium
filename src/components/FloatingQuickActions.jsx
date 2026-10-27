import React from 'react';

export default function FloatingQuickActions() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-quick-bar">
      <a href="#calculator" className="quick-pill">
        <span>✦ Estimator</span>
      </a>
      <a href="#contact" className="quick-pill primary">
        <span>Book Consultation</span>
      </a>
      <button 
        type="button" 
        className="scroll-top-btn" 
        onClick={scrollToTop} 
        aria-label="Back to Top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
}
