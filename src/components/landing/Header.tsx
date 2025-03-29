
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import HeaderLogo from './header/HeaderLogo';
import DesktopNavigation from './header/DesktopNavigation';
import ActionButtons from './header/ActionButtons';
import MobileMenu from './header/MobileMenu';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`w-full px-4 md:px-8 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <HeaderLogo />
        
        <DesktopNavigation handleLinkClick={handleLinkClick} />
        
        <ActionButtons 
          isMobile={isMobile} 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
        
        <MobileMenu 
          isMobileMenuOpen={isMobileMenuOpen}
          handleLinkClick={handleLinkClick}
        />
      </header>
      <div className={`h-[72px] ${isHomePage ? '' : 'mb-0'}`}></div>
      {!isHomePage && (
        <div className={`py-1 border-b ${isScrolled ? 'bg-white' : 'bg-gray-50'} transition-colors duration-300`}>
          <Breadcrumbs />
        </div>
      )}
    </>
  );
};

export default Header;
