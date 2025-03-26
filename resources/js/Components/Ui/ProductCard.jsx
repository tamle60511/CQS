import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, category, title, description, link }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg product-card">
      <div className="h-64 bg-gray-200 relative overflow-hidden group">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link to={link} className="bg-red-600 text-white px-4 py-2 rounded-full">View Details</Link>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-red-600 font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
