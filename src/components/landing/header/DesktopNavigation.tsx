
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DesktopNavigationProps {
  handleLinkClick: () => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ handleLinkClick }) => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { 
      title: 'Photobooths', 
      path: '#', 
      isDropdown: true, 
      items: [
        { title: 'Pica Pica Booth', path: '/pica-pica-booth' },
        { title: 'Digibooth', path: '/digibooth' },
        { title: 'K-pop Photo Booth', path: '/kpop-photo-booth' },
        { title: 'Vintage Photobooth', path: '/vintage-photobooth' },
        { title: 'Wedding Photobooth', path: '/wedding-photobooth' },
      ]
    },
    { title: 'About', path: '/about' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navLinks.map((link, index) => (
        <div key={index} className="relative group">
          {link.isDropdown ? (
            <>
              <button className="flex items-center text-gray-700 hover:text-pink-600 transition-colors font-medium">
                {link.title}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top scale-95 group-hover:scale-100">
                {link.items?.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <Link
              to={link.path}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              onClick={handleLinkClick}
            >
              {link.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
