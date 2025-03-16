
import React from 'react';
import { Camera, Users, Download, Activity, Image, Type, Layers, Palette } from 'lucide-react';
import FeatureCard from '../FeatureCard';

const FeatureGrid = () => {
  const features = [
    { icon: Camera, title: "Live Photo Capture", description: "Use your webcam to take real-time photos with K-pop idol overlays" },
    { icon: Users, title: "Featured Idols", description: "Choose from a growing collection of popular K-pop idol images" },
    { icon: Download, title: "Easy Sharing", description: "Download and share your creations on social media with one click" },
    { icon: Activity, title: "Custom Layouts", description: "Multiple photo strip layouts and designs to choose from" },
    { icon: Image, title: "Background Options", description: "Change backgrounds and add effects to your photo strips" },
    { icon: Type, title: "Personalized Text", description: "Add custom messages and dates to your photo memories" },
    { icon: Users, title: "Group Photos", description: "Create group photos with multiple idols in one frame" },
    { icon: Layers, title: "Album Cover Style", description: "Design your photos in the style of K-pop album covers" },
    { icon: Palette, title: "Fandom Colors", description: "Use official fandom colors in your photo designs" }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
          <FeatureCard 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
