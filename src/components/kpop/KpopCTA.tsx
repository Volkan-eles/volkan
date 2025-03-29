
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const KpopCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Music className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Create Your Pop-Style Photo Memories
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of users who are creating and sharing amazing photo strips with our digital photobooth
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-white/90"
              asChild
            >
              <Link to="/kpop-photo-booth/demo">
                Try Digital Booth Demo
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/pricing">
                See Pricing Options
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-white/80 flex items-center justify-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-2">Rated 5.0 by users worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KpopCTA;
