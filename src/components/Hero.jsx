import React, { useState } from 'react';
import CustomDropdown from './CustomDropdown';

export default function Hero({ onSearchSubmit, onSelectProperty }) {
  const [activePill, setActivePill] = useState('buy');
  const [lookingTo, setLookingTo] = useState('buy');
  const [propertyType, setPropertyType] = useState('all');
  const [budgetRange, setBudgetRange] = useState('any');

  const intentOptions = [
    { value: 'buy', label: 'Purchase Luxury Estate', hint: 'Sky villas, pool villas & penthouses' },
    { value: 'sell', label: 'Discreet Sale Mandate', hint: 'Confidential representation for HNI owners' },
    { value: 'rent', label: 'Prime Residence Lease', hint: 'High-yield executive tenancies' },
    { value: 'lease', label: 'Corporate Office Lease', hint: 'Grade-A institutional towers & GIFT City' }
  ];

  const corridorOptions = [
    { value: 'all', label: 'All Pan-India Portfolios', hint: 'Ahmedabad HQ • Goa • Alibaug • Mumbai' },
    { value: 'ahmedabad', label: 'Ahmedabad (HQ Flagship)', hint: 'SBR, Ambli & Rancharda pool estates' },
    { value: 'goa', label: 'Goa (Weekend Pool Villas)', hint: 'Assagao & Anjuna heritage sanctuaries' },
    { value: 'alibaug', label: 'Alibaug (Coastal Penthouses)', hint: 'Awas Beach & Mandwa cliff estates' },
    { value: 'mumbai', label: 'Mumbai (Sea-Face Duplexes)', hint: 'Worli Sea Face & Bandra luxury mansions' },
    { value: 'commercial', label: 'Commercial & GIFT City', hint: 'SG Highway & IFSC financial towers' },
    { value: 'kasauli', label: 'Himalayan Hill Retreats', hint: 'Kasauli pine ridge alpine chalets' }
  ];

  const budgetOptions = [
    { value: 'any', label: 'Any Budget (INR ₹)', hint: 'Complete portfolio view' },
    { value: '5-10', label: '₹5 Cr – ₹10 Cr', hint: 'Prime luxury entry' },
    { value: '10-25', label: '₹10 Cr – ₹25 Cr', hint: 'Signature sky villas & private estates' },
    { value: '25+', label: '₹25 Cr+ Ultra-HNW', hint: 'Bespoke institutional & trophy assets' }
  ];

  const handlePillClick = (mode) => {
    setActivePill(mode);
    setLookingTo(mode);
  };

  const handleSearch = () => {
    onSearchSubmit({
      lookingTo,
      propertyType,
      budgetRange
    });
    const el = document.getElementById('projects') || document.getElementById('properties');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-sun-glow"></div>

      <div className="container hero-container">
        {/* Left Column: Brand Story & Building Project Badge (NO LOGO HERE) */}
        <div className="hero-content">
          {/* Prominent Architectural Project Highlight Badge (Shivalik Style) */}
          <div className="hero-project-badge">
            <span className="project-badge-dot">✦</span>
            <span className="project-badge-text">
              HEADQUARTERED IN AHMEDABAD &bull; <strong>PAN-INDIA BESPOKE SERVICES</strong>
            </span>
          </div>

          <h1 className="hero-headline">
            Makers of Landmark Spaces.<br />
            <span className="hero-accent">Connecting You to Infinite Possibilities.</span>
          </h1>

          <p className="hero-subheading">AHMEDABAD HEAD OFFICE &bull; BESPOKE ADVISORY IN GOA, ALIBAUG &amp; MUMBAI</p>

          {/* Core Service Pills */}
          <div className="hero-pills" role="tablist" aria-label="Services Options">
            <button 
              className={`hero-pill ${activePill === 'buy' ? 'active' : ''}`}
              onClick={() => handlePillClick('buy')}
            >
              Buy
            </button>
            <span className="pill-divider">|</span>
            <button 
              className={`hero-pill ${activePill === 'sell' ? 'active' : ''}`}
              onClick={() => handlePillClick('sell')}
            >
              Sell
            </button>
            <span className="pill-divider">|</span>
            <button 
              className={`hero-pill ${activePill === 'rent' ? 'active' : ''}`}
              onClick={() => handlePillClick('rent')}
            >
              Rent
            </button>
            <span className="pill-divider">|</span>
            <button 
              className={`hero-pill ${activePill === 'lease' ? 'active' : ''}`}
              onClick={() => handlePillClick('lease')}
            >
              Lease
            </button>
          </div>

          {/* Flyer's Exact Poetic Stanza with Organic Architectural Polish */}
          <div className="hero-poetic-copy">
            <p className="poetic-line">Personalized guidance. The right spaces. A seamless experience.</p>
            <p className="poetic-line highlight">Because every property decision is a step towards a brighter tomorrow.</p>
          </div>

          {/* Industry-Grade Search Card with Custom Luxury Dropdowns */}
          <div className="hero-search-card" id="searchWidget">
            <div className="search-form-grid">
              <CustomDropdown
                label="LOOKING TO"
                icon="✦"
                value={lookingTo}
                onChange={(val) => {
                  setLookingTo(val);
                  setActivePill(val);
                }}
                options={intentOptions}
              />

              <CustomDropdown
                label="CORRIDOR & TYPOLOGY"
                icon="☖"
                value={propertyType}
                onChange={setPropertyType}
                options={corridorOptions}
              />

              <CustomDropdown
                label="BUDGET (INR ₹)"
                icon="◈"
                value={budgetRange}
                onChange={setBudgetRange}
                options={budgetOptions}
                align="right"
              />

              <div className="search-btn-wrapper">
                <button type="button" className="btn btn-primary search-action-btn" onClick={handleSearch}>
                  <span>Explore Portfolio</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: 16, height: 16 }}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Organic Credibility & Milestones Row (Shivalik Benchmark) */}
          <div className="hero-metrics-row">
            <div className="hero-metric">
              <span className="metric-val">25+ Years</span>
              <span className="metric-lbl">Advisory Legacy</span>
            </div>
            <div className="metric-sep"></div>
            <div className="hero-metric">
              <span className="metric-val">₹8,500+ Cr</span>
              <span className="metric-lbl">Capital Facilitated</span>
            </div>
            <div className="metric-sep"></div>
            <div className="hero-metric">
              <span className="metric-val">Pan-India Reach</span>
              <span className="metric-lbl">Ahmedabad HQ &bull; Goa &bull; Alibaug &bull; Mumbai</span>
            </div>
            <div className="metric-sep"></div>
            <div className="hero-metric">
              <span className="metric-val">100% Diligence</span>
              <span className="metric-lbl">GujRERA &bull; MahaRERA &bull; Goa RERA</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Visual Spotlight (No Logo Here) */}
        <div className="hero-visual-col">
          <div className="hero-poster-frame">
            <div className="poster-overlay"></div>
            <img 
              src="/assets/hero_poster.png" 
              alt="Sugar Premium Ahmedabad Sunset Skyline Penthouse" 
              className="hero-main-image"
            />

            {/* Organic Floating Card on Hero Image */}
            <div className="hero-floating-card floating-anim">
              <div className="floating-badge">✦ FLAGSHIP SPOTLIGHT &bull; SBR AHMEDABAD</div>
              <h3 className="floating-title">The Sovereign Sky Villas</h3>
              <p className="floating-loc">Sindhu Bhavan Road (SBR) &bull; Bodakdev, Ahmedabad</p>
              <div className="floating-specs">
                <span>6,850 SQ. FT. CARPET</span>
                <span>&bull;</span>
                <span>100% VASTU COMPLIANT</span>
              </div>
              <div className="floating-price">Starting ₹18.50 Cr*</div>
              <button 
                type="button" 
                className="floating-link"
                onClick={() => onSelectProperty(1)}
              >
                Inspect Residence Dossier &rarr;
              </button>
            </div>

            {/* Sunset Horizon Status */}
            <div className="hero-floating-tag">
              <span className="glow-orb"></span>
              <span>Ahmedabad HQ &bull; Pan-India Previews Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
