import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ image, date, category, title, excerpt, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row news-card">
      <div className="md:w-1/3 h-48 md:h-auto bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-2/3 p-6">
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-500">{date}</span>
          <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
          <span className="text-sm text-red-600">{category}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link to={link} className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
          Read More
          <i className="fas fa-arrow-right ml-1 text-sm"></i>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
