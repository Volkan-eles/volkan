
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Camera, Download, Trash2, Share2, Clock } from 'lucide-react';
import { toast } from 'sonner';
import WebcamCapture from './WebcamCapture';
import OverlaySelector from './OverlaySelector';
import FrameSelector from './FrameSelector';
import PhotoStrip from './PhotoStrip';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PhotoBooth: React.FC = () => {
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [selectedOverlay, setSelectedOverlay] = useState<{ id: string; name: string; src: string } | null>(null);
  const [frameStyle, setFrameStyle] = useState<string>('white');
  const [isCapturing, setIsCapturing] = useState(false);
  const [countdownDuration, setCountdownDuration] = useState<number>(3);
  const overlayImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (selectedOverlay) {
      // Load the overlay image
      const img = new Image();
      img.src = selectedOverlay.src;
      img.onload = () => {
        overlayImageRef.current = img;
      };
    } else {
      overlayImageRef.current = null;
    }
  }, [selectedOverlay]);

  const handleCapture = () => {
    setIsCapturing(true);
  };

  const handlePhotoCaptured = (photoSrc: string) => {
    setCapturedPhotos(prev => [...prev, photoSrc]);
    setIsCapturing(false);
    toast.success('Photo captured!');
  };

  const handleClearPhotos = () => {
    setCapturedPhotos([]);
    toast.info('All photos cleared');
  };

  const handleRetake = () => {
    // Remove the last photo and allow for retaking
    setCapturedPhotos(prev => prev.slice(0, -1));
    toast.info('Retaking photo');
  };

  const handleSelectOverlay = (overlay: { id: string; name: string; src: string } | null) => {
    setSelectedOverlay(overlay);
    if (overlay) {
      toast.success(`Selected ${overlay.name}`);
    } else {
      toast.info('Overlays disabled');
    }
  };

  const handleSelectFrame = (frame: string) => {
    setFrameStyle(frame);
    toast.success(`Selected ${frame} frame`);
  };

  const handleSetCountdown = (seconds: number) => {
    setCountdownDuration(seconds);
    toast.success(`Countdown set to ${seconds} seconds`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column - Capture and controls */}
        <div className="flex flex-col space-y-4">
          <div className={`photo-frame photo-frame-${frameStyle} rounded-lg overflow-hidden shadow-lg`}>
            <WebcamCapture 
              onCapture={handlePhotoCaptured} 
              isCapturing={isCapturing}
              overlayImage={overlayImageRef.current}
              countdownDuration={countdownDuration}
              onRetake={handleRetake}
            />
          </div>

          <div className="flex space-x-2">
            <Button 
              onClick={handleCapture} 
              disabled={isCapturing} 
              className="flex-1 capture-button"
            >
              <Camera className="mr-2 h-4 w-4" />
              Take Photo
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleClearPhotos}
              disabled={capturedPhotos.length === 0}
              className="bg-white hover:bg-gray-100"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </div>

          {/* Countdown Timer Selection */}
          <div className="bg-gray-100 p-2 rounded-lg">
            <div className="flex items-center mb-2">
              <Clock className="h-4 w-4 mr-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Countdown Timer</span>
            </div>
            <Tabs defaultValue={countdownDuration.toString()} className="w-full">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger 
                  value="3" 
                  onClick={() => handleSetCountdown(3)}
                  className={countdownDuration === 3 ? "bg-blue-100" : ""}
                >
                  3s
                </TabsTrigger>
                <TabsTrigger 
                  value="5" 
                  onClick={() => handleSetCountdown(5)}
                  className={countdownDuration === 5 ? "bg-blue-100" : ""}
                >
                  5s
                </TabsTrigger>
                <TabsTrigger 
                  value="10" 
                  onClick={() => handleSetCountdown(10)}
                  className={countdownDuration === 10 ? "bg-blue-100" : ""}
                >
                  10s
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <FrameSelector 
            selectedFrame={frameStyle} 
            onSelectFrame={handleSelectFrame} 
          />

          <OverlaySelector 
            onSelectOverlay={handleSelectOverlay}
            selectedOverlayId={selectedOverlay?.id || null}
          />
        </div>

        {/* Right column - Photo strip */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Photo Strip</h2>
          </div>
          
          <PhotoStrip 
            photos={capturedPhotos} 
            frameStyle={frameStyle} 
          />
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p className="mb-1 text-xs">{new Date().toLocaleDateString()}</p>
            <div className="flex items-center justify-center">
              <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 22h14"></path>
                <path d="M5 2h14"></path>
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
              </svg>
              <span>K-pop Frame</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoBooth;
