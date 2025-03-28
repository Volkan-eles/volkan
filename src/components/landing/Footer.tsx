
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Camera, Clock, Heart, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#111827] text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Features Section */}
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-pink-900/30 rounded-full flex items-center justify-center mb-4">
              <Camera className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="font-medium text-xl text-white mb-2">High Quality</h3>
            <p className="text-gray-400">Professional photo quality</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="font-medium text-xl text-white mb-2">Instant</h3>
            <p className="text-gray-400">Get your photos immediately</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="font-medium text-xl text-white mb-2">Easy to Use</h3>
            <p className="text-gray-400">Simple and intuitive design</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="font-medium text-xl text-white mb-2">Secure</h3>
            <p className="text-gray-400">Your photos stay private</p>
          </div>
        </div>
        
        <Separator className="bg-gray-800 mb-12" />
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 22h14"></path>
                <path d="M5 2h14"></path>
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
              </svg>
              <span className="text-xl font-bold">KPop Photobooth</span>
            </div>
            <p className="text-gray-400 mb-4">
              Create and share virtual photo memories with our digital photo booth platform.
            </p>
            <div className="border-l-4 border-pink-500 pl-4 text-gray-400 italic text-sm">
              KPop Photobooth is not affiliated with any official K-pop artists, labels, or entertainment companies. This is a fan-created digital photo experience.
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Photobooths</h3>
            <ul className="space-y-2">
              <li><Link to="/pica-pica-booth" className="text-gray-400 hover:text-white transition-colors">Pica Pica Booth</Link></li>
              <li><Link to="/digibooth" className="text-gray-400 hover:text-white transition-colors">Digibooth</Link></li>
              <li><Link to="/kpop-photo-booth" className="text-gray-400 hover:text-white transition-colors">K-pop Photo Booth</Link></li>
              <li><Link to="/vintage-photobooth" className="text-gray-400 hover:text-white transition-colors">Vintage Photobooth</Link></li>
              <li><Link to="/wedding-photobooth" className="text-gray-400 hover:text-white transition-colors">Wedding Photobooth</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <Separator className="bg-gray-800" />
      
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div>
          &copy; {currentYear} KPop Photobooth. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
          <span>|</span>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
          <span>|</span>
          <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <span>|</span>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
