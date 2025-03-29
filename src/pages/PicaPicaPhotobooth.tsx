
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

// Components
import Header from '@/components/landing/Header';
import PhotoStripPreview from '@/components/PhotoStripPreview';
import HeroArea from '@/components/photobooth/HeroArea';
import WebcamSection from '@/components/photobooth/WebcamSection';
import PhotoboothFAQ from '@/components/photobooth/PhotoboothFAQ';
import PhotoboothSEOSection from '@/components/photobooth/PhotoboothSEOSection';
import Footer from '@/components/landing/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

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
  
  const isMobile = useIsMobile();
  
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
        <title>Pica Pica Booth | KPop Photobooth</title>
        <meta name="description" content="Create fun and memorable photo experiences with Pica Pica Booth. Perfect for K-pop fans who want to capture special moments with customized frames and effects." />
        <link rel="canonical" href="https://kpopphotobooth.com/pica-pica-photobooth" />
      </Helmet>
      
      <div className={`min-h-screen flex flex-col ${bgColor}`}>
        <Header />
        
        {/* Hero Area */}
        <HeroArea />
        
        {/* Ad container above main content */}
        <div className="container mx-auto px-4 py-4">
          <div id="ad-container-pica-top" className={`p-4 bg-gray-50 border border-gray-200 rounded-md text-center mb-8 ${isMobile ? 'h-[100px]' : 'h-[120px]'}`}>
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            {/* Ad will be inserted here by Google AdSense */}
          </div>
        </div>
        
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
        
        {/* Ad container below main content */}
        <div className="container mx-auto px-4 py-4">
          <div id="ad-container-pica-bottom" className={`p-4 bg-gray-50 border border-gray-200 rounded-md text-center mb-8 ${isMobile ? 'h-[100px]' : 'h-[120px]'}`}>
            <div className="text-sm text-gray-500 mb-2">Advertisement</div>
            {/* Ad will be inserted here by Google AdSense */}
          </div>
        </div>
        
        {/* SaaS Landing Page Sections */}
        <div id="saas-sections">
          <PhotoboothFAQ />
          
          {/* SEO Content Section */}
          <PhotoboothSEOSection />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default PicaPicaPhotobooth;
