
import React from 'react';
import { Camera, Users, Download, Activity, Image, Type, Layers, Palette } from 'lucide-react';
import FeatureCard from '../FeatureCard';

const FeatureGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard icon={Camera} title="Live Photo Capture" description="Use your webcam to take real-time photos with K-pop idol overlays" />
      <FeatureCard icon={Users} title="Featured Idols" description="Choose from a growing collection of popular K-pop idol images" />
      <FeatureCard icon={Download} title="Easy Sharing" description="Download and share your creations on social media with one click" />
      <FeatureCard icon={Activity} title="Custom Layouts" description="Multiple photo strip layouts and designs to choose from" />
      <FeatureCard title="Background Options" description="Change backgrounds and add effects to your photo strips" icon={Image} />
      <FeatureCard title="Personalized Text" description="Add custom messages and dates to your photo memories" icon={Type} />
      <FeatureCard title="Group Photos" description="Create group photos with multiple idols in one frame" icon={Users} />
      <FeatureCard title="Album Cover Style" description="Design your photos in the style of K-pop album covers" icon={Layers} />
      <FeatureCard title="Fandom Colors" description="Use official fandom colors in your photo designs" icon={Palette} />
    </div>
  );
};

export default FeatureGrid;
