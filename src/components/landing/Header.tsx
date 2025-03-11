
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Header = () => (
  <header className="w-full px-4 md:px-6 py-4 flex items-center justify-between bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
    <div className="flex items-center space-x-2">
      <svg className="h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 22h14"></path>
        <path d="M5 2h14"></path>
        <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
        <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
      </svg>
      <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">K-pop Frame</h1>
    </div>
    <nav className="hidden md:flex items-center space-x-6">
      <a href="#features" className="text-gray-700 hover:text-pink-500 transition-colors">Features</a>
      <a href="#how-it-works" className="text-gray-700 hover:text-pink-500 transition-colors">How It Works</a>
      <a href="#testimonials" className="text-gray-700 hover:text-pink-500 transition-colors">Testimonials</a>
      <a href="#pricing" className="text-gray-700 hover:text-pink-500 transition-colors">Pricing</a>
    </nav>
    <div className="flex items-center space-x-4">
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

export default Header;
