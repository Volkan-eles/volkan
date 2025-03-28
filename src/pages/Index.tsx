
import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import HomepageSEOSection from '@/components/landing/HomepageSEOSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';

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
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <CTASection />
        <HomepageSEOSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
