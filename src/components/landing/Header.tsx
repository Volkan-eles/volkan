
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-pink-500/50 to-violet-500/50 p-6 no-underline outline-none focus:shadow-md"
                          href="#features"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Create Beautiful Photo Memories
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Express your creativity with our premium photo booth experiences
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link
                        to="/pica-pica-booth"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={handleLinkClick}
                      >
                        <div className="text-sm font-medium leading-none">Pica Pica Booth</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Vibrant colorful photo strips with stickers
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/digibooth"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={handleLinkClick}
                      >
                        <div className="text-sm font-medium leading-none">Digibooth</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Modern digital photo experience with filters
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/kpop-photo-booth"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={handleLinkClick}
                      >
                        <div className="text-sm font-medium leading-none">K-pop Photo Booth</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Create memories with your favorite K-pop idols
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/vintage-photobooth"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={handleLinkClick}
                      >
                        <div className="text-sm font-medium leading-none">Vintage Photobooth</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Nostalgic retro-styled photo experiences
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/wedding-photobooth"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={handleLinkClick}
                      >
                        <div className="text-sm font-medium leading-none">Wedding Photobooth</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Elegant layouts for wedding memories
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#how-it-works" className="px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors">How It Works</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#testimonials" className="px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors">Testimonials</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#pricing" className="px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors">Pricing</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <Link
                        to="/about"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={handleLinkClick}
                      >
                        <div className="text-sm font-medium leading-none">About</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={handleLinkClick}
                      >
                        <div className="text-sm font-medium leading-none">Blog</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={handleLinkClick}
                      >
                        <div className="text-sm font-medium leading-none">Contact</div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
            
            <div className="text-xs font-semibold uppercase text-gray-500 mt-3 mb-1 px-2">Photobooths</div>
            <Link to="/pica-pica-booth" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Pica Pica Booth</Link>
            <Link to="/digibooth" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Digibooth</Link>
            <Link to="/kpop-photo-booth" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>K-pop Photo Booth</Link>
            <Link to="/vintage-photobooth" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Vintage Photobooth</Link>
            <Link to="/wedding-photobooth" className="px-2 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" onClick={handleLinkClick}>Wedding Photobooth</Link>
            
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
