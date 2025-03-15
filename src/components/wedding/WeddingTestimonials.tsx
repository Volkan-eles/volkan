
import React from 'react';

const WeddingTestimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-light mb-4 text-gray-800">What Couples Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from couples who used our Wedding Photobooth for their special day
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 font-bold text-xl">S</div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">Sarah & Michael</h4>
                <p className="text-sm text-gray-500">June 2023</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Our guests absolutely loved the Wedding Photobooth! The elegant layout matched our theme perfectly, and everyone took home beautiful memories."
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">J</div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">Jessica & Thomas</h4>
                <p className="text-sm text-gray-500">September 2023</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The customizable names and date feature made our photos truly personal. It was incredibly easy to set up and our guests had a blast using it!"
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">A</div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">Andrew & Olivia</h4>
                <p className="text-sm text-gray-500">November 2023</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The quality of the photos was outstanding, and the beautiful filters made everyone look amazing. Best wedding entertainment decision we made!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingTestimonials;
