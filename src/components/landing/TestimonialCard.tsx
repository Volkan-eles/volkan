
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      {[1, 2, 3, 4, 5].map(star => (
        <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
    <p className="text-gray-700 mb-4 italic">&ldquo;{quote}&rdquo;</p>
    <div>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

export default TestimonialCard;
