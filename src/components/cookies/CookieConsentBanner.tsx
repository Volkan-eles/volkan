
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-white border-t border-gray-200 shadow-lg animate-slide-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-start mb-4 md:mb-0 pr-4">
          <Cookie className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Cookie Notice</h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-2xl">
              KPop Photobooth uses cookies to enhance your experience and show relevant ads. 
              By clicking "Accept", you consent to our use of cookies. Learn more in our{' '}
              <Link to="/cookie-policy" className="text-purple-600 hover:underline">
                Cookie Policy
              </Link>.
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="outline" size={isMobile ? "sm" : "default"} onClick={handleDecline} className="whitespace-nowrap text-xs sm:text-sm">
            Decline
          </Button>
          <Button onClick={handleAccept} size={isMobile ? "sm" : "default"} className="bg-purple-600 hover:bg-purple-700 whitespace-nowrap text-xs sm:text-sm">
            Accept Cookies
          </Button>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 ml-1 sm:ml-2"
            aria-label="Close"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
