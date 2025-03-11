
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full px-4 md:px-6 py-4 flex items-center justify-between backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center space-x-2">
        <svg className="h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 22h14"></path>
          <path d="M5 2h14"></path>
          <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
          <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
        </svg>
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          K-pop Frame
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#features" className="text-gray-700 hover:text-pink-500 transition-colors">Features</a>
        <a href="#how-it-works" className="text-gray-700 hover:text-pink-500 transition-colors">How It Works</a>
        <a href="#testimonials" className="text-gray-700 hover:text-pink-500 transition-colors">Testimonials</a>
        <a href="#pricing" className="text-gray-700 hover:text-pink-500 transition-colors">Pricing</a>
        <Link to="/about" className="text-gray-700 hover:text-pink-500 transition-colors">About</Link>
        <Link to="/blog" className="text-gray-700 hover:text-pink-500 transition-colors">Blog</Link>
        <Link to="/contact" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</Link>
      </nav>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 md:hidden z-50">
          <nav className="flex flex-col space-y-3">
            <a href="#features" className="text-gray-700 hover:text-pink-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-pink-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-pink-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-pink-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <Link to="/about" className="text-gray-700 hover:text-pink-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/blog" className="text-gray-700 hover:text-pink-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link to="/dashboard" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 mt-2">
                Try Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </nav>
        </div>
      )}
      
      {/* Action Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/dashboard">
          <Button variant="outline" className="hidden md:inline-flex">Log In</Button>
        </Link>
        <Link to="/dashboard">
          <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
            Try Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
