import React, { useState } from 'react';
import { formatIndianCurrency } from '../data/properties';

export default function FinancialEstimator() {
  const [propValueINR, setPropValueINR] = useState(150000000); // ₹15 Cr default
  const [downPercent, setDownPercent] = useState(25);
  const [interestRate, setInterestRate] = useState(8.50); // Indian home loan rate
  const [termYears, setTermYears] = useState(20);

  // Calculations
  const downPaymentAmount = (propValueINR * downPercent) / 100;
  const loanAmount = propValueINR - downPaymentAmount;

  const monthlyRate = (interestRate / 100) / 12;
  const totalMonths = termYears * 12;

  let monthlyEMI = 0;
  if (monthlyRate > 0 && totalMonths > 0) {
    monthlyEMI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  } else {
    monthlyEMI = loanAmount / (totalMonths || 1);
  }

  // Gujarat Stamp Duty & Registration (~4.9% stamp duty + 1% registration)
  const stampDutyAndReg = propValueINR * 0.059;
  
  // Rental Yield estimate for Ahmedabad prime commercial / SBR penthouses (~6.8%)
  const estimatedAnnualRent = propValueINR * 0.068;
  const monthlyRentalInflow = estimatedAnnualRent / 12;

  return (
    <section className="calc-section" id="calculator">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">AHMEDABAD INVESTMENT ANALYTICS</span>
          <h2 className="section-title">Sugar Premium Capital &amp; EMI Estimator</h2>
          <p className="section-subtitle">
            Model your capital commitment, debt service (EMI), Gujarat stamp duty liabilities, and projected rental yields in Indian Rupees (₹).
          </p>
        </div>

        <div className="calc-card">
          <div className="calc-controls-col">
            {/* Property Value Slider */}
            <div className="slider-group">
              <div className="slider-header">
                <label htmlFor="calcPropValue">Property Asset Valuation</label>
                <span className="slider-display">{formatIndianCurrency(propValueINR)}</span>
              </div>
              <input 
                type="range" 
                id="calcPropValue" 
                min="30000000" 
                max="600000000" 
                step="5000000" 
                value={propValueINR}
                onChange={(e) => setPropValueINR(Number(e.target.value))}
                className="range-slider"
              />
              <div className="slider-bounds">
                <span>{formatIndianCurrency(30000000)} (₹3 Cr)</span>
                <span>{formatIndianCurrency(600000000)} (₹60 Cr)</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div className="slider-group">
              <div className="slider-header">
                <label htmlFor="calcDownPayment">Equity Down Payment</label>
                <span className="slider-display">
                  {downPercent}% ({formatIndianCurrency(downPaymentAmount)})
                </span>
              </div>
              <input 
                type="range" 
                id="calcDownPayment" 
                min="10" 
                max="50" 
                step="5" 
                value={downPercent}
                onChange={(e) => setDownPercent(Number(e.target.value))}
                className="range-slider"
              />
              <div className="slider-bounds">
                <span>10%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="slider-group">
              <div className="slider-header">
                <label htmlFor="calcInterestRate">Annual Lending Rate (HDFC / ICICI Wealth / SBI)</label>
                <span className="slider-display">{interestRate.toFixed(2)}%</span>
              </div>
              <input 
                type="range" 
                id="calcInterestRate" 
                min="7.0" 
                max="12.0" 
                step="0.25" 
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="range-slider"
              />
              <div className="slider-bounds">
                <span>7.00%</span>
                <span>12.00%</span>
              </div>
            </div>

            {/* Loan Term Selector */}
            <div className="slider-group">
              <span className="slider-label-static">Tenure Horizon</span>
              <div className="term-toggle-group">
                {[10, 15, 20].map((years) => (
                  <button 
                    key={years}
                    type="button" 
                    className={`term-btn ${termYears === years ? 'active' : ''}`}
                    onClick={() => setTermYears(years)}
                  >
                    {years} Years
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator Results Box strictly in INR */}
          <div className="calc-results-col">
            <div>
              <div className="result-badge">FINANCIAL SUMMARY &bull; AHMEDABAD (INR ₹)</div>
              <div className="monthly-payment-block">
                <span className="monthly-sub">Estimated Monthly EMI</span>
                <div className="monthly-val">{formatIndianCurrency(monthlyEMI)}/mo</div>
                <span className="monthly-note">Principal &amp; Interest amortized over {termYears} years</span>
              </div>

              <div className="results-breakdown-list">
                <div className="breakdown-row">
                  <span>Sanctioned Loan Debt</span>
                  <strong>{formatIndianCurrency(loanAmount)}</strong>
                </div>
                <div className="breakdown-row">
                  <span>Upfront Equity Margin</span>
                  <strong>{formatIndianCurrency(downPaymentAmount)}</strong>
                </div>
                <div className="breakdown-row">
                  <span>Est. Gujarat Stamp Duty &amp; Registration (~5.9%)</span>
                  <strong>{formatIndianCurrency(stampDutyAndReg)}</strong>
                </div>
                <div className="breakdown-row highlight-row">
                  <span>Projected Gross Rental Inflow</span>
                  <strong>6.8% ({formatIndianCurrency(monthlyRentalInflow)}/mo)</strong>
                </div>
              </div>
            </div>

            <div className="calc-cta-wrap">
              <a href="#contact" className="btn btn-primary btn-block">
                Request Section 54 Tax &amp; Debt Advisory &rarr;
              </a>
              <span className="disclaimer-text">
                *Estimates for illustrative advisory purposes only. Private loan syndication and NRG repatriation structuring available upon consultation.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
