import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, ArrowRight, Search, Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface ActionButtonsProps {
  isMobile: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}
const ActionButtons: React.FC<ActionButtonsProps> = ({
  isMobile,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  return <div className="flex items-center">
      {!isMobile}
      
      {/* Mobile Search Button */}
      <Button variant="ghost" size="icon" className="md:hidden mr-1 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 relative" aria-label="Search">
        <Search className="h-5 w-5 text-gray-700" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full"></span>
      </Button>
      
      {/* Mobile Menu Button with enhanced animation */}
      <Button variant={isMobileMenuOpen ? "secondary" : "ghost"} size="icon" className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'bg-pink-100 text-pink-600 rotate-90' : 'hover:bg-pink-50 hover:text-pink-600'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen}>
        <div className="relative w-5 h-5">
          {isMobileMenuOpen ? <X className="h-5 w-5 text-pink-600 absolute top-0 left-0 transition-all duration-300" /> : <Menu className="h-5 w-5 text-gray-700 absolute top-0 left-0 transition-all duration-300" />}
        </div>
      </Button>
    </div>;
};
export default ActionButtons;