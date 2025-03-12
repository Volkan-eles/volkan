
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import WebcamCapture from '@/components/WebcamCapture';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { toast } from 'sonner';

const PicaPicaPhotobooth = () => {
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const overlayImageRef = useRef<HTMLImageElement | null>(null);

  const handlePhotoCaptured = (photoSrc: string) => {
    setCapturedPhotos(prev => [...prev, photoSrc]);
    setIsCapturing(false);
    toast.success('Photo captured!');
  };

  const handleTakePhoto = () => {
    setIsCapturing(true);
  };

  return (
    <>
      <Helmet>
        <title>Pica Pica Photobooth | Pica Pica Netlify App</title>
        <meta name="description" content="Create fun and memorable photo experiences with Pica Pica Photobooth. Perfect for K-pop fans who want to capture special moments with customized frames and effects." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-pink-100 to-purple-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Pica Pica Photobooth | Pica Pica Netlify App
          </h1>
          
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
              
              <div className="mt-4 flex justify-center">
                <Button 
                  onClick={handleTakePhoto} 
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all"
                  size="lg"
                  disabled={isCapturing}
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Take Photo
                </Button>
              </div>
            </div>
            
            {/* Side panel for photo strip */}
            <div className="lg:w-[30%] bg-white rounded-xl shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-4 text-pink-600">Recent Photos</h2>
              
              {capturedPhotos.length > 0 ? (
                <div className="space-y-3">
                  {capturedPhotos.slice(-3).map((photo, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                      <img 
                        src={photo} 
                        alt={`Captured photo ${index + 1}`} 
                        className="w-full h-auto" 
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-400 text-center">
                  <p className="mb-2">No photos yet</p>
                  <p>Take some pictures!</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PicaPicaPhotobooth;
