
import React from 'react';
import { Camera, Download, Image, Palette, Sparkles, Heart } from 'lucide-react';

const FeatureBox: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
    <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PhotoboothFeatures: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block bg-pink-100 text-pink-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
            FEATURES
          </span>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Create Perfect Photo Memories</h2>
          <p className="text-gray-600">
            Pica Pica Booth offers everything you need to create stunning photo strips
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureBox 
            icon={<Camera className="h-6 w-6" />}
            title="Easy Photo Capture"
            description="Take photos quickly with your webcam and create beautiful photo strips in seconds"
          />
          <FeatureBox 
            icon={<Palette className="h-6 w-6" />}
            title="Customizable Frames"
            description="Choose from a variety of frame colors to match your style and aesthetic"
          />
          <FeatureBox 
            icon={<Image className="h-6 w-6" />}
            title="Fun Stickers"
            description="Add cute stickers to your photos to make them even more memorable"
          />
          <FeatureBox 
            icon={<Sparkles className="h-6 w-6" />}
            title="Filters & Effects"
            description="Apply creative filters to enhance your photos with just one click"
          />
          <FeatureBox 
            icon={<Download className="h-6 w-6" />}
            title="Easy Sharing"
            description="Download your photo strips instantly and share them on social media"
          />
          <FeatureBox 
            icon={<Heart className="h-6 w-6" />}
            title="K-pop Inspired"
            description="Designs inspired by K-pop aesthetics for the ultimate fan experience"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoboothFeatures;
