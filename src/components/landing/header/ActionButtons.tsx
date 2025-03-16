
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
  setIsMobileMenuOpen,
}) => {
  return (
    <div className="flex items-center">
      {!isMobile && (
        <div className="hidden md:flex items-center space-x-3 ml-4">
          <Link to="/dashboard">
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-1.5 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 relative group"
            >
              <LogIn className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">
                Log In
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white border-0 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-pink-500/20 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                Try Now <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
          
          {/* New component: Wishlist button */}
          <Button 
            variant="outline" 
            size="icon"
            className="border-gray-200 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 group relative"
            aria-label="Wishlist"
          >
            <Heart className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full text-white text-[10px] flex items-center justify-center">
              2
            </span>
          </Button>
        </div>
      )}
      
      {/* Mobile Search Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden mr-1 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 relative" 
        aria-label="Search"
      >
        <Search className="h-5 w-5 text-gray-700" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full"></span>
      </Button>
      
      {/* Mobile Menu Button with enhanced animation */}
      <Button 
        variant={isMobileMenuOpen ? "secondary" : "ghost"}
        size="icon"
        className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'bg-pink-100 text-pink-600 rotate-90' : 'hover:bg-pink-50 hover:text-pink-600'
        }`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <div className="relative w-5 h-5">
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-pink-600 absolute top-0 left-0 transition-all duration-300" />
          ) : (
            <Menu className="h-5 w-5 text-gray-700 absolute top-0 left-0 transition-all duration-300" />
          )}
        </div>
      </Button>
    </div>
  );
};

export default ActionButtons;
