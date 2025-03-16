import React from 'react';
import PricingCard from './PricingCard';

// Simplified version without animations until dependencies are loaded
const PricingSection = () => {
  const freePlanFeatures = [
    { included: true, text: '5 photo sessions per day' },
    { included: true, text: 'Access to 10+ idols' },
    { included: true, text: 'Basic layouts' },
    { included: true, text: '1 download per day' },
    { included: false, text: 'Watermark-free downloads' }
  ];

  const premiumPlanFeatures = [
    { included: true, text: 'Unlimited photo sessions' },
    { included: true, text: 'Access to all idols' },
    { included: true, text: 'All premium layouts' },
    { included: true, text: 'Unlimited downloads' },
    { included: true, text: 'Watermark-free downloads' }
  ];

  const enterprisePlanFeatures = [
    { included: true, text: 'Dedicated server resources' },
    { included: true, text: 'Custom idol requests' },
    { included: true, text: 'White-labeling options' },
    { included: true, text: 'Priority support' },
    { included: true, text: 'Advanced analytics dashboard' },
    { included: true, text: 'API access for integrations' }
  ];

  // Stripe price IDs - replace with actual IDs in production
  const stripePriceIds = {
    premium: 'price_1OvKF3GswQGMCH2oSAPsZZ8h',
    enterprise: 'price_1OvKFVGswQGMCH2orrozvOCs'
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">Start for free, upgrade for more features</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <PricingCard 
              title="Free"
              description="Perfect for casual fans"
              price="$0"
              features={freePlanFeatures}
              buttonText="Get Started"
              buttonVariant="outline"
              paymentEnabled={false}
            />
          </div>
          
          <div>
            <PricingCard 
              title="Premium"
              description="For dedicated fans"
              price="$1"
              period="/year"
              features={premiumPlanFeatures}
              buttonText="Get Premium"
              buttonVariant="default"
              buttonClassName="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
              highlight={true}
              paymentEnabled={true}
              stripePriceId={stripePriceIds.premium}
            />
          </div>
          
          <div>
            <PricingCard 
              title="Enterprise"
              description="For fan clubs & events"
              price="$4.99"
              period="/month"
              features={enterprisePlanFeatures}
              buttonText="Subscribe Now"
              buttonVariant="outline"
              paymentEnabled={true}
              stripePriceId={stripePriceIds.enterprise}
            />
          </div>
        </div>
        
        <div className="mt-16 text-center text-sm text-gray-500 max-w-3xl mx-auto">
          <p>All plans include automatic updates and access to our core features. 
          We use Stripe for secure payment processing. By subscribing, you agree to our Terms of Service.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
