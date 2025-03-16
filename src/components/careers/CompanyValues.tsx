
import React from 'react';

const CompanyValues: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-6">Life at K-pop Frame</h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        We're a passionate team of K-pop enthusiasts, developers, designers, and business experts working together to create magical experiences for fans worldwide.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] duration-300">
          <div className="text-pink-500 text-2xl font-bold mb-2">Creativity</div>
          <p className="text-gray-700">We foster innovation and creative thinking to push boundaries</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] duration-300">
          <div className="text-purple-500 text-2xl font-bold mb-2">Flexibility</div>
          <p className="text-gray-700">Work remotely with flexible hours and focus on what matters</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] duration-300">
          <div className="text-indigo-500 text-2xl font-bold mb-2">Impact</div>
          <p className="text-gray-700">Make a real difference in how fans connect with K-pop culture</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyValues;
