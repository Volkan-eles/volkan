
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
  return (
    <div className="flex items-center gap-3">
      {!isMobile && (
        <Link to="/kpop-photo-booth">
          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:shadow-md"
          >
            Try It Now
          </Button>
        </Link>
      )}
      
      {/* Mobile Menu Button */}
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      )}
    </div>
  );
};

export default ActionButtons;
