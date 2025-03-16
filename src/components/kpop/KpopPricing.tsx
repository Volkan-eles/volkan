
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KpopPricing: React.FC = () => {
  const plans = [
    {
      name: "Fan Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small fan meetings and personal use",
      features: [
        "Basic K-pop filters",
        "Standard photo strips",
        "5 downloadable templates",
        "Email support"
      ],
      highlighted: false,
      buttonText: "Get Started"
    },
    {
      name: "Idol Pro",
      price: "$89",
      period: "/month",
      description: "Ideal for fan clubs and larger gatherings",
      features: [
        "All K-pop filters and effects",
        "Unlimited photo strips",
        "20 premium templates",
        "Priority support",
        "Animated GIF exports",
        "Custom branding options"
      ],
      highlighted: true,
      buttonText: "Go Pro"
    },
    {
      name: "Agency Enterprise",
      price: "$199",
      period: "/month",
      description: "For agencies and large K-pop events",
      features: [
        "All Pro features",
        "White-label solution",
        "API access",
        "Dedicated account manager",
        "Custom filter development",
        "Multiple booth support"
      ],
      highlighted: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-4">Choose Your K-pop Photo Plan</h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">Select the perfect plan for your K-pop photo needs, whether you're a casual fan or planning major fan events.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${
                plan.highlighted ? 'ring-2 ring-purple-500 transform scale-105 md:scale-110' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-700 mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-2 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  } text-white rounded-lg font-medium`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KpopPricing;
