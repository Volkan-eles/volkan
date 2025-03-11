
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => (
  <section className="py-16 bg-gradient-to-r from-pink-500 to-violet-500 text-white">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your K-pop Memories?</h2>
      <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        Join thousands of K-pop fans already creating amazing photo memories with their favorite idols
      </p>
      <Link to="/dashboard">
        <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
          Start Creating For Free
        </Button>
      </Link>
    </div>
  </section>
);

export default CTASection;
