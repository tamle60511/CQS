import { Link } from '@inertiajs/react';
import React, { useState } from 'react';


export default function IndustriesSection({ industries }) {
  // Default industries data if not provided via props
  const defaultIndustries = [
    {
      name: 'AUTOMOTIVE',
      description: 'Precision components for the automotive industry, from structural parts to aesthetic elements.',
      icon: 'car',
      image: '/images/industries/automotive.jpg',
      url: '/industries/automotive'
    },
    {
      name: 'CONSUMER ELECTRONICS',
      description: 'Lightweight, durable components for devices that enhance everyday life.',
      icon: 'mobile-alt',
      image: '/images/industries/consumer-electronics.jpg',
      url: '/industries/consumer-electronics'
    },
    {
      name: 'ENTERPRISE TECHNOLOGY',
      description: 'Critical components for servers, data centers, and enterprise-grade hardware.',
      icon: 'server',
      image: '/images/industries/enterprise-technology.jpg',
      url: '/industries/enterprise-technology'
    },
    {
      name: 'HARDWARE',
      description: 'High-quality components for hardware and building applications.',
      icon: 'bolt',
      image: '/images/industries/hardware.jpg',
      url: '/industries/hardware'
    },
    {
      name: 'MEDICAL',
      description: 'Precise, sterilizable components for medical devices and equipment.',
      icon: 'medkit',
      image: '/images/industries/medical.jpg',
      url: '/industries/medical'
    }
  ];

  // Use provided industries or default if not available
  const industryItems = industries || defaultIndustries;

  // State for current page/slide
  const [activePage, setActivePage] = useState(0);

  // Calculate total number of pages (for mobile/responsive view)
  const totalPages = Math.ceil(industryItems.length / 5);

  // Handle navigation
  const handlePrevious = () => {
    setActivePage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-secondary-50 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-700 font-medium text-lg tracking-wide mb-3">DIVERSE INDUSTRIES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Innovation That Drives <span className="text-primary-700">Performance</span>
          </h2>
          <p className="text-secondary-600 text-lg">
            Our solutions power advancement across multiple sectors, enhancing quality and efficiency.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {industryItems.map((industry, index) => (
              <IndustryCard
                key={index}
                name={industry.name}
                description={industry.description}
                icon={industry.icon}
                image={industry.image}
                url={industry.url}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition md:translate-x-0 focus:outline-none"
            aria-label="Previous industries"
          >
            <i className="fas fa-chevron-left text-primary-700"></i>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition md:translate-x-0 focus:outline-none"
            aria-label="Next industries"
          >
            <i className="fas fa-chevron-right text-primary-700"></i>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-red shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 mb-6 md:mb-0"
          >
            See All Industries
            <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          {/* <div className="flex space-x-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePage(i)}
                className={`w-3 h-3 rounded-full ${
                  i === activePage
                    ? 'bg-primary-700'
                    : i === 0 && activePage !== 0
                      ? 'bg-white border-2 border-primary-700'
                      : 'bg-secondary-300'
                }`}
                aria-label={`Go to page ${i + 1}`}
              ></button>
            ))}
          </div> */}
          <div class="flex space-x-3">
                    <button class="w-3 h-3 rounded-full bg-white border-2 border-primary-700"></button>
                    <button class="w-3 h-3 rounded-full bg-primary-700"></button>
                    <button class="w-3 h-3 rounded-full bg-secondary-300"></button>
                    <button class="w-3 h-3 rounded-full bg-secondary-300"></button>
                    <button class="w-3 h-3 rounded-full bg-secondary-300"></button>
                </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual industry cards
function IndustryCard({ name, description, icon, image, url }) {
  return (
    <div className="group relative h-96 rounded-2xl overflow-hidden shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/70 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="mb-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto">
          <i className={`fas fa-${icon} text-white text-xl`}></i>
        </div>
        <h3 className="text-xl font-bold text-white text-center mb-2">{name}</h3>
        <p className="text-secondary-300 text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
      <Link href={url} className="absolute inset-0" aria-label={`Learn more about ${name}`}></Link>
    </div>
  );
}
