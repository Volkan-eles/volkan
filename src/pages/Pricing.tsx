
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import EnhancedPricingSection from '@/components/landing/EnhancedPricingSection';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing Plans | K-pop Frame</title>
        <meta name="description" content="Choose from our flexible pricing plans for K-pop Frame - from Free to Premium and Pay What You Want options to support our development." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 max-w-6xl py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
              Flexible Pricing Plans
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs - from free sessions to unlimited premium features
            </p>
          </div>
        </div>
        
        <EnhancedPricingSection />
        
        <div className="container mx-auto px-4 max-w-3xl py-16">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What's included in the free plan?</h3>
                <p className="text-gray-600">The free plan includes 5 photo sessions per day, access to 10+ idols, basic layouts, and 1 download per day. Perfect for casual fans who want to try out the platform.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">How does the premium plan work?</h3>
                <p className="text-gray-600">For just $1 per year, the premium plan unlocks unlimited photo sessions, access to all idols, all premium layouts, unlimited downloads, and removes watermarks from your photos.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What is the Pay What You Want option?</h3>
                <p className="text-gray-600">This option lets you choose your own price to support our development. You'll get all premium features plus priority support, early access to new features, and community recognition.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-gray-600">Yes, you can change your plan at any time. If you upgrade, you'll immediately get access to all the features in your new plan.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">How do I pay for the premium features?</h3>
                <p className="text-gray-600">We use Lemon Squeezy for secure payment processing. You can pay using major credit cards or other supported payment methods.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Pricing;
