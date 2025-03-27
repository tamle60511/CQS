import { Link } from '@inertiajs/react';
import React from 'react';


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100"></div>

      {/* Decorative Circle */}
      <div className="absolute right-0 top-0 -mt-16 opacity-50">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="400" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(400 400) rotate(90) scale(400)">
              <stop stopColor="#B80726" stopOpacity="0.2" />
              <stop offset="1" stopColor="#970921" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary-700 font-medium text-lg tracking-wide mb-3">
              ENGINEERING THE FUTURE
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary-900 font-bold leading-tight mb-6">
              Proprietary Technologies For
              <span className="text-primary-700"> Advanced Die Casting Solutions</span>
            </h1>
            <p className="text-secondary-600 text-lg mb-8 max-w-xl">
              Delivering innovative engineering solutions with uncompromising quality and sustainable
              practices since 1995.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/technologies"
                  className="inline-flex items-center justify-center px-6 py-4 border border-transparent
                           text-base font-medium rounded-full text-white bg-gradient-red shadow-lg
                           hover:shadow-xl transform transition hover:-translate-y-1">
                Die Cast Technologies
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/videos"
                    className="inline-flex items-center justify-center px-6 py-4 border border-primary-700
                             text-base font-medium rounded-full text-primary-700 bg-transparent
                             hover:bg-primary-50 transform transition">
                Watch Video
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            {/* Decorative Blobs */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary-100 rounded-full
                          mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary-300 rounded-full
                          mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>

            {/* Main Image */}
            <div className="relative">
              <img
                src="/images/hero-die-casting.jpg"
                alt="Advanced Die Casting Technology"
                className="rounded-3xl shadow-2xl object-cover w-full h-full floating"
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-5 -right-5 flex items-center justify-center">
                <span className="flex h-20 w-20 rounded-full bg-primary-700 text-white
                               items-center justify-center text-sm font-semibold pulse">
                  25+ Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
