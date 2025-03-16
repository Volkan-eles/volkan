
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LogIn, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  handleLinkClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  handleLinkClick,
}) => {
  if (!isMobileMenuOpen) return null;

  return (
    <>
      <div 
        className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 px-4 md:hidden z-50 rounded-b-lg border-t border-gray-100 dark:border-gray-800 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-300"
      >
        <nav className="flex flex-col space-y-1">
          <div className="text-xs font-semibold uppercase text-gray-500 mb-1 px-2">Navigation</div>
          <Link to="/" className="flex items-center gap-2 px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          
          <div className="text-xs font-semibold uppercase text-gray-500 mt-3 mb-1 px-2">Photobooths</div>
          <Link to="/pica-pica-booth" className="px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Pica Pica Booth</Link>
          <Link to="/digibooth" className="px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Digibooth</Link>
          <Link to="/kpop-photo-booth" className="px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>K-pop Photo Booth</Link>
          <Link to="/vintage-photobooth" className="px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Vintage Photobooth</Link>
          <Link to="/wedding-photobooth" className="px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Wedding Photobooth</Link>
          
          <div className="text-xs font-semibold uppercase text-gray-500 mt-3 mb-1 px-2">Learn More</div>
          <a href="#how-it-works" className="px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>How It Works</a>
          <a href="#testimonials" className="px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Testimonials</a>
          <a href="#pricing" className="px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Pricing</a>
          
          <div className="text-xs font-semibold uppercase text-gray-500 mt-3 mb-1 px-2">Pages</div>
          <Link to="/about" className="px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>About</Link>
          <Link to="/blog" className="px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Blog</Link>
          <Link to="/contact" className="px-2 py-2.5 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-all duration-150 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Contact</Link>
          
          <div className="border-t border-gray-100 dark:border-gray-800 my-4"></div>
          
          <Link to="/dashboard" className="px-2 py-2.5 rounded-md bg-pink-50 text-pink-600 font-medium flex items-center gap-2 transition-all duration-150 hover:bg-pink-100" onClick={handleLinkClick}>
            <LogIn className="h-4 w-4" />
            <span>Log In</span>
          </Link>
          
          <Link to="/dashboard" className="w-full mt-2" onClick={handleLinkClick}>
            <Button className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 transition-all duration-300">
              Try Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </nav>
      </div>

      {/* Background overlay when mobile menu is open */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200" 
        onClick={handleLinkClick}
        aria-hidden="true"
      />
    </>
  );
};

export default MobileMenu;
