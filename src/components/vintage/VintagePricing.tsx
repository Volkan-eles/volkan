
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const VintagePricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-3 font-serif">Simple, Transparent Pricing</h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Choose the perfect plan for your vintage photo booth needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Nostalgia Starter"
            price={49}
            description="Perfect for small gatherings and personal use"
            features={[
              "2-hour event duration",
              "Basic vintage filters",
              "Digital downloads",
              "Classic photo strip layout",
              "Email sharing"
            ]}
            buttonText="Get Started"
            buttonLink="/contact"
            highlighted={false}
          />
          
          <PricingCard
            title="Vintage Deluxe"
            price={89}
            description="Our most popular package for medium-sized events"
            features={[
              "4-hour event duration",
              "Full filter collection",
              "Digital downloads & prints",
              "Multiple layout options",
              "Social media sharing",
              "Custom vintage frames",
              "Digital props library"
            ]}
            buttonText="Choose Deluxe"
            buttonLink="/contact"
            highlighted={true}
          />
          
          <PricingCard
            title="Timeless Premium"
            price={149}
            description="Comprehensive package for large events and weddings"
            features={[
              "Unlimited event duration",
              "All premium filters",
              "Unlimited prints & downloads",
              "All layout options",
              "Social media integration",
              "Custom event branding",
              "Complete props collection",
              "Dedicated attendant",
              "Photo album creation"
            ]}
            buttonText="Contact Us"
            buttonLink="/contact"
            highlighted={false}
          />
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  buttonLink,
  highlighted
}) => {
  return (
    <div className={`rounded-xl shadow-lg p-8 transition-all duration-300 border ${
      highlighted 
        ? 'border-amber-400 shadow-amber-200 relative transform hover:-translate-y-2' 
        : 'border-amber-100 hover:-translate-y-1'
    }`}>
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-4 py-1 rounded-full font-medium text-sm">
          Most Popular
        </div>
      )}
      
      <h3 className={`text-2xl font-bold mb-2 font-serif ${highlighted ? 'text-amber-800' : 'text-amber-700'}`}>{title}</h3>
      <div className="mb-4">
        <span className={`text-4xl font-bold ${highlighted ? 'text-amber-600' : 'text-amber-600'}`}>${price}</span>
        <span className="text-amber-700">/event</span>
      </div>
      <p className="text-amber-700 mb-6">{description}</p>
      
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${highlighted ? 'text-amber-500' : 'text-amber-400'}`} />
            <span className="text-amber-800">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link to={buttonLink}>
        <Button 
          className={`w-full ${
            highlighted 
              ? 'bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white' 
              : 'bg-white border border-amber-400 text-amber-700 hover:bg-amber-50'
          }`}
          size="lg"
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default VintagePricing;
