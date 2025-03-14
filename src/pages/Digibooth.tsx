
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

// Hooks
import useDigiboothState from '@/hooks/useDigiboothState';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';

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
        <title>Digibooth Dietherdave - Digi Photo Booth | Pica Pica Netlify App</title>
        <meta name="description" content="Create stunning digital photo booth experiences with Digibooth Dietherdave. Perfect for events, weddings, parties, and corporate gatherings. Customize frames, add effects, and share memorable moments instantly." />
        <meta name="keywords" content="digital photo booth, digi booth, photo booth software, event photo booth, photo strip creator, custom photo frames, Dietherdave photo booth" />
        <meta property="og:title" content="Digibooth Dietherdave - Digi Photo Booth | Create Memorable Photo Experiences" />
        <meta property="og:description" content="Create stunning digital photo booth experiences with Digibooth. Perfect for events, weddings, parties and corporate gatherings." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digibooth Dietherdave - Digi Photo Booth" />
        <meta name="twitter:description" content="Create stunning digital photo booth experiences with Digibooth Dietherdave." />
      </Helmet>
      
      <div className={`min-h-screen flex flex-col ${bgColor}`}>
        <Header />
        
        {/* Hero Area */}
        <DigiboothHeroArea />
        
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
              />
            </div>
          </div>
        </main>
        
        {/* Footer from landing page, replacing DigiboothSaasFooter */}
        <Footer />
      </div>
    </>
  );
};

export default Digibooth;
