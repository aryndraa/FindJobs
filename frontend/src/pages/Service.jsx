// Service.js
import React from 'react';
import HeroSection from '../components/molecules/HeroSection';
import CategoryFilter from '../components/molecules/CategoryFilter';
import SearchBar from '../components/molecules/SearchBar';
import SortingOptions from '../components/molecules/SortingOptions';
import ServiceCard from '../components/molecules/ServiceCard';

const Service = () => {
  return (
    <div className="mx-16 py-24">
      <HeroSection />
      <CategoryFilter />
      <div className="flex justify-between items-center flex-col lg:flex-row">
      <SearchBar />
      <SortingOptions />
      </div>
      <h2 className="text-xl font-bold mt-6">12,000 Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        {/* Add more <ServiceCard /> as needed */}
      </div>
    </div>
  );
};

export default Service;