
import React from 'react';
import { Menu, X } from 'lucide-react';
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
  return (
    <div className="flex items-center">
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
