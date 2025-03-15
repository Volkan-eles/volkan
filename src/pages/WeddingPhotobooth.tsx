import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

// Components
import Header from '@/components/landing/Header';
import WeddingHeroArea from '@/components/wedding/WeddingHeroArea';
import WeddingWebcamSection from '@/components/wedding/WeddingWebcamSection';
import WeddingPhotoStripPreview from '@/components/wedding/WeddingPhotoStripPreview';
import WeddingCustomizationPanel from '@/components/wedding/WeddingCustomizationPanel';
import Footer from '@/components/landing/Footer';
import WeddingFeatures from '@/components/wedding/WeddingFeatures';
import WeddingTestimonials from '@/components/wedding/WeddingTestimonials';
import WeddingCTA from '@/components/wedding/WeddingCTA';

// Hooks
import useVintageState from '@/hooks/useVintageState';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';

const WeddingPhotobooth = () => {
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
  } = useVintageState();
  
  // Border style state
  const [borderStyle, setBorderStyle] = useState<BorderStyle>('solid');
  const [borderWidth, setBorderWidth] = useState<BorderWidth>('thin');
  const [frameTheme, setFrameTheme] = useState<FrameTheme>('wedding');
  const [showBackgroundRemoval, setShowBackgroundRemoval] = useState(false);
  
  // Handle downloading the photo strip
  const handleDownloadStrip = async () => {
    if (capturedPhotos.length < 3) {
      toast.error('Please take at least 3 photos first');
      return;
    }
    
    // Pass true for isWedding parameter to use wedding layout
    downloadPhotoStrip(setIsDownloading, true);
  };
  
  // Toggle background removal
  const toggleBackgroundRemoval = () => {
    setShowBackgroundRemoval(!showBackgroundRemoval);
    toast.success(showBackgroundRemoval ? 'Background removal disabled' : 'Background removal enabled');
  };

  return (
    <>
      <Helmet>
        <title>Wedding Photobooth | Pica Pica Netlify App</title>
        <meta name="description" content="Create beautiful wedding photo memories with our elegant Wedding Photobooth. Perfect for weddings, engagement parties, and rehearsal dinners." />
        <meta name="keywords" content="wedding photo booth, wedding photography, bridal photo booth, wedding memories, custom wedding photos, wedding guest entertainment" />
        <meta property="og:title" content="Wedding Photobooth | Create Beautiful Wedding Memories" />
        <meta property="og:description" content="Create beautiful wedding photo memories with our elegant Wedding Photobooth. Perfect for weddings, engagement parties, and rehearsal dinners." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wedding Photobooth" />
        <meta name="twitter:description" content="Create beautiful wedding photo memories with our elegant photobooth." />
      </Helmet>
      
      <div className={`min-h-screen flex flex-col ${bgColor}`}>
        <Header />
        
        {/* Hero Area */}
        <WeddingHeroArea />
        
        {/* Main Photobooth Area */}
        <main id="photobooth-area" className="flex-grow container mx-auto px-4 py-8">
          {/* Customization Panel - Above the main content */}
          {capturedPhotos.length > 0 && (
            <div className="mb-6">
              <WeddingCustomizationPanel
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
            <WeddingWebcamSection 
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
            />
            
            {/* Side panel for photo strip */}
            <div className="lg:w-[40%] bg-white/90 rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-serif font-light text-center text-gray-800 mb-4">Wedding Photo Layout</h2>
              <WeddingPhotoStripPreview 
                photos={capturedPhotos} 
                maxDisplay={4} 
                onDownload={handleDownloadStrip} 
                onTakeNewPhotos={handleTakeNewPhotos}
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
              />
            </div>
          </div>
        </main>
        
        {/* SaaS Landing Page Sections */}
        <WeddingFeatures />
        <WeddingTestimonials />
        <WeddingCTA />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default WeddingPhotobooth;
