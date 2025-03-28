import React from 'react';
import SectionHeader from './sections/SectionHeader';
import BoothShowcase from './sections/BoothShowcase';
import IdolIntegration from './sections/IdolIntegration';
import CreativePhotoThemes from './sections/CreativePhotoThemes';
import FandomFeatures from './sections/FandomFeatures';
import FeatureGrid from './sections/FeatureGrid';
import TechnologyFeatures from './sections/TechnologyFeatures';
import FeatureHighlights from './sections/FeatureHighlights';

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
    <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
    
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="animate-fade-in">
        <SectionHeader 
          badge="POWERFUL FEATURES"
          title="Everything You Need for Perfect K-pop Photos"
          description="Create stunning photo memories with your favorite idols using our powerful tools"
        />
      </div>
      
      {/* Featured booth styles with visual callouts */}
      <BoothShowcase />
      
      {/* K-pop Idol Integration cards */}
      <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <IdolIntegration />
      </div>
      
      {/* Creative photo themes */}
      <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <CreativePhotoThemes />
      </div>
      
      {/* Fandom Feature Highlights */}
      <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
        <FandomFeatures />
      </div>
      
      {/* Feature Grid */}
      <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
        <FeatureGrid />
      </div>
      
      {/* Technology Features */}
      <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
        <TechnologyFeatures />
      </div>
      
      {/* New feature highlights section */}
      <div className="animate-fade-in" style={{ animationDelay: '700ms' }}>
        <FeatureHighlights />
      </div>
    </div>
  </section>
);

export default FeaturesSection;
