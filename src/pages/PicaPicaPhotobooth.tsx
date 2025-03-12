
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import WebcamCapture from '@/components/WebcamCapture';
import PhotoStripPreview from '@/components/PhotoStripPreview';
import BackgroundColorSelector from '@/components/BackgroundColorSelector';
import HeroArea from '@/components/photobooth/HeroArea';
import PhotoBoothControls from '@/components/photobooth/PhotoBoothControls';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';

const PicaPicaPhotobooth = () => {
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [bgColor, setBgColor] = useState<string>('bg-gradient-to-r from-pink-100 to-purple-100');
  const overlayImageRef = useRef<HTMLImageElement | null>(null);
  const photoStripRef = useRef<HTMLDivElement>(null);

  const handlePhotoCaptured = (photoSrc: string) => {
    setCapturedPhotos(prev => [...prev, photoSrc]);
    setIsCapturing(false);
    toast.success('Photo captured!');
  };

  const handleTakePhoto = () => {
    setIsCapturing(true);
  };

  const handleRetakePhoto = () => {
    if (capturedPhotos.length > 0) {
      const newPhotos = [...capturedPhotos];
      newPhotos.pop();
      setCapturedPhotos(newPhotos);
      toast.info('Last photo removed. Take another!');
    }
  };

  const handleDownloadStrip = async () => {
    if (!photoStripRef.current || capturedPhotos.length < 3) return;
    
    try {
      toast.loading('Creating your photo strip...');
      
      const canvas = await html2canvas(photoStripRef.current, {
        backgroundColor: null,
        scale: 2,
      });
      
      const dataUrl = canvas.toDataURL('image/png');
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
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Take Your Photos
            </h2>
            <BackgroundColorSelector bgColor={bgColor} setBgColor={setBgColor} />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main webcam display */}
            <div className="flex-grow lg:w-[70%] bg-white rounded-xl shadow-lg p-4 overflow-hidden">
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                <WebcamCapture 
                  onCapture={handlePhotoCaptured} 
                  isCapturing={isCapturing} 
                  overlayImage={overlayImageRef.current} 
                />
              </div>
              
              <PhotoBoothControls 
                onTakePhoto={handleTakePhoto}
                onRetakePhoto={handleRetakePhoto}
                isCapturing={isCapturing}
                hasPhotos={capturedPhotos.length > 0}
              />
            </div>
            
            {/* Side panel for photo strip */}
            <div className="lg:w-[30%] bg-white rounded-xl shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-4 text-pink-600">Recent Photos</h2>
              
              <div ref={photoStripRef}>
                <PhotoStripPreview 
                  photos={capturedPhotos} 
                  maxDisplay={3} 
                  onDownload={capturedPhotos.length >= 3 ? handleDownloadStrip : undefined} 
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
