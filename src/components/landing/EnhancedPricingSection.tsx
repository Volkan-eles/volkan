
import React, { useEffect, useState } from 'react';
import PricingSection from './PricingSection';

const EnhancedPricingSection = () => {
  const [AnimatedSection, setAnimatedSection] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    // Dynamically import the animated component once the page has loaded
    const loadAnimatedComponent = async () => {
      try {
        const AnimatedModule = await import('./AnimatedPricingSection');
        setAnimatedSection(() => AnimatedModule.default);
      } catch (error) {
        console.error('Failed to load animated pricing section:', error);
        // Fallback to static version is already handled by default render
      }
    };
    
    loadAnimatedComponent();
  }, []);

  // If the animated component is loaded, use it, otherwise fall back to the static version
  return AnimatedSection ? <AnimatedSection /> : <PricingSection />;
};

export default EnhancedPricingSection;
