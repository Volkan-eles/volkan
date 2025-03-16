
import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LemonSqueezyCheckoutButton from '@/components/payments/LemonSqueezyCheckoutButton';

interface PricingFeature {
  included: boolean;
  text: string;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  buttonClassName?: string;
  highlight?: boolean;
  highlightText?: string;
  paymentEnabled?: boolean;
  lemonSqueezyProductId?: string;
  lemonSqueezyVariantId?: string;
  isPWYW?: boolean;
}

const PricingCard = ({
  title,
  description,
  price,
  period = "/month",
  features,
  buttonText,
  buttonVariant,
  buttonClassName,
  highlight = false,
  highlightText = "MOST POPULAR",
  paymentEnabled = false,
  lemonSqueezyProductId,
  lemonSqueezyVariantId,
  isPWYW = false
}: PricingCardProps) => {
  const [customAmount, setCustomAmount] = useState("5");
  
  return (
    <div className={`${highlight ? 'border-2 border-pink-500 transform scale-105' : 'border border-gray-200'} rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 relative group`}>
      {highlight && (
        <div className="bg-pink-500 text-white py-2 text-center text-sm font-medium">
          {highlightText}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {isPWYW ? (
          <div className="mb-6 relative">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-4xl font-bold">$</span>
              <Input 
                type="number" 
                min="1"
                value={customAmount} 
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-20 text-2xl font-bold p-2 border-b border-gray-300 focus:border-pink-500"
              />
              {period && <span className="text-gray-500">{period}</span>}
            </div>
            <p className="text-sm text-gray-500 italic">Enter any amount you think is fair</p>
            <div className="w-0 h-1 bg-gradient-to-r from-pink-400 to-violet-400 absolute -bottom-2 left-0 group-hover:w-16 transition-all duration-500"></div>
          </div>
        ) : (
          <div className="mb-6 relative">
            <span className="text-4xl font-bold">{price}</span>
            {period && <span className="text-gray-500">{period}</span>}
            <div className="w-0 h-1 bg-gradient-to-r from-pink-400 to-violet-400 absolute -bottom-2 left-0 group-hover:w-16 transition-all duration-500"></div>
          </div>
        )}
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
              {feature.included ? (
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              ) : (
                <svg className="h-5 w-5 text-gray-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
              <span className="group-hover:translate-x-1 transition-transform duration-300">{feature.text}</span>
            </li>
          ))}
        </ul>
        {paymentEnabled && lemonSqueezyProductId && lemonSqueezyVariantId ? (
          isPWYW ? (
            <Link to="/dashboard">
              <Button variant={buttonVariant} className={`w-full ${buttonClassName}`}>
                {`Pay $${customAmount} ${buttonText}`}
              </Button>
            </Link>
          ) : (
            <LemonSqueezyCheckoutButton
              productId={lemonSqueezyProductId}
              variantId={lemonSqueezyVariantId}
              buttonText={buttonText}
              buttonVariant={buttonVariant}
              buttonClassName={buttonClassName}
            />
          )
        ) : (
          <Link to="/dashboard">
            <Button variant={buttonVariant} className={`w-full ${buttonClassName}`}>
              {isPWYW ? `Pay $${customAmount} ${buttonText}` : buttonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
