
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BoothCardProps {
  name: string;
  description: string;
  imageSrc?: string;
  gradientFrom: string;
  gradientTo: string;
  link: string;
  isComingSoon?: boolean;
}

const BoothCard = ({ 
  name, 
  description, 
  imageSrc, 
  gradientFrom, 
  gradientTo, 
  link, 
  isComingSoon = false 
}: BoothCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-8px]">
      <div className={`aspect-video bg-gradient-to-r from-${gradientFrom} to-${gradientTo} relative overflow-hidden`}>
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={`${name} example`} 
            className="w-full h-full object-cover opacity-75 group-hover:scale-110 transition-transform duration-500" 
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-r from-${gradientFrom} to-${gradientTo} opacity-75`}></div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white tracking-wider drop-shadow-md transform group-hover:scale-110 transition-transform duration-300">{name}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={isComingSoon ? "/" : link}>
          <Button variant="outline" size="sm" className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
            {isComingSoon ? "Coming Soon" : "Try Now"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BoothCard;
