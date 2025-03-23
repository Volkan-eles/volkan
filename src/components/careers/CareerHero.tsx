import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
interface CareerHeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
const CareerHero: React.FC<CareerHeroProps> = ({
  searchTerm,
  setSearchTerm
}) => {
  return <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl opacity-90 mb-8">Soooon!!</p>
          
          <div className="relative max-w-md mx-auto">
            <Input type="text" placeholder="Search positions..." className="pl-10 bg-white/90 text-gray-800 border-0 shadow-lg" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          </div>
        </div>
      </div>
    </section>;
};
export default CareerHero;