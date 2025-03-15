
import React from 'react';
import { Camera, Download, Palette, Heart, Users } from 'lucide-react';

const WeddingFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-light mb-4 text-gray-800">Wedding Photobooth Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Create beautiful memories with our elegantly designed wedding photobooth experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <Camera className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Elegant Layout</h3>
            <p className="text-gray-600">
              Custom wedding photo layout with personalized names and dates for your special day
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <Palette className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Wedding Filters</h3>
            <p className="text-gray-600">
              Beautiful filters designed specifically for wedding photography
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Instant Download</h3>
            <p className="text-gray-600">
              Download your wedding photos instantly to share with guests
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Guest Experience</h3>
            <p className="text-gray-600">
              Perfect activity for your wedding guests to create lasting memories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingFeatures;
