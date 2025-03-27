import { Link } from '@inertiajs/react';
import React from 'react';


export default function Header() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">CQS</span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link href="/" className="font-medium text-secondary-600 hover:text-primary-700 transition px-3 py-2 rounded-md text-sm">Home</Link>
            <Link href="/about" className="font-medium text-secondary-600 hover:text-primary-700 transition px-3 py-2 rounded-md text-sm">About</Link>
            <Link href="/technologies" className="font-medium text-secondary-600 hover:text-primary-700 transition px-3 py-2 rounded-md text-sm">Technologies</Link>
            <Link href="/products" className="font-medium text-secondary-600 hover:text-primary-700 transition px-3 py-2 rounded-md text-sm">Products</Link>
            <Link href="/industries" className="font-medium text-secondary-600 hover:text-primary-700 transition px-3 py-2 rounded-md text-sm">Industries</Link>
            <Link href="/contact" className="font-medium text-white bg-primary-700 hover:bg-primary-800 transition px-4 py-2 rounded-full text-sm ml-2">Contact Us</Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 transition">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
