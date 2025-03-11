
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
  highlightText = "MOST POPULAR"
}: PricingCardProps) => (
  <div className={`${highlight ? 'border-2 border-pink-500 transform scale-105' : 'border border-gray-200'} rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300`}>
    {highlight && (
      <div className="bg-pink-500 text-white py-2 text-center text-sm font-medium">
        {highlightText}
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className="text-gray-500">{period}</span>}
      </div>
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
            {feature.text}
          </li>
        ))}
      </ul>
      <Link to="/dashboard">
        <Button variant={buttonVariant} className={`w-full ${buttonClassName}`}>{buttonText}</Button>
      </Link>
    </div>
  </div>
);

export default PricingCard;
