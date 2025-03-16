
import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      {badge && (
        <div className="flex items-center justify-center mb-4">
          <span className="bg-purple-100 text-purple-600 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Sparkles className="h-3.5 w-3.5 mr-1" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">{title}</h2>
      {description && <p className="text-lg text-gray-600">{description}</p>}
    </div>
  );
};

export default SectionHeader;
