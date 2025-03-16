
import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import DigiboothPricing from '@/components/digibooth/DigiboothPricing';

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen flex flex-col">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <DigiboothPricing />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
