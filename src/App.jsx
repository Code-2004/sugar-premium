import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesFour from './components/ServicesFour';
import FeaturedProperties from './components/FeaturedProperties';
import PhilosophyPillars from './components/PhilosophyPillars';
import FinancialEstimator from './components/FinancialEstimator';
import PrimeLocations from './components/PrimeLocations';
import Testimonials from './components/Testimonials';
import ContactConsultation from './components/ContactConsultation';
import MantraBar from './components/MantraBar';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';
import FloatingQuickActions from './components/FloatingQuickActions';
import { propertiesData } from './data/properties';

export default function App() {
  const [currency] = useState('INR');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [preselectedService, setPreselectedService] = useState('residential');

  const selectedProperty = propertiesData.find((p) => p.id === selectedPropertyId);

  const handleSearchSubmit = ({ lookingTo, propertyType, budgetRange }) => {
    if (propertyType && propertyType !== 'all') {
      setActiveFilter(propertyType);
    } else {
      setActiveFilter('all');
    }

    if (lookingTo) {
      if (lookingTo === 'buy') setPreselectedService('residential');
      else if (lookingTo === 'sell') setPreselectedService('buy-sell');
      else if (lookingTo === 'rent' || lookingTo === 'lease') setPreselectedService('rent-lease');
    }
  };

  const handleSelectService = (serviceId) => {
    setPreselectedService(serviceId);
  };

  const handleInquireProperty = (prop) => {
    if (prop.category === 'commercial') {
      setPreselectedService('commercial');
    } else {
      setPreselectedService('residential');
    }
  };

  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
        <Hero 
          onSearchSubmit={handleSearchSubmit} 
          onSelectProperty={(id) => setSelectedPropertyId(id)}
        />
        <ServicesFour onSelectService={handleSelectService} />
        <FeaturedProperties 
          properties={propertiesData}
          currency={currency}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onSelectProperty={(id) => setSelectedPropertyId(id)}
        />
        <PhilosophyPillars />
        <FinancialEstimator currency={currency} />
        <PrimeLocations />
        <Testimonials />
        <ContactConsultation preselectedService={preselectedService} />
      </main>

      <MantraBar />
      <Footer />

      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty}
          currency={currency}
          onClose={() => setSelectedPropertyId(null)}
          onInquireProperty={handleInquireProperty}
        />
      )}

      <FloatingQuickActions />
    </div>
  );
}
