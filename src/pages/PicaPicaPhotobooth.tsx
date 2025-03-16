
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

// Components
import Header from '@/components/landing/Header';
import PhotoStripPreview from '@/components/PhotoStripPreview';
import HeroArea from '@/components/photobooth/HeroArea';
import WebcamSection from '@/components/photobooth/WebcamSection';
import PhotoboothFeatures from '@/components/photobooth/PhotoboothFeatures';
import PhotoboothTestimonials from '@/components/photobooth/PhotoboothTestimonials';
import PhotoboothPricing from '@/components/photobooth/PhotoboothPricing';
import PhotoboothFAQ from '@/components/photobooth/PhotoboothFAQ';
import PhotoboothCTA from '@/components/photobooth/PhotoboothCTA';
import Footer from '@/components/landing/Footer';

// Hooks
import usePhotoboothState from '@/hooks/usePhotoboothState';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';

const PicaPicaPhotobooth = () => {
  // Use our custom hook for state management
  const {
    capturedPhotos,
    isCapturing,
    bgColor,
    selectedFilter,
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
    handleCountdownChange,
    setFrameColor,
    setSelectedSticker
  } = usePhotoboothState();
  
  // Handle downloading the photo strip
  const handleDownloadStrip = async () => {
    if (capturedPhotos.length < 3) {
      toast.error('Please take at least 3 photos first');
      return;
    }
    
    downloadPhotoStrip(setIsDownloading);
  };

  return (
    <>
      <Helmet>
        <title>Pica Pica Booth | Pica Pica Netlify App</title>
        <meta name="description" content="Create fun and memorable photo experiences with Pica Pica Booth. Perfect for K-pop fans who want to capture special moments with customized frames and effects." />
      </Helmet>
      
      <div className={`min-h-screen flex flex-col ${bgColor}`}>
        <Header />
        
        {/* Hero Area */}
        <HeroArea />
        
        {/* Main Photobooth Area */}
        <main id="photobooth-area" className="flex-grow container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main webcam display */}
            <WebcamSection 
              isCapturing={isCapturing}
              showControls={showControls}
              selectedFilter={selectedFilter}
              countdownTime={countdownTime}
              capturedPhotos={capturedPhotos}
              onCapture={handlePhotoCaptured}
              onTakePhoto={handleTakePhoto}
              onRetakePhoto={handleRetakePhoto}
              onFilterChange={handleFilterChange}
              onCountdownChange={handleCountdownChange}
            />
            
            {/* Side panel for photo strip */}
            <div className="lg:w-[40%] bg-white rounded-xl shadow-lg p-6">
              <PhotoStripPreview 
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
        
        {/* SaaS Landing Page Sections */}
        <div id="saas-sections">
          <PhotoboothFeatures />
          <PhotoboothTestimonials />
          <PhotoboothPricing />
          <PhotoboothFAQ />
          <PhotoboothCTA />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default PicaPicaPhotobooth;
