
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import HomepageSEOSection from '@/components/landing/HomepageSEOSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <SEOHead 
        title="KPop Photobooth | Photo Booth Web App"
        description="Create stunning virtual photo booth pictures with your favorite K-pop idols. Customize backgrounds, add stickers, and share your K-pop memories in seconds."
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <HeroSection />
        
        {/* Ad container below hero section */}
        <div className="container mx-auto px-4 py-4">
          <div id="ad-container-index-top" className={`p-4 bg-gray-50 border border-gray-200 rounded-md text-center mb-8 ${isMobile ? 'h-[100px]' : 'h-[120px]'}`}>
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            {/* Ad will be inserted here by Google AdSense */}
          </div>
        </div>
        
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        
        {/* Ad container before CTA section */}
        <div className="container mx-auto px-4 py-4">
          <div id="ad-container-index-middle" className={`p-4 bg-gray-50 border border-gray-200 rounded-md text-center mb-8 ${isMobile ? 'h-[100px]' : 'h-[120px]'}`}>
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            {/* Ad will be inserted here by Google AdSense */}
          </div>
        </div>
        
        <CTASection />
        
        {/* Ad container before SEO section */}
        <div className="container mx-auto px-4 py-4">
          <div id="ad-container-index-bottom" className={`p-4 bg-gray-50 border border-gray-200 rounded-md text-center mb-8 ${isMobile ? 'h-[100px]' : 'h-[120px]'}`}>
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            {/* Ad will be inserted here by Google AdSense */}
          </div>
        </div>
        
        <HomepageSEOSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
