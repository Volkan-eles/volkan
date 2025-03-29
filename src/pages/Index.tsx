
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
        title="KPop Photobooth | Photo Booth Web App"
        description="Create stunning virtual photo booth pictures with your favorite K-pop idols. Customize backgrounds, add stickers, and share your K-pop memories in seconds."
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
