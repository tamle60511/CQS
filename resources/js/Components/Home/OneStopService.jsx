import React from 'react';
import { Link } from '@inertiajs/react';

export default function OneStopService({ services }) {
  // Default services data if not provided via props
  const defaultServices = [
    {
      title: 'Die-Casting Production',
      description: 'High-pressure die casting with precision',
      icon: 'industry'
    },
    {
      title: 'CNC Processing',
      description: 'High-precision machining capabilities',
      icon: 'cogs'
    },
    {
      title: 'Stamping',
      description: 'Advanced metalworking solutions',
      icon: 'hammer'
    },
    {
      title: 'Paint Line',
      description: 'Professional liquid and powder painting',
      icon: 'paint-roller'
    },
    {
      title: 'Assembly',
      description: 'Efficient assembly line operations',
      icon: 'tools'
    },
    {
      title: 'Packaging',
      description: 'Secure and efficient packaging solutions',
      icon: 'box'
    }
  ];

  // Use provided services or default if not available
  const serviceItems = services || defaultServices;

  return (
    <section className="py-20 bg-secondary-50 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute bottom-0 right-0 -mb-16 opacity-50">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="300" fill="url(#paint1_radial)" />
          <defs>
            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(300 300) rotate(90) scale(300)">
              <stop stopColor="#B80726" stopOpacity="0.1" />
              <stop offset="1" stopColor="#970921" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text and Services */}
          <div>
            <p className="text-primary-700 font-medium text-lg tracking-wide mb-3">COMPREHENSIVE SOLUTIONS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">One-Stop Service</h2>
            <p className="text-secondary-600 text-lg mb-8">
              CQS provides customers with a comprehensive "one-stop" service that streamlines your production
              process and ensures quality at every step.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {serviceItems.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-4 border border-transparent
                      text-base font-medium rounded-full text-white bg-gradient-red shadow-lg
                      hover:shadow-xl transform transition hover:-translate-y-1"
            >
              Discover Our Capabilities
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl transform rotate-3"></div>
            <img
              src="/images/one-stop-service.jpg"
              alt="CQS One-Stop Service"
              className="relative rounded-3xl shadow-xl object-cover w-full h-full z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual service cards
function ServiceCard({ title, description, icon }) {
  return (
    <div className="flex items-start p-4 rounded-xl bg-white shadow-sm">
      <div className="flex-shrink-0 mr-4">
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
          <i className={`fas fa-${icon} text-primary-700`}></i>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-secondary-900">{title}</h3>
        <p className="text-sm text-secondary-600">{description}</p>
      </div>
    </div>
  );
}
