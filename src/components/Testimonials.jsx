import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Sugar Premium orchestrated the acquisition of our Sindhu Bhavan Road sky villa with absolute discretion in just ten days. Their grasp of GujRERA due diligence, Vastu compliance, and family office privacy was superlative.",
      author: "Pankaj Patel",
      title: "Chairman, Apex Life Sciences & Family Office, Ahmedabad"
    },
    {
      id: 2,
      quote: "When our family office decided to acquire an off-market Portuguese pool villa in Assagao, Goa and an Alibaug coastal penthouse, Sugar Premium's Ahmedabad team executed both transactions seamlessly with flawless Goa RERA and title clearances.",
      author: "Devendra Zaveri",
      title: "Director, Zaveri Heritage & Family Office, Ahmedabad & Mumbai"
    },
    {
      id: 3,
      quote: "Divesting our prime commercial floor on SG Highway required institutional matchmaking. Sugar Premium delivered a buyer at full valuation in record time without a single leak to the market.",
      author: "Mehul Shah",
      title: "Managing Director, Solitaire Infrastructure, Ahmedabad"
    },
    {
      id: 4,
      quote: "Investing back in India from the US used to involve tedious paperwork. Sugar Premium handled everything from their Ahmedabad HQ—from FEMA approvals and NRE remittances to turnkey interior management for our Rancharda estate.",
      author: "Dr. Jayesh Mehta",
      title: "NRG Healthcare Entrepreneur, New Jersey & Ahmedabad"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">VOICES OF TRUST &bull; NATIONAL CLIENT PERSPECTIVES</span>
          <h2 className="section-title">Generational Relationships</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test) => (
            <div key={test.id} className="test-card">
              <div className="test-stars">★★★★★</div>
              <p className="test-quote">"{test.quote}"</p>
              <div className="test-author">
                <strong>{test.author}</strong>
                <span>{test.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
