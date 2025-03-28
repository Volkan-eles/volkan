
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DigiboothCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Amazing Digital Photos?</h2>
          <p className="text-xl opacity-90 mb-8">
            Start making memorable digital photo booth experiences today with Digibooth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/digibooth/demo" className="flex items-center">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/pricing">View Plans & Pricing</Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold">40K+</div>
              <div className="opacity-80">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">200K+</div>
              <div className="opacity-80">Photos Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">10+</div>
              <div className="opacity-80">Custom Themes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">4.8/5</div>
              <div className="opacity-80">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigiboothCTA;
