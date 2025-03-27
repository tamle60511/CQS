import { Link } from '@inertiajs/react';
import React from 'react';


export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing Process?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Let CQS be your partner in engineering excellence. Our one-stop solution will streamline
            your production and elevate your product quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white
                      text-base font-medium rounded-full text-primary-700 bg-white hover:bg-white/90
                      shadow-lg hover:shadow-xl transform transition hover:-translate-y-1"
            >
              Contact Our Team
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white
                      text-base font-medium rounded-full text-white bg-transparent hover:bg-white/10
                      transform transition hover:-translate-y-1"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
