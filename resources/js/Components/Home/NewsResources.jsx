import React from 'react';
import { Link } from '@inertiajs/react';

export default function NewsResources({ news }) {
  // Default news data if not provided via props
  const defaultNews = [
    {
      type: 'WEBINAR',
      title: 'What Drives Tool Cost?',
      image: '/images/resources/webinar-thumbnail.jpg',
      url: '/resources/webinar/tool-cost'
    },
    {
      type: 'WHITEPAPER',
      title: 'Bulletproof Supply',
      image: '/images/resources/whitepaper-thumbnail.jpg',
      url: '/resources/whitepaper/bulletproof-supply'
    },
    {
      type: 'ARTICLE',
      title: 'Facility Spotlight: Lake Forest',
      image: '/images/resources/article-thumbnail.jpg',
      url: '/resources/article/lake-forest'
    }
  ];

  // Use provided news or default if not available
  const newsItems = news || defaultNews;

  return (
    <section className="py-20 bg-secondary-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary-600 font-medium text-lg tracking-wide mb-2">BEYOND THE BASICS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">Die Casting Resources</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <ResourceCard
              key={index}
              type={item.type}
              title={item.title}
              image={item.image}
              url={item.url}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/resources"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-700 text-base font-medium rounded-full text-primary-700 bg-white hover:bg-primary-50 shadow-md transition"
          >
            View All Resources
            <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual resource cards
function ResourceCard({ type, title, image, url }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-primary-700 font-semibold uppercase text-sm mb-2">{type}</div>
        <h3 className="text-xl font-bold text-secondary-900 mb-4">{title}</h3>
        <Link
          href={url}
          className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800"
        >
          View {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
          <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
