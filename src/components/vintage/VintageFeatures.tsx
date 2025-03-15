
import React from 'react';
import { Camera, Film, Download, Image, Clock, Sparkles, Settings, Palette, Album, Star } from 'lucide-react';

const VintageFeatures = () => {
  return (
    <section id="features" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-3 font-serif">Vintage Photo Booth Features</h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Creating authentic retro photography experiences for your special moments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Camera className="h-8 w-8 text-amber-600" />}
            title="Authentic Vintage Look"
            description="Capture photos with the charm and character of classic film photography"
          />
          
          <FeatureCard
            icon={<Film className="h-8 w-8 text-amber-600" />}
            title="Retro Filters"
            description="Apply classic sepia, black & white, and vintage color filters"
          />
          
          <FeatureCard
            icon={<Settings className="h-8 w-8 text-amber-600" />}
            title="Customizable Frames"
            description="Choose from various vintage-inspired frames and borders"
          />
          
          <FeatureCard
            icon={<Download className="h-8 w-8 text-amber-600" />}
            title="Instant Sharing"
            description="Download and share your vintage photos instantly"
          />
          
          <FeatureCard
            icon={<Album className="h-8 w-8 text-amber-600" />}
            title="Photo Albums"
            description="Create digital photo albums with your vintage captures"
          />
          
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-amber-600" />}
            title="Era-Authentic Props"
            description="Digital props from different decades to enhance your photos"
          />
          
          <FeatureCard
            icon={<Image className="h-8 w-8 text-amber-600" />}
            title="Classic Layouts"
            description="Multiple photo strip layouts inspired by photo booths of the past"
          />
          
          <FeatureCard
            icon={<Palette className="h-8 w-8 text-amber-600" />}
            title="Aged Paper Effects"
            description="Add texture and aging effects for an authentic vintage feel"
          />
          
          <FeatureCard
            icon={<Star className="h-8 w-8 text-amber-600" />}
            title="Nostalgic Experience"
            description="Recreate the magic of vintage photography with modern technology"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-amber-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-amber-800 font-serif">{title}</h3>
      <p className="text-amber-700">{description}</p>
    </div>
  );
};

export default VintageFeatures;
