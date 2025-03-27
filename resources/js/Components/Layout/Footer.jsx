import { Link } from '@inertiajs/react';
import React from 'react';


export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex-shrink-0 flex items-center mb-6">
              <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-300">
                CQS
              </span>
            </Link>
            <p className="text-secondary-400 mb-6">
              World's Leading Industry Corporation specializing in advanced die casting solutions with
              a commitment to creativity, quality, and sustainability.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center
                           hover:bg-primary-700 transition"
                >
                  <i className={`fab fa-${link.icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Products</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.url}
                    className="text-secondary-400 hover:text-white transition"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Technologies</h4>
            <ul className="space-y-4">
              {technologyLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.url}
                    className="text-secondary-400 hover:text-white transition"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              {contactItems.map((item) => (
                <li key={item.text} className="flex items-start">
                  <i className={`fas fa-${item.icon} text-primary-500 mt-1.5 mr-3`}></i>
                  <span className="text-secondary-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-secondary-800 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 mb-4 md:mb-0">© {new Date().getFullYear()} CQS Corporation. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.text}
                href={link.url}
                className="text-secondary-400 hover:text-white transition"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Data for footer links and content
const socialLinks = [
  { platform: 'facebook', icon: 'facebook-f', url: '#' },
  { platform: 'twitter', icon: 'twitter', url: '#' },
  { platform: 'linkedin', icon: 'linkedin-in', url: '#' },
  { platform: 'youtube', icon: 'youtube', url: '#' },
];

const productLinks = [
  { text: 'AL. Wheel', url: '/products/al-wheel' },
  { text: 'Light-Weight Products', url: '/products/lightweight' },
  { text: 'Green Energy Products', url: '/products/green-energy' },
  { text: 'Agricultural Products', url: '/products/agricultural' },
];

const technologyLinks = [
  { text: 'HPDC', url: '/technologies/hpdc' },
  { text: 'CNC', url: '/technologies/cnc' },
  { text: 'GDC', url: '/technologies/gdc' },
  { text: 'Painting', url: '/technologies/painting' },
  { text: 'Assembly', url: '/technologies/assembly' },
];

const contactItems = [
  { text: 'Vietnam Headquarters', icon: 'map-marker-alt' },
  { text: '+84 000 000 000', icon: 'phone' },
  { text: 'info@cqs.com', icon: 'envelope' },
];

const legalLinks = [
  { text: 'Privacy Policy', url: '/privacy-policy' },
  { text: 'Terms of Service', url: '/terms-of-service' },
  { text: 'Cookie Policy', url: '/cookie-policy' },
];
