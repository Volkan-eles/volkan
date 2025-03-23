import React from 'react';
import { Star } from 'lucide-react';
const VintageTestimonials = () => {
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
  return <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md border border-amber-100">
      <div className="flex mb-4">
        {Array.from({
        length: rating
      }).map((_, i) => <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />)}
      </div>
      <p className="text-amber-800 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-amber-900 font-serif">{name}</p>
        <p className="text-amber-700 text-sm">{role}</p>
      </div>
    </div>;
};
export default VintageTestimonials;