
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X, Home, Search, LogIn, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`w-full px-4 md:px-6 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center space-x-2">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 22h14"></path>
            <path d="M5 2h14"></path>
            <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
            <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
          </svg>
        </div>
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">K-pop Frame</span>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        {!isMobile && (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors">
                Features <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="#features" className="w-full">Photo Frames</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#features" className="w-full">K-pop Templates</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#features" className="w-full">Custom Stickers</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#how-it-works" className="px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors">How It Works</a>
            <a href="#testimonials" className="px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors">Testimonials</a>
            <a href="#pricing" className="px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors">Pricing</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/about" className="w-full">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/contact" className="w-full">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </nav>
      
      {/* Action Buttons */}
      <div className="flex items-center">
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-3 ml-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="gap-1.5">
                <LogIn className="h-4 w-4" />
                Log In
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="sm" className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white border-0">
                Try Now <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        )}
        
        {/* Mobile Search Button */}
        <Button variant="ghost" size="icon" className="md:hidden mr-1" aria-label="Search">
          <Search className="h-5 w-5 text-gray-700" />
        </Button>
        
        {/* Mobile Menu Button */}
        <Button 
          variant={isMobileMenuOpen ? "secondary" : "ghost"}
          size="icon"
          className="md:hidden"
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
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 px-4 md:hidden z-50 rounded-b-lg border-t border-gray-100 dark:border-gray-800 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            <div className="text-xs font-semibold uppercase text-gray-500 mb-1 px-2">Navigation</div>
            <Link to="/" className="flex items-center gap-2 px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <div className="text-xs font-semibold uppercase text-gray-500 mt-3 mb-1 px-2">Features</div>
            <a href="#features" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Photo Frames</a>
            <a href="#features" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>K-pop Templates</a>
            <a href="#features" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Custom Stickers</a>
            
            <div className="text-xs font-semibold uppercase text-gray-500 mt-3 mb-1 px-2">Learn More</div>
            <a href="#how-it-works" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>How It Works</a>
            <a href="#testimonials" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Testimonials</a>
            <a href="#pricing" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Pricing</a>
            
            <div className="text-xs font-semibold uppercase text-gray-500 mt-3 mb-1 px-2">Pages</div>
            <Link to="/about" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>About</Link>
            <Link to="/blog" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Blog</Link>
            <Link to="/contact" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Contact</Link>
            
            <div className="border-t border-gray-100 dark:border-gray-800 my-4"></div>
            
            <Link to="/dashboard" className="px-2 py-2.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium flex items-center gap-2" onClick={handleLinkClick}>
              <LogIn className="h-4 w-4" />
              <span>Log In</span>
            </Link>
            
            <Link to="/dashboard" className="w-full mt-2" onClick={handleLinkClick}>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
                Try Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </nav>
        </div>
      )}
      
      {/* Background overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
