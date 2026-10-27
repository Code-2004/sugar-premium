import React from 'react';

export default function PrimeLocations() {
  const locations = [
    {
      id: 1,
      name: "Ahmedabad (Flagship Headquarters)",
      tag: "HEAD OFFICE (ONE CENTRAL BASE)",
      image: "/assets/penthouse.jpg",
      desc: "Our single corporate headquarters and founding operational home in Bodakdev. Orchestrating trophy sky villas on Sindhu Bhavan Road (SBR), Ambli estates, Rancharda weekend retreats, and GIFT City corporate towers.",
      stat1: { label: "Central Corporate Address", val: "Bodakdev, Ahmedabad" },
      stat2: { label: "Capital Facilitated", val: "₹8,500+ Cr" }
    },
    {
      id: 2,
      name: "Goa (Assagao & Anjuna)",
      tag: "WEEKEND LEISURE VILLAS",
      image: "/assets/goa_villa.jpg",
      desc: "Curating private luxury pool estates and restored Portuguese heritage villas across Assagao, Anjuna, and Siolim for HNI vacationers and second-home owners.",
      stat1: { label: "Property Typology", val: "Private Pool Villas" },
      stat2: { label: "Holiday Rental Yield", val: "+12.8% Net" }
    },
    {
      id: 3,
      name: "Alibaug (Awas & Mandwa)",
      tag: "COASTAL PENTHOUSES",
      image: "/assets/alibaug_penthouse.jpg",
      desc: "Front-row sea-facing penthouses and cliffside estates along Awas Beach and Mandwa, just 15 minutes by private speedboat from Mumbai.",
      stat1: { label: "Property Typology", val: "Sea-Facing Penthouses" },
      stat2: { label: "Speedboat Transit", val: "15 Mins to Mumbai" }
    },
    {
      id: 4,
      name: "Mumbai (Worli Sea Face)",
      tag: "METROPOLITAN TROPHY DUPLEXES",
      image: "/assets/mumbai_duplex.jpg",
      desc: "Bespoke double-height sky duplexes overlooking the Bandra-Worli Sea Link and open Arabian Sea, stewarded under strict private family office mandates.",
      stat1: { label: "Property Typology", val: "Sea-Face Duplexes" },
      stat2: { label: "Transaction Mandate", val: "Strict NDA Guarded" }
    }
  ];

  return (
    <section className="locations-section" id="locations">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">ONE CENTRAL HEADQUARTERS IN AHMEDABAD &bull; PAN-INDIA SERVICES</span>
          <h2 className="section-title">Flagship Hub &amp; Prime Destinations</h2>
          <p className="section-subtitle">
            Our corporate office is established at one single central address in Ahmedabad. From here, our advisory partners steward high-value acquisitions across India's premier leisure and metropolitan destinations—including weekend villas in Goa, coastal penthouses in Alibaug, and sea-face mansions in Mumbai.
          </p>
        </div>

        <div className="locations-grid">
          {locations.map((loc) => (
            <div key={loc.id} className="loc-card">
              <div className="loc-img-holder">
                <img src={loc.image} alt={loc.name} loading="lazy" />
                <div className="loc-tag">{loc.tag}</div>
              </div>
              <div className="loc-content">
                <h3>{loc.name}</h3>
                <p>{loc.desc}</p>
                <div className="loc-stat-row">
                  <div>
                    <span>{loc.stat1.label}</span>
                    <strong>{loc.stat1.val}</strong>
                  </div>
                  <div>
                    <span>{loc.stat2.label}</span>
                    <strong>{loc.stat2.val}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
