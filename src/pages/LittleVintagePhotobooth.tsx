
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

// Components
import Header from '@/components/landing/Header';
import VintageHeroArea from '@/components/vintage/VintageHeroArea';
import VintageWebcamSection from '@/components/vintage/VintageWebcamSection';
import VintagePhotoStripPreview from '@/components/vintage/VintagePhotoStripPreview';
import VintageCustomizationPanel from '@/components/vintage/VintageCustomizationPanel';
import Footer from '@/components/landing/Footer';
import VintageSEOSection from '@/components/vintage/VintageSEOSection';
import { useIsMobile } from '@/hooks/use-mobile';

// Hooks
import useVintageState from '@/hooks/useVintageState';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';

const LittleVintagePhotobooth = () => {
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
  
  const isMobile = useIsMobile();
  
  // Border style state
  const [borderStyle, setBorderStyle] = useState<BorderStyle>('solid');
  const [borderWidth, setBorderWidth] = useState<BorderWidth>('medium');
  const [frameTheme, setFrameTheme] = useState<FrameTheme>('vintage');
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
        <title>Little Vintage Photobooth App | KPop Photobooth</title>
        <meta name="description" content="Create nostalgic vintage photo booth experiences with Little Vintage Photobooth App. Perfect for weddings, parties, and events seeking a classic retro feel with modern digital convenience." />
        <meta name="keywords" content="vintage photo booth, retro photo booth, nostalgic photos, old-school photography, sepia filters, classic photo frames, vintage photography" />
        <meta property="og:title" content="Little Vintage Photobooth App | KPop Photobooth" />
        <meta property="og:description" content="Create nostalgic vintage photo booth experiences with Little Vintage Photobooth App. Perfect for weddings, parties and events seeking a classic retro feel." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Little Vintage Photobooth App" />
        <meta name="twitter:description" content="Create nostalgic vintage photo booth experiences with our retro-themed photobooth." />
        <link rel="canonical" href="https://kpopphotobooth.com/little-vintage-photobooth" />
      </Helmet>
      
      <div className={`min-h-screen flex flex-col ${bgColor}`}>
        <Header />
        
        {/* Hero Area */}
        <VintageHeroArea />
        
        {/* Ad container above main content */}
        <div className="container mx-auto px-4 py-4">
          <div id="ad-container-vintage-top" className={`p-4 bg-gray-50 border border-gray-200 rounded-md text-center mb-8 ${isMobile ? 'h-[100px]' : 'h-[120px]'}`}>
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            {/* Ad will be inserted here by Google AdSense */}
          </div>
        </div>
        
        {/* Main Photobooth Area */}
        <main id="photobooth-area" className="flex-grow container mx-auto px-4 py-8">
          {/* Customization Panel - Above the main content */}
          {capturedPhotos.length > 0 && (
            <div className="mb-6">
              <VintageCustomizationPanel
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
            <VintageWebcamSection 
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
            <div className="lg:w-[40%] bg-white/90 rounded-xl shadow-lg p-6 border border-amber-200">
              <h2 className="text-2xl font-bold text-center text-amber-800 mb-4">Photo Strip Preview</h2>
              <VintagePhotoStripPreview 
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
        
        {/* Ad container below main content */}
        <div className="container mx-auto px-4 py-4">
          <div id="ad-container-vintage-bottom" className={`p-4 bg-gray-50 border border-gray-200 rounded-md text-center mb-8 ${isMobile ? 'h-[100px]' : 'h-[120px]'}`}>
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            {/* Ad will be inserted here by Google AdSense */}
          </div>
        </div>
        
        {/* SEO Content Section */}
        <VintageSEOSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default LittleVintagePhotobooth;
