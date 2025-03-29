
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

// Components
import Header from '@/components/landing/Header';
import DigiboothHeroArea from '@/components/digibooth/DigiboothHeroArea';
import DigiboothWebcamSection from '@/components/digibooth/DigiboothWebcamSection';
import DigiboothPhotoStripPreview from '@/components/digibooth/DigiboothPhotoStripPreview';
import DigiboothCustomizationPanel from '@/components/digibooth/DigiboothCustomizationPanel';
import Footer from '@/components/landing/Footer';
import DigiboothSEOSection from '@/components/digibooth/DigiboothSEOSection';

// Hooks
import useDigiboothState from '@/hooks/useDigiboothState';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import { useIsMobile } from '@/hooks/use-mobile';

const Digibooth = () => {
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
  } = useDigiboothState();
  
  const isMobile = useIsMobile();
  
  // New state for enhanced features
  const [borderStyle, setBorderStyle] = useState<BorderStyle>('solid');
  const [borderWidth, setBorderWidth] = useState<BorderWidth>('medium');
  const [frameTheme, setFrameTheme] = useState<FrameTheme>('default');
  const [showBackgroundRemoval, setShowBackgroundRemoval] = useState(false);
  
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

  return (
    <>
      <Helmet>
        <title>Digibooth Photobooth | KPop Photobooth</title>
        <meta name="description" content="Create stunning digital photo booth experiences with Digibooth. Perfect for events, weddings, parties, and corporate gatherings. Customize frames, add effects, and share memorable moments instantly." />
        <meta name="keywords" content="digital photo booth, digibooth, photo booth software, event photo booth, photo strip creator, custom photo frames" />
        <meta property="og:title" content="Digibooth Photobooth | KPop Photobooth" />
        <meta property="og:description" content="Create stunning digital photo booth experiences with Digibooth. Perfect for events, weddings, parties and corporate gatherings." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digibooth Photobooth | KPop Photobooth" />
        <meta name="twitter:description" content="Create stunning digital photo booth experiences with Digibooth." />
        <link rel="canonical" href="https://kpopphotobooth.com/digibooth" />
      </Helmet>
      
      <div className={`min-h-screen flex flex-col ${bgColor}`}>
        <Header />
        
        {/* Hero Area */}
        <DigiboothHeroArea />
        
        {/* Ad container above main content */}
        <div className="container mx-auto px-4 py-4">
          <div id="ad-container-digibooth-top" className={`p-4 bg-gray-50 border border-gray-200 rounded-md text-center mb-8 ${isMobile ? 'h-[100px]' : 'h-[120px]'}`}>
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            {/* Ad will be inserted here by Google AdSense */}
          </div>
        </div>
        
        {/* Main Photobooth Area */}
        <main id="photobooth-area" className="flex-grow container mx-auto px-4 py-8">
          {/* Customization Panel - Above the main content */}
          {capturedPhotos.length > 0 && (
            <div className="mb-6">
              <DigiboothCustomizationPanel
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
            <DigiboothWebcamSection 
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
            <div className="lg:w-[40%] bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Photo Strip Preview</h2>
              <DigiboothPhotoStripPreview 
                photos={capturedPhotos} 
                maxDisplay={4} 
                onDownload={handleDownloadStrip} 
                onTakeNewPhotos={handleTakeNewPhotos}
                frameColor={frameColor}
                setFrameColor={setFrameColor}
                sticker={selectedSticker}
                setSticker={setSelectedSticker}
                frameTheme={frameTheme}
              />
            </div>
          </div>
        </main>
        
        {/* Ad container below main content */}
        <div className="container mx-auto px-4 py-4">
          <div id="ad-container-digibooth-bottom" className={`p-4 bg-gray-50 border border-gray-200 rounded-md text-center mb-8 ${isMobile ? 'h-[100px]' : 'h-[120px]'}`}>
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            {/* Ad will be inserted here by Google AdSense */}
          </div>
        </div>
        
        {/* SEO Content Section */}
        <DigiboothSEOSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Digibooth;
