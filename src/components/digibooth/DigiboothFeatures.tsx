
import React from 'react';
import { Camera, Users, Download, Video, Image, Cloud, Clock, Award, Settings, Paint, Phone, PaintBucket } from 'lucide-react';

const DigiboothFeatures = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Powerful Digital Photo Booth Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need for unforgettable photo booth experiences at your events
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Camera className="h-8 w-8 text-blue-500" />}
            title="High-Quality Captures"
            description="Take professional-grade photos with our advanced camera integration"
          />
          
          <FeatureCard
            icon={<PaintBucket className="h-8 w-8 text-blue-500" />}
            title="Custom Backgrounds"
            description="Remove and replace backgrounds with our AI-powered technology"
          />
          
          <FeatureCard
            icon={<Settings className="h-8 w-8 text-blue-500" />}
            title="Extensive Customization"
            description="Modify frames, borders, colors, and themes to match your event"
          />
          
          <FeatureCard
            icon={<Download className="h-8 w-8 text-blue-500" />}
            title="Instant Sharing"
            description="Download and share photo strips instantly to social media"
          />
          
          <FeatureCard
            icon={<Cloud className="h-8 w-8 text-blue-500" />}
            title="Cloud Storage"
            description="All photos are securely stored in the cloud for easy access"
          />
          
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-blue-500" />}
            title="Countdown Timer"
            description="Customizable countdown to ensure everyone is ready for the perfect shot"
          />
          
          <FeatureCard
            icon={<Video className="h-8 w-8 text-blue-500" />}
            title="Live Preview"
            description="See how your photo will look before capturing it"
          />
          
          <FeatureCard
            icon={<Paint className="h-8 w-8 text-blue-500" />}
            title="Filter Effects"
            description="Apply professional filters and effects to enhance your photos"
          />
          
          <FeatureCard
            icon={<Phone className="h-8 w-8 text-blue-500" />}
            title="Mobile Compatible"
            description="Use on any device - from desktop computers to tablets and smartphones"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default DigiboothFeatures;
