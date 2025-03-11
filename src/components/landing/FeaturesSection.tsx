
import React from 'react';
import { Camera, Users, Download, Activity } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Perfect K-pop Photos</h2>
        <p className="text-lg text-gray-600">Create stunning photo memories with your favorite idols using our powerful tools</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Camera}
          title="Live Photo Capture"
          description="Use your webcam to take real-time photos with K-pop idol overlays"
        />
        <FeatureCard 
          icon={Users}
          title="Featured Idols"
          description="Choose from a growing collection of popular K-pop idol images"
        />
        <FeatureCard 
          icon={Download}
          title="Easy Sharing"
          description="Download and share your creations on social media with one click"
        />
        <FeatureCard 
          icon={Activity}
          title="Custom Layouts"
          description="Multiple photo strip layouts and designs to choose from"
        />
        <FeatureCard 
          title="Background Options"
          description="Change backgrounds and add effects to your photo strips"
          icon={({ size }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
              <circle cx="9" cy="9" r="2" fill="currentColor" />
              <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        />
        <FeatureCard 
          title="Personalized Text"
          description="Add custom messages and dates to your photo memories"
          icon={({ size }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 12L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        />
      </div>
    </div>
  </section>
);

export default FeaturesSection;
