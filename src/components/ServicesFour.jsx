import React from 'react';

export default function ServicesFour({ onSelectService }) {
  const services = [
    {
      id: 'residential',
      name: 'RESIDENTIAL',
      quote: '"Homes that fit your lifestyle"',
      desc: 'Sky villas on Sindhu Bhavan Road & Ambli, private pool estates in Goa, coastal penthouses in Alibaug, and sea-face duplexes in Mumbai.',
      perks: [
        'Vastu-Compliant Sky Villas & Penthouses',
        'Goa & Alibaug Second-Home Concierge',
        'Multi-State RERA & Clear Freehold Verification'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5L12 3l9 7.5"/>
          <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/>
          <path d="M9 21V12h6v9"/>
        </svg>
      )
    },
    {
      id: 'commercial',
      name: 'COMMERCIAL',
      quote: '"Spaces for growing businesses"',
      desc: 'Grade-A corporate headquarters and institutional financial parks on SG Highway, Sindhu Bhavan Road, and GIFT City IFSC.',
      perks: [
        'Grade-A Institutional Towers (LEED Platinum)',
        'Inflation-Indexed 8.6%+ Rental Yields',
        'Fortune 500 Corporate Long-Term Leases'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2"/>
          <path d="M9 22v-4h6v4"/>
          <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/>
        </svg>
      )
    },
    {
      id: 'buy-sell',
      name: 'BUY & SELL',
      quote: '"Connecting the right people"',
      desc: 'Facilitating private wealth transactions for prominent industrial dynasties, family offices, and global NRI investors across India.',
      perks: [
        'Pan-India & Global NRI Network (US, UK, Dubai, Africa)',
        'Section 54 Capital Gains & Multi-State Structuring',
        'Strict Non-Disclosure (NDA) Governance'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 15h2"/>
          <path d="M7 9l5-5 5 5"/>
          <path d="M4 12l4-4 4 4-2 2-4-4"/>
          <path d="M12 16l4 4 4-4-2-2-4 4"/>
          <path d="M20 12l-4-4-4 4"/>
        </svg>
      )
    },
    {
      id: 'rent-lease',
      name: 'RENT & LEASE',
      quote: '"Flexible options for every need"',
      desc: 'High-yield executive tenancies, luxury holiday home leasing in Goa & Alibaug, corporate relocations, and turnkey property stewardship.',
      perks: [
        'Turnkey Fully Furnished Designer Penthouses',
        'Goa & Alibaug Leisure Rental Management',
        'White-Glove Property & Facility Care'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2l-2 2m-1.5 1.5L14 9l-3 3"/>
          <circle cx="7.5" cy="16.5" r="4.5"/>
          <path d="M14 9l2 2m1-1l2 2"/>
        </svg>
      )
    }
  ];

  return (
    <section className="services-four-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">THE INTEGRATED ECOSYSTEM &bull; AHMEDABAD HQ &amp; PAN-INDIA SERVICES</span>
          <h2 className="section-title">The Sugar Standard</h2>
          <p className="section-subtitle">
            Four integrated verticals designed to simplify how India's visionary families and corporations acquire, develop, lease, and compound landmark real estate across Ahmedabad, Goa, Alibaug, and Mumbai.
          </p>
        </div>

        <div className="four-grid">
          {services.map((item) => (
            <div key={item.id} className="service-four-card" data-service={item.id}>
              <div className="icon-bubble">
                {item.icon}
              </div>
              <h3 className="card-name">{item.name}</h3>
              <p className="card-quote">{item.quote}</p>
              <p className="card-desc">{item.desc}</p>
              <ul className="card-perks">
                {item.perks.map((perk, index) => (
                  <li key={index}><span>✓</span> {perk}</li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="card-action"
                onClick={() => onSelectService(item.id)}
              >
                Inquire {item.name.toLowerCase()} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
