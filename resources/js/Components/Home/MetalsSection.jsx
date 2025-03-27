import { Link } from '@inertiajs/react';
import React from 'react';


export default function MetalsSection({ metals }) {
  // Default metals data if not provided via props
  const defaultMetals = [
    {
      name: 'ALUMINUM',
      description: 'Lightweight and Durable',
      image: '/images/metals/aluminum.jpg'
    },
    {
      name: 'MAGNESIUM',
      description: 'High Strength-To-Weight Ratio',
      image: '/images/metals/magnesium.jpg'
    },
    {
      name: 'ZINC',
      description: 'Versatile and Cost-Effective',
      image: '/images/metals/zinc.jpg'
    }
  ];

  // Use provided metals or default if not available
  const metalItems = metals || defaultMetals;

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Unlock Potential With the Right Metal
            </h2>
            <p className="text-secondary-600 mb-8">
              Discover our comprehensive selection of high-quality metals to suit your project needs and ensure optimal performance.
            </p>
            <Link
              href="/metals"
              className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-red shadow-lg hover:shadow-xl transform transition hover:-translate-y-1"
            >
              Explore All Metals
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Metal Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metalItems.map((metal, index) => (
                <MetalCard
                  key={index}
                  name={metal.name}
                  description={metal.description}
                  image={metal.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual metal cards
function MetalCard({ name, description, image }) {
  return (
    <div className="card-hover rounded-2xl overflow-hidden bg-white shadow-xl border border-secondary-100">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white text-xl font-bold">{name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-secondary-800 font-semibold mb-4">{description}</p>
        <Link
          href={`/metals/${name.toLowerCase()}`}
          className="text-primary-700 font-medium hover:text-primary-800 flex items-center"
        >
          Learn More
          <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
