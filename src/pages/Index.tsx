
import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import AnimatedPricingSection from '@/components/landing/AnimatedPricingSection';
import HomepageSEOSection from '@/components/landing/HomepageSEOSection';

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Pica Photobooth | Pica Pica Photo Booth"
        description="Create stunning photos with Pica Photobooth. Our digital photo booth experience offers customizable frames, filters, and interactive features for any occasion."
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="pricing">
          <AnimatedPricingSection />
        </div>
        <CTASection />
        <HomepageSEOSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
