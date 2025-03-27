import React from 'react';

export default function GlobalReach({ stats }) {
  // Default stats data if not provided via props
  const defaultStats = [
    { value: '25+', label: 'Years of Experience' },
    { value: '30+', label: 'Countries Reached' },
    { value: '500+', label: 'Employees Worldwide' },
    { value: '93%', label: 'Aluminum Recycling Rate' }
  ];

  // Use provided stats or default if not available
  const statItems = stats || defaultStats;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-700 font-medium text-lg tracking-wide mb-3">INTERNATIONAL PRESENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">Global Reach</h2>
          <p className="text-secondary-600 text-lg">
            Our products have been sold to Taiwan, the United States, Canada, Mexico, Japan, Italy,
            China, and Southeast Asia.
          </p>
        </div>

        {/* World Map */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/images/global-map.jpg"
            alt="Global Map"
            className="w-full object-cover"
          />
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {statItems.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual stat items
function StatItem({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-primary-700 mb-2">{value}</div>
      <p className="text-secondary-600">{label}</p>
    </div>
  );
}
