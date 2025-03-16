
import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, ArrowRight, Search, Menu, X } from 'lucide-react';
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
            <Button variant="ghost" size="sm" className="gap-1.5 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300">
              <LogIn className="h-4 w-4" />
              Log In
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white border-0 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-pink-500/20"
            >
              Try Now <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      )}
      
      {/* Mobile Search Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden mr-1 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300" 
        aria-label="Search"
      >
        <Search className="h-5 w-5 text-gray-700" />
      </Button>
      
      {/* Mobile Menu Button */}
      <Button 
        variant={isMobileMenuOpen ? "secondary" : "ghost"}
        size="icon"
        className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'bg-pink-100 text-pink-600' : 'hover:bg-pink-50 hover:text-pink-600'}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5 text-gray-700" />
        ) : (
          <Menu className="h-5 w-5 text-gray-700" />
        )}
      </Button>
    </div>
  );
};

export default ActionButtons;
