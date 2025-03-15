
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Import all page components
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import PicaPicaPhotobooth from "@/pages/PicaPicaPhotobooth";
import Digibooth from "@/pages/Digibooth";
import LittleVintagePhotobooth from "@/pages/LittleVintagePhotobooth";
import WeddingPhotobooth from "@/pages/WeddingPhotobooth";
import FAQ from "@/pages/FAQ";
import Updates from "@/pages/Updates";
import Community from "@/pages/Community";
import HelpCenter from "@/pages/HelpCenter";
import Partners from "@/pages/Partners";
import Tutorials from "@/pages/Tutorials";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import Accessibility from "@/pages/Accessibility";
import Sitemap from "@/pages/Sitemap";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
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
            
            {/* Additional pages */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/community" element={<Community />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
