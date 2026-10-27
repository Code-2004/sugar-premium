import React from 'react';
import { formatIndianCurrency } from '../data/properties';

export default function FeaturedProperties({ 
  properties, 
  onSelectProperty,
  activeFilter,
  onFilterChange 
}) {
  const filteredProperties = properties.filter((prop) => {
    if (activeFilter === 'all') return true;
    if (prop.region === activeFilter) return true;
    if (prop.category === activeFilter) return true;
    return false;
  });

  return (
    <section className="properties-section" id="projects">
      <div className="container">
        <div className="properties-header-wrap">
          <div>
            <span className="section-tag">HEADQUARTERED IN AHMEDABAD &bull; PAN-INDIA LUXURY SERVICES</span>
            <h2 className="section-title">Curated Portfolios &amp; Trophy Estates</h2>
            <p className="section-subtitle">
              Signature developments across Ahmedabad (SBR, Ambli &amp; GIFT City), private pool villas in Goa, beachfront penthouses in Alibaug, sea-facing duplexes in Mumbai, and Himalayan retreats.
            </p>
          </div>

          {/* Filter Navigation Tabs (Pan-India & Typology) */}
          <div className="prop-filter-tabs" id="propFilterTabs">
            <button 
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => onFilterChange('all')}
            >
              All Estates (Pan-India)
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'ahmedabad' ? 'active' : ''}`}
              onClick={() => onFilterChange('ahmedabad')}
            >
              Ahmedabad (HQ)
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'goa' ? 'active' : ''}`}
              onClick={() => onFilterChange('goa')}
            >
              Goa (Weekend Villas)
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'alibaug' ? 'active' : ''}`}
              onClick={() => onFilterChange('alibaug')}
            >
              Alibaug (Penthouses)
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'mumbai' ? 'active' : ''}`}
              onClick={() => onFilterChange('mumbai')}
            >
              Mumbai (Sea-Face)
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'penthouse' ? 'active' : ''}`}
              onClick={() => onFilterChange('penthouse')}
            >
              Penthouses &amp; Sky Villas
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'villa' ? 'active' : ''}`}
              onClick={() => onFilterChange('villa')}
            >
              Leisure &amp; Pool Villas
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'commercial' ? 'active' : ''}`}
              onClick={() => onFilterChange('commercial')}
            >
              Commercial Grade-A
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="properties-grid" id="propertiesGrid">
          {filteredProperties.map((prop) => (
            <article key={prop.id} className="property-card" data-category={prop.category} data-region={prop.region}>
              <div className="prop-media-wrapper">
                <div className="prop-badge-strip">
                  <span className="prop-status-pill">{prop.possession || prop.status}</span>
                  <span className="prop-rera-pill">{prop.rera}</span>
                </div>
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="prop-img" 
                  loading="lazy"
                />
                <div className="prop-overlay-cta">
                  <button 
                    type="button" 
                    className="btn btn-secondary view-prop-btn"
                    onClick={() => onSelectProperty(prop.id)}
                  >
                    Explore Residence Dossier
                  </button>
                </div>
              </div>

              <div className="prop-info">
                <div className="prop-location-row">
                  <span className="prop-loc-dot">📍</span>
                  <span className="prop-location">{prop.location}</span>
                </div>
                <h3 className="prop-title">{prop.title}</h3>
                <p className="prop-highlight">{prop.shortHighlight}</p>
                
                <div className="prop-features-list">
                  {prop.specs.beds && (
                    <div className="prop-feat"><span>{prop.specs.beds}</span></div>
                  )}
                  {prop.specs.sqft && (
                    <div className="prop-feat"><span>{prop.specs.sqft}</span></div>
                  )}
                  {prop.specs.vastu && (
                    <div className="prop-feat"><span>{prop.specs.vastu}</span></div>
                  )}
                  {prop.specs.view && (
                    <div className="prop-feat"><span>{prop.specs.view}</span></div>
                  )}
                  {prop.specs.capRate && (
                    <div className="prop-feat"><span>{prop.specs.capRate} Cap Rate</span></div>
                  )}
                </div>

                <div className="prop-footer">
                  <div className="prop-price-box">
                    <span className="price-label">Starting Valuation</span>
                    <span className="prop-price-amount">
                      {formatIndianCurrency(prop.priceINR)}*
                    </span>
                  </div>
                  <div className="prop-card-actions">
                    <button 
                      type="button" 
                      className="btn-text-action"
                      onClick={() => onSelectProperty(prop.id)}
                    >
                      Dossier &amp; Specs &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
