import { Link } from '@inertiajs/react';
import React from 'react';


export default function CoreValues() {
  const values = [
    {
      letter: 'C',
      title: 'Creativity',
      description: 'We continuously innovate and develop new solutions to meet evolving customer needs. Our creative approach enables us to stay at the forefront of industry advancements.',
      gradientFrom: 'from-primary-700',
      gradientTo: 'to-primary-600'
    },
    {
      letter: 'Q',
      title: 'Quality',
      description: 'Excellence is our standard. We implement rigorous quality control at every step, ensuring our products consistently exceed customer expectations and industry standards.',
      gradientFrom: 'from-primary-600',
      gradientTo: 'to-primary-700'
    },
    {
      letter: 'S',
      title: 'Sustainability',
      description: 'We are committed to environmental responsibility through resource efficiency, waste reduction, and innovative green solutions that benefit our planet and future generations.',
      gradientFrom: 'from-primary-800',
      gradientTo: 'to-primary-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-900 to-secondary-800 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
          <p className="text-xl text-secondary-300">
            The pillars that guide our innovation, quality, and sustainability in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <CoreValueCard
              key={index}
              letter={value.letter}
              title={value.title}
              description={value.description}
              gradientFrom={value.gradientFrom}
              gradientTo={value.gradientTo}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/about/values"
            className="inline-flex items-center px-6 py-3 border border-primary-400 text-base font-medium rounded-full text-white bg-transparent hover:bg-primary-900/20 transition"
          >
            Learn More About Our Values
            <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual core value cards
function CoreValueCard({ letter, title, description, gradientFrom, gradientTo }) {
  return (
    <div className="core-value-card rounded-2xl p-8 bg-gradient-to-br from-secondary-800/50 to-secondary-900/50 border border-secondary-700/50 backdrop-blur-sm shadow-xl">
      <div className={`core-value-icon w-24 h-24 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} p-0.5 mb-8 mx-auto`}>
        <div className="w-full h-full rounded-full bg-secondary-800 flex items-center justify-center">
          <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-primary-300">
            {letter}
          </span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 text-center">{title}</h3>
      <p className="text-secondary-300 text-center">
        {description}
      </p>
      <div className="mt-8 flex justify-center">
        <div className={`w-16 h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full`}></div>
      </div>
    </div>
  );
}
