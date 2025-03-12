
import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Components
import Header from '@/components/landing/Header';
import WebcamCapture from '@/components/WebcamCapture';
import PhotoStripPreview from '@/components/PhotoStripPreview';
import HeroArea from '@/components/photobooth/HeroArea';
import PhotoBoothControls from '@/components/photobooth/PhotoBoothControls';
import CountdownSelector from '@/components/photobooth/CountdownSelector';
import FilterSelector from '@/components/photobooth/FilterSelector';
import { FilterType } from '@/components/photobooth/FilterSelector';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';

const PicaPicaPhotobooth = () => {
  // State management
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [bgColor, setBgColor] = useState<string>('bg-gradient-to-r from-pink-100 to-purple-100');
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('none');
  const [countdownTime, setCountdownTime] = useState<number>(3);
  const [frameColor, setFrameColor] = useState<FrameColorType>('white');
  const [selectedSticker, setSelectedSticker] = useState<StickerType>('none');
  const [showControls, setShowControls] = useState<boolean>(true);
  
  // Refs
  const overlayImageRef = useRef<HTMLImageElement | null>(null);
  const photoStripRef = useRef<HTMLDivElement>(null);
  
  // Effect to load overlay image
  useEffect(() => {
    // Load any sticker images if needed
  }, []);

  // Handle photo capture
  const handlePhotoCaptured = (photoSrc: string) => {
    setCapturedPhotos(prev => [...prev, photoSrc]);
    setIsCapturing(false);
    toast.success('Photo captured!');
    
    // If we've taken enough photos, hide controls and show preview
    if (capturedPhotos.length >= 3) {
      setShowControls(false);
    }
  };

  // Handle starting photo capture
  const handleTakePhoto = () => {
    setIsCapturing(true);
  };

  // Handle retaking the last photo
  const handleRetakePhoto = () => {
    if (capturedPhotos.length > 0) {
      const newPhotos = [...capturedPhotos];
      newPhotos.pop();
      setCapturedPhotos(newPhotos);
      toast.info('Last photo removed. Take another!');
    }
  };

  // Handle clearing all photos to restart
  const handleTakeNewPhotos = () => {
    setCapturedPhotos([]);
    setShowControls(true);
    toast.info('Starting a new photo session!');
  };

  // Handle filter change
  const handleFilterChange = (filter: FilterType) => {
    setSelectedFilter(filter);
    toast.success(`${filter === 'none' ? 'No filter' : filter} selected!`);
  };

  // Handle countdown time change
  const handleCountdownChange = (time: number) => {
    setCountdownTime(time);
    toast.success(`Countdown set to ${time} seconds`);
  };

  // Handle downloading the photo strip
  const handleDownloadStrip = async () => {
    if (!photoStripRef.current || capturedPhotos.length < 3) return;
    
    try {
      toast.loading('Creating your photo strip...');
      
      // Improved high-quality rendering
      const canvas = await html2canvas(photoStripRef.current, {
        backgroundColor: null,
        scale: 4, // Higher scale for better quality
        useCORS: true,
        logging: false,
        onclone: (document, clone) => {
          // Find the cloned element
          const clonedStrip = clone.querySelector('#photo-strip-container');
          if (clonedStrip) {
            // Make any adjustments to the clone before rendering
            Array.from(clonedStrip.querySelectorAll('img')).forEach(img => {
              img.crossOrigin = 'anonymous';
              img.style.imageRendering = 'high-quality';
            });
          }
        }
      });
      
      const dataUrl = canvas.toDataURL('image/png', 1.0); // Set quality to maximum
      
      const link = document.createElement('a');
      link.download = `pica-pica-photostrip-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      
      toast.dismiss();
      toast.success('Photo strip downloaded!');
    } catch (error) {
      console.error('Error generating photo strip:', error);
      toast.dismiss();
      toast.error('Failed to download photo strip. Please try again.');
    }
  };

  // Apply filters to the webcam
  const getFilterStyle = () => {
    switch(selectedFilter) {
      case 'bw': return 'grayscale(100%)';
      case 'sepia': return 'sepia(100%)';
      case 'vintage': return 'sepia(50%) contrast(80%) brightness(90%)';
      case 'soft': return 'contrast(90%) brightness(110%) saturate(85%)';
      case 'noir': return 'grayscale(100%) contrast(120%) brightness(90%)';
      case 'vivid': return 'saturate(150%) contrast(110%)';
      default: return 'none';
    }
  };

  return (
    <>
      <Helmet>
        <title>Pica Pica Photobooth | Pica Pica Netlify App</title>
        <meta name="description" content="Create fun and memorable photo experiences with Pica Pica Photobooth. Perfect for K-pop fans who want to capture special moments with customized frames and effects." />
      </Helmet>
      
      <div className={`min-h-screen flex flex-col ${bgColor}`}>
        <Header />
        
        {/* Hero Area */}
        <HeroArea />
        
        {/* Main Photobooth Area */}
        <main id="photobooth-area" className="flex-grow container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main webcam display */}
            <div className="flex-grow lg:w-[60%] bg-white rounded-xl shadow-lg p-6 overflow-hidden">
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                <div style={{ filter: getFilterStyle() }} className="w-full h-full">
                  <WebcamCapture 
                    onCapture={handlePhotoCaptured} 
                    isCapturing={isCapturing} 
                    overlayImage={overlayImageRef.current} 
                  />
                </div>
              </div>
              
              {showControls && (
                <>
                  <CountdownSelector 
                    value={countdownTime}
                    onChange={handleCountdownChange}
                  />
                  
                  <div className="flex justify-center">
                    <Button 
                      onClick={handleTakePhoto} 
                      className="my-4 px-8 py-6 rounded-full text-lg font-medium bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
                      size="lg"
                      disabled={isCapturing}
                    >
                      <Camera className="mr-2 h-5 w-5" />
                      Start Capture :)
                    </Button>
                  </div>
                  
                  <FilterSelector 
                    selectedFilter={selectedFilter}
                    onSelectFilter={handleFilterChange}
                  />
                </>
              )}
              
              {!showControls && (
                <PhotoBoothControls 
                  onTakePhoto={handleTakePhoto} 
                  onRetakePhoto={handleRetakePhoto} 
                  isCapturing={isCapturing} 
                  hasPhotos={capturedPhotos.length > 0} 
                />
              )}
            </div>
            
            {/* Side panel for photo strip */}
            <div className="lg:w-[40%] bg-white rounded-xl shadow-lg p-6">
              <div id="photo-strip-container">
                <PhotoStripPreview 
                  photos={capturedPhotos} 
                  maxDisplay={4} 
                  onDownload={capturedPhotos.length >= 3 ? handleDownloadStrip : undefined} 
                  onTakeNewPhotos={handleTakeNewPhotos}
                  frameColor={frameColor}
                  setFrameColor={setFrameColor}
                  sticker={selectedSticker}
                  setSticker={setSelectedSticker}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PicaPicaPhotobooth;
