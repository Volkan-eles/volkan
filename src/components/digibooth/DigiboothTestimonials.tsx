import React from 'react';
import { Star } from 'lucide-react';
const DigiboothTestimonials = () => {
  return;
};
interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  quote,
  rating
}) => {
  return <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex mb-4">
        {Array.from({
        length: rating
      }).map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>;
};
export default DigiboothTestimonials;