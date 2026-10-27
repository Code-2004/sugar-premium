import React, { useEffect } from 'react';
import { formatIndianCurrency } from '../data/properties';

export default function PropertyModal({ property, currency, onClose, onInquireProperty }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!property) return null;

  const formattedPrice = formatIndianCurrency(property.priceINR);

  const handleInquire = () => {
    onInquireProperty(property);
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close dossier"
        >
          &times;
        </button>

        <div className="modal-media-head">
          <img src={property.image} alt={property.title} />
        </div>

        <div className="modal-content-inner">
          <div className="modal-tag">{property.status} &bull; {property.location}</div>
          <h2 className="modal-title">{property.title}</h2>

          <div className="modal-price-bar">
            <span className="price-label">Valuation:</span>
            <span className="modal-price-val">{formattedPrice}</span>
          </div>

          <div className="modal-specs-bar">
            {property.specs.beds && (
              <div className="modal-spec-item">
                <span>Bedrooms</span>
                <strong>{property.specs.beds} En-Suite</strong>
              </div>
            )}
            {property.specs.baths && (
              <div className="modal-spec-item">
                <span>Bathrooms</span>
                <strong>{property.specs.baths} Italian Marble</strong>
              </div>
            )}
            {property.specs.sqft && (
              <div className="modal-spec-item">
                <span>Carpet Area</span>
                <strong>{property.specs.sqft}</strong>
              </div>
            )}
            {property.specs.vastu && (
              <div className="modal-spec-item">
                <span>Vastu Alignment</span>
                <strong>{property.specs.vastu}</strong>
              </div>
            )}
            {property.specs.parking && (
              <div className="modal-spec-item">
                <span>Private Parking</span>
                <strong>{property.specs.parking}</strong>
              </div>
            )}
          </div>

          <p className="modal-desc">{property.fullDescription}</p>

          <h3 className="modal-amenities-header">Signature Amenities &amp; Legal Inclusions</h3>
          <div className="modal-amenities-grid">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="modal-amenity">
                <span>✦</span> {amenity}
              </div>
            ))}
          </div>

          <div className="modal-action-bar">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={handleInquire}
            >
              Request Private RERA Dossier &amp; Tour &rarr;
            </button>
            <button 
              type="button" 
              className="btn btn-outline"
              onClick={onClose}
            >
              Return to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
