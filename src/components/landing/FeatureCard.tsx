
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 hover:translate-y-[-8px] border border-gray-100 animate-fade-in">
    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 text-white mb-4 transform transition-transform group-hover:scale-110 animate-pulse">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    
    {/* Added subtle indicator */}
    <div className="mt-4 w-10 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full transition-all duration-300 hover:w-full"></div>
  </div>
);

export default FeatureCard;
