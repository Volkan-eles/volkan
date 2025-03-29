
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import CookieConsentBanner from "@/components/cookies/CookieConsentBanner";
import { useEffect } from "react";

// Import all page components
import Index from "@/pages/Index";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import PicaPicaPhotobooth from "@/pages/PicaPicaPhotobooth";
import Digibooth from "@/pages/Digibooth";
import LittleVintagePhotobooth from "@/pages/LittleVintagePhotobooth";
import WeddingPhotobooth from "@/pages/WeddingPhotobooth";
import KpopPhotobooth from "@/pages/KpopPhotobooth";
import FAQ from "@/pages/FAQ";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import Sitemap from "@/pages/Sitemap";
import NotFound from "@/pages/NotFound";
import Pricing from "@/pages/Pricing";

const queryClient = new QueryClient();

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            
            {/* Photo booth routes with multiple path support */}
            <Route path="/pica-pica-booth" element={<PicaPicaPhotobooth />} />
            <Route path="/picapica" element={<Navigate to="/pica-pica-booth" replace />} />
            <Route path="/pica-pica" element={<Navigate to="/pica-pica-booth" replace />} />
            
            <Route path="/digibooth" element={<Digibooth />} />
            <Route path="/digi-booth" element={<Navigate to="/digibooth" replace />} />
            
            <Route path="/vintage-photobooth" element={<LittleVintagePhotobooth />} />
            <Route path="/vintage" element={<Navigate to="/vintage-photobooth" replace />} />
            <Route path="/little-vintage" element={<Navigate to="/vintage-photobooth" replace />} />
            
            <Route path="/wedding-photobooth" element={<WeddingPhotobooth />} />
            <Route path="/wedding" element={<Navigate to="/wedding-photobooth" replace />} />
            
            {/* Kpop Photo Booth route */}
            <Route path="/kpop-photo-booth" element={<KpopPhotobooth />} />
            <Route path="/kpop" element={<Navigate to="/kpop-photo-booth" replace />} />
            <Route path="/kpop-booth" element={<Navigate to="/kpop-photo-booth" replace />} />
            
            {/* Additional pages */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsentBanner />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
