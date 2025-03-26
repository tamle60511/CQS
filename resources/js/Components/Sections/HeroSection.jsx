import React from 'react';
import Button from '../ui/Button';
import Banner from '../../../../public/Frontend/Images/banner.jpg'

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden" id="hero-section">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 "></div>
        <img src={Banner} className="w-full h-full object-cover parallax-bg"  alt='Banner'></img>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 relative z-20 pt-40">
        <div className="max-w-3xl">
          <div className="reveal-text mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span>World's Leading Industry <span className="text-red-600">Corporation</span></span>
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-80 mb-8 fade-up">
            CQS provides customers with a "one-stop" service, from die-casting to assembly with quality control
            at each station to ensure products meet customers' requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-up">
            <Button variant="primary" size="md">Our Products</Button>
            <Button variant="secondary" size="md">Our Capabilities</Button>
          </div>
          <div className="mt-12 flex items-center fade-up">
            <div className="flex -space-x-2">
             <span>CQS Lgo</span>
            </div>
            <p className="ml-4 text-sm">ISO 9001, IATF 16949, and ISO 14001 Certified Manufacturing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
