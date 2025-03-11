
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
            <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Updates</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <Separator className="bg-gray-800 my-8" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <svg className="h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 22h14"></path>
            <path d="M5 2h14"></path>
            <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
            <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
          </svg>
          <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">K-pop Frame</span>
        </div>
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Ideal Photo Vercel App. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
