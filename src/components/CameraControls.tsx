
import React, { useState } from 'react';
import WebcamCapture from '@/components/WebcamCapture';
import CameraButtons from '@/components/camera-controls/CameraButtons';
import TabsArea from '@/components/camera-controls/TabsArea';

interface CameraControlsProps {
  onPhotoCaptured: (photoSrc: string) => void;
  isCapturing: boolean;
  setIsCapturing: (isCapturing: boolean) => void;
  frameColor: string;
  onFrameColorChange: (color: string) => void;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  overlayImageRef: React.RefObject<HTMLImageElement | null>;
  onTextStyleChange?: (style: {
    text?: string;
    font?: string;
    color?: string;
    size?: string;
  }) => void;
}

const CameraControls: React.FC<CameraControlsProps> = ({
  onPhotoCaptured,
  isCapturing,
  setIsCapturing,
  frameColor,
  onFrameColorChange,
  activeTab,
  setActiveTab,
  overlayImageRef,
  onTextStyleChange
}) => {
  const [selectedSticker, setSelectedSticker] = useState<string | null>(null);
  const [isTabOpen, setIsTabOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleCapture = () => {
    setIsCapturing(true);
  };

  const handleSelectSticker = (sticker: {id: string; name: string; src: string}) => {
    setIsLoading(true);
    setSelectedSticker(sticker.id);
    const img = new Image();
    img.src = sticker.src;
    img.onload = () => {
      if (overlayImageRef) {
        (overlayImageRef as any).current = img;
      }
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
    };
  };

  return (
    <div className="flex flex-col gap-3 w-[95%] mx-auto">
      {/* Camera View */}
      <div className={`flex-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-1.5 rounded-lg overflow-hidden shadow-lg transition-all duration-300`}>
        <div className="h-[220px] md:h-[280px] rounded-lg overflow-hidden bg-white relative">
          <WebcamCapture onCapture={onPhotoCaptured} isCapturing={isCapturing} overlayImage={overlayImageRef.current} />
          {isLoading && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-sm">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Camera Buttons */}
      <CameraButtons 
        handleCapture={handleCapture}
        isCapturing={isCapturing}
      />
      
      {/* Control Tabs */}
      <TabsArea 
        activeTab={activeTab}
        isTabOpen={isTabOpen}
        setActiveTab={setActiveTab}
        setIsTabOpen={setIsTabOpen}
        frameColor={frameColor}
        onFrameColorChange={onFrameColorChange}
        selectedSticker={selectedSticker}
        handleSelectSticker={handleSelectSticker}
        onTextStyleChange={onTextStyleChange}
      />
    </div>
  );
};

export default CameraControls;
