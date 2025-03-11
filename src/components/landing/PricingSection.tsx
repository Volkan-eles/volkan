
import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  const freePlanFeatures = [
    { included: true, text: '5 photo sessions per day' },
    { included: true, text: 'Access to 10+ idols' },
    { included: true, text: 'Basic layouts' },
    { included: false, text: 'Watermark-free downloads' }
  ];

  const premiumPlanFeatures = [
    { included: true, text: 'Unlimited photo sessions' },
    { included: true, text: 'Access to all idols' },
    { included: true, text: 'All premium layouts' },
    { included: true, text: 'Watermark-free downloads' }
  ];

  const enterprisePlanFeatures = [
    { included: true, text: 'Dedicated server resources' },
    { included: true, text: 'Custom idol requests' },
    { included: true, text: 'White-labeling options' },
    { included: true, text: 'Priority support' }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">Start for free, upgrade for more features</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Free"
            description="Perfect for casual fans"
            price="$0"
            features={freePlanFeatures}
            buttonText="Get Started"
            buttonVariant="outline"
          />
          
          <PricingCard 
            title="Premium"
            description="For dedicated fans"
            price="$9.99"
            features={premiumPlanFeatures}
            buttonText="Get Premium"
            buttonVariant="default"
            buttonClassName="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
            highlight={true}
          />
          
          <PricingCard 
            title="Enterprise"
            description="For fan clubs & events"
            price="Custom"
            period=""
            features={enterprisePlanFeatures}
            buttonText="Contact Us"
            buttonVariant="outline"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
