import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

// Components
import Header from '@/components/landing/Header';
import KpopHeroArea from '@/components/kpop/KpopHeroArea';
import KpopWebcamSection from '@/components/kpop/KpopWebcamSection';
import KpopPhotoStripPreview from '@/components/kpop/KpopPhotoStripPreview';
import KpopCustomizationPanel from '@/components/kpop/KpopCustomizationPanel';
import Footer from '@/components/landing/Footer';
import KpopFeatures from '@/components/kpop/KpopFeatures';
import KpopTestimonials from '@/components/kpop/KpopTestimonials';
import AnimatedPricingSection from '@/components/landing/AnimatedPricingSection';
import KpopCTA from '@/components/kpop/KpopCTA';
import KpopSEOSection from '@/components/kpop/KpopSEOSection';

// Hooks
import useKpopState from '@/hooks/useKpopState';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';

const KpopPhotoBooth = () => {
  // Use our custom hook for state management
  const {
    capturedPhotos,
    isCapturing,
    bgColor,
    selectedFilter,
    filterAdjustments,
    countdownTime,
    frameColor,
    selectedSticker,
    showControls,
    isDownloading,
    setIsDownloading,
    handlePhotoCaptured,
    handleTakePhoto,
    handleRetakePhoto,
    handleTakeNewPhotos,
    handleFilterChange,
    handleFilterAdjustmentChange,
    handleCountdownChange,
    setFrameColor,
    setSelectedSticker
  } = useKpopState();
  
  // New state for enhanced features
  const [borderStyle, setBorderStyle] = useState<BorderStyle>('solid');
  const [borderWidth, setBorderWidth] = useState<BorderWidth>('medium');
  const [frameTheme, setFrameTheme] = useState<FrameTheme>('default');
  const [showBackgroundRemoval, setShowBackgroundRemoval] = useState(false);
  const [selectedIdols, setSelectedIdols] = useState<Array<{id: string, name: string, src: string}>>([]);
  
  // Handle downloading the photo strip
  const handleDownloadStrip = async () => {
    if (capturedPhotos.length < 3) {
      toast.error('Please take at least 3 photos first');
      return;
    }
    
    downloadPhotoStrip(setIsDownloading);
  };
  
  // Toggle background removal
  const toggleBackgroundRemoval = () => {
    setShowBackgroundRemoval(!showBackgroundRemoval);
    toast.success(showBackgroundRemoval ? 'Background removal disabled' : 'Background removal enabled');
  };

  // Handle idol selection
  const handleSelectIdols = (idols: Array<{id: string, name: string, src: string}>) => {
    setSelectedIdols(idols);
  };

  return (
    <>
      <Helmet>
        <title>K-pop Photo Booth | Ideal Photo Vercel App</title>
        <meta name="description" content="Create stunning virtual photos with your favorite K-pop idols. Our innovative platform combines cutting-edge technology with K-pop, allowing fans to design professional-quality photo memories." />
        <meta name="keywords" content="kpop photo booth, korean photo booth, kpop photocard maker, idol photo booth, k-pop booth, idol photos, kpop filter, virtual kpop photos" />
        <meta property="og:title" content="K-pop Photo Booth | Ideal Photo Vercel App" />
        <meta property="og:description" content="Create stunning virtual photos with your favorite K-pop idols. Perfect for fans, events, parties and gatherings." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="K-pop Photo Booth | Ideal Photo Vercel App" />
        <meta name="twitter:description" content="Create stunning virtual photos with your favorite K-pop idols." />
      </Helmet>
      
      <div className={`min-h-screen flex flex-col ${bgColor}`}>
        <Header />
        
        {/* Hero Area */}
        <KpopHeroArea />
        
        {/* Main Photobooth Area */}
        <main id="photobooth-area" className="flex-grow container mx-auto px-4 py-8">
          {/* Customization Panel - Above the main content */}
          {capturedPhotos.length > 0 && (
            <div className="mb-6">
              <KpopCustomizationPanel
                frameColor={frameColor}
                setFrameColor={setFrameColor}
                sticker={selectedSticker}
                setSticker={setSelectedSticker}
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
                frameTheme={frameTheme}
                setFrameTheme={setFrameTheme}
                showBackgroundRemoval={showBackgroundRemoval}
                toggleBackgroundRemoval={toggleBackgroundRemoval}
              />
            </div>
          )}
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main webcam display */}
            <KpopWebcamSection 
              isCapturing={isCapturing}
              showControls={showControls}
              selectedFilter={selectedFilter}
              filterAdjustments={filterAdjustments}
              countdownTime={countdownTime}
              capturedPhotos={capturedPhotos}
              onCapture={handlePhotoCaptured}
              onTakePhoto={handleTakePhoto}
              onRetakePhoto={handleRetakePhoto}
              onFilterChange={handleFilterChange}
              onAdjustmentChange={handleFilterAdjustmentChange}
              onCountdownChange={handleCountdownChange}
              selectedIdols={selectedIdols}
              onSelectIdols={handleSelectIdols}
            />
            
            {/* Side panel for photo strip */}
            <div className="lg:w-[40%] bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Photo Strip Preview</h2>
              <KpopPhotoStripPreview 
                photos={capturedPhotos} 
                maxDisplay={4} 
                onDownload={handleDownloadStrip} 
                onTakeNewPhotos={handleTakeNewPhotos}
                frameColor={frameColor}
                setFrameColor={setFrameColor}
                sticker={selectedSticker}
                setSticker={setSelectedSticker}
                frameTheme={frameTheme}
                selectedIdols={selectedIdols}
              />
            </div>
          </div>
        </main>
        
        {/* SaaS Landing Page Sections */}
        <KpopFeatures />
        <KpopTestimonials />
        <AnimatedPricingSection />
        <KpopCTA />
        
        {/* SEO Content Section */}
        <KpopSEOSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default KpopPhotoBooth;
