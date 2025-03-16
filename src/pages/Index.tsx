
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
        <AnimatedPricingSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
