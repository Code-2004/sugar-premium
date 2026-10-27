import React from 'react';

export default function TopBar({ currency, onCurrencyChange }) {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <span className="badge-dot"></span>
          <span className="top-bar-text">
            MahaRERA &amp; RERA Registered Advisory &bull; Private HNW Portfolio 2026 &bull; Off-Market Mandates
          </span>
        </div>
        <div className="top-bar-right">
          <span className="top-bar-loc">
            Offices: Mumbai &bull; New Delhi &bull; Bengaluru &bull; Goa &bull; NRI Desk: Dubai
          </span>
          <div className="currency-picker">
            <label htmlFor="currencySelect" className="sr-only">Currency</label>
            <select 
              id="currencySelect" 
              value={currency} 
              onChange={(e) => onCurrencyChange(e.target.value)}
              aria-label="Select Currency"
            >
              <option value="INR">INR (₹ Crores)</option>
              <option value="USD">USD ($)</option>
              <option value="AED">AED (د.إ NRI Desk)</option>
              <option value="GBP">GBP (£ UK NRI)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
