
import React from 'react';
import { Link } from 'react-router-dom';

interface DesktopNavigationProps {
  handleLinkClick: () => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ handleLinkClick }) => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Photobooths', path: '#', isDropdown: true, items: [
      { title: 'Pica Pica Booth', path: '/pica-pica-booth' },
      { title: 'Digibooth', path: '/digibooth' },
      { title: 'K-pop Photo Booth', path: '/kpop-photo-booth' },
      { title: 'Vintage Photobooth', path: '/vintage-photobooth' },
      { title: 'Wedding Photobooth', path: '/wedding-photobooth' },
    ]},
    { title: 'How It Works', path: '#how-it-works' },
    { title: 'Testimonials', path: '#testimonials' },
    { title: 'Pricing', path: '#pricing' },
    { title: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="hidden md:flex space-x-1">
      {navLinks.map((link, index) => (
        <div key={index} className="relative group">
          {link.isDropdown ? (
            <>
              <button className="px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors text-sm font-medium rounded hover:bg-gray-50 flex items-center">
                {link.title}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
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
              className="px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors text-sm font-medium rounded hover:bg-gray-50 relative group"
              onClick={handleLinkClick}
            >
              {link.title}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
