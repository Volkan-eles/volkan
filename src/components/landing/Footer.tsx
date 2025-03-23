import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight, Camera, Clock, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-4 md:px-6">
        {/* Pre-Footer Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-b border-gray-800">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-3">
              <Camera className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="font-medium text-white mb-1">High Quality</h3>
            <p className="text-sm text-gray-400">Professional photo quality</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
              <Clock className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="font-medium text-white mb-1">Instant</h3>
            <p className="text-sm text-gray-400">Get your photos immediately</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
              <Heart className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="font-medium text-white mb-1">Fan-friendly</h3>
            <p className="text-sm text-gray-400">K-pop themed templates</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
              <Shield className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-medium text-white mb-1">Secure</h3>
            <p className="text-sm text-gray-400">Your photos stay private</p>
          </div>
        </div>
      
        {/* Newsletter Section */}
        
      
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 22h14"></path>
                <path d="M5 2h14"></path>
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
              </svg>
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">K-pop Frame</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              The ultimate platform to create and share virtual photo memories with your favorite K-pop idols.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
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
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/help-center" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">Tutorials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        <Separator className="bg-gray-800 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} K-pop Frame. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            <span>|</span>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <span>|</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <span>|</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;