
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
  <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader 
        badge="POWERFUL FEATURES"
        title="Everything You Need for Perfect K-pop Photos"
        description="Create stunning photo memories with your favorite idols using our powerful tools"
      />
      
      {/* Featured booth styles with visual callouts */}
      <BoothShowcase />
      
      {/* K-pop Idol Integration cards */}
      <IdolIntegration />
      
      {/* Creative photo themes */}
      <CreativePhotoThemes />
      
      {/* Fandom Feature Highlights */}
      <FandomFeatures />
      
      {/* Feature Grid */}
      <FeatureGrid />
      
      {/* Technology Features */}
      <TechnologyFeatures />
      
      {/* New feature highlights section */}
      <FeatureHighlights />
    </div>
  </section>
);

export default FeaturesSection;
