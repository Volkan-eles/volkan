
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DigiboothPricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your event needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-500">/event</span>
              </div>
              <p className="text-gray-600">Perfect for small gatherings and parties</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <PricingFeature included text="Up to 4 hours of usage" />
                <PricingFeature included text="Basic photo filters" />
                <PricingFeature included text="Standard backgrounds" />
                <PricingFeature included text="Email sharing" />
                <PricingFeature included={false} text="Background removal" />
                <PricingFeature included={false} text="Custom branding" />
                <PricingFeature included={false} text="Premium support" />
              </ul>
              <Link to="/contact">
                <Button className="w-full" variant="outline">Get Started</Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border-2 border-blue-500 shadow-md transition-all duration-300 hover:shadow-lg overflow-hidden transform scale-105">
            <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">MOST POPULAR</div>
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-gray-500">/event</span>
              </div>
              <p className="text-gray-600">Ideal for weddings and corporate events</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <PricingFeature included text="Unlimited usage time" />
                <PricingFeature included text="Premium photo filters" />
                <PricingFeature included text="Enhanced backgrounds" />
                <PricingFeature included text="Social media sharing" />
                <PricingFeature included text="Background removal" />
                <PricingFeature included text="Basic branding" />
                <PricingFeature included={false} text="Premium support" />
              </ul>
              <Link to="/contact">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$499</span>
                <span className="text-gray-500">/event</span>
              </div>
              <p className="text-gray-600">For large-scale events and festivals</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <PricingFeature included text="Unlimited usage time" />
                <PricingFeature included text="All premium features" />
                <PricingFeature included text="Custom backgrounds" />
                <PricingFeature included text="All sharing options" />
                <PricingFeature included text="Advanced background removal" />
                <PricingFeature included text="Full custom branding" />
                <PricingFeature included text="24/7 premium support" />
              </ul>
              <Link to="/contact">
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 text-gray-600">
          <p>All plans include secure cloud storage and technical support.</p>
          <p className="mt-2">Need a custom solution? <Link to="/contact" className="text-blue-500 hover:underline">Contact us</Link> for custom pricing.</p>
        </div>
      </div>
    </section>
  );
};

interface PricingFeatureProps {
  included: boolean;
  text: string;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ included, text }) => {
  return (
    <li className={`flex items-center ${included ? 'text-gray-800' : 'text-gray-400'}`}>
      {included ? (
        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
      ) : (
        <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
      )}
      <span>{text}</span>
    </li>
  );
};

export default DigiboothPricing;
