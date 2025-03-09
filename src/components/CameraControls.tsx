import React from 'react';
import { Button } from '@/components/ui/button';
import WebcamCapture from '@/components/WebcamCapture';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
interface CameraControlsProps {
  onPhotoCaptured: (photoSrc: string) => void;
  isCapturing: boolean;
  setIsCapturing: (isCapturing: boolean) => void;
  frameColor: string;
  onFrameColorChange: (color: string) => void;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  overlayImageRef: React.RefObject<HTMLImageElement | null>;
}
const CameraControls: React.FC<CameraControlsProps> = ({
  onPhotoCaptured,
  isCapturing,
  setIsCapturing,
  frameColor,
  onFrameColorChange,
  activeTab,
  setActiveTab,
  overlayImageRef
}) => {
  const handleCapture = () => {
    setIsCapturing(true);
  };
  return <div className="flex flex-col gap-3">
      {/* Camera Frame Colors */}
      
      
      {/* Camera View */}
      <div className={`flex-1 bg-[#4b30ab] p-1.5 rounded-lg overflow-hidden`}>
        <div className="h-[260px] md:h-[300px] rounded-lg overflow-hidden bg-white">
          <WebcamCapture onCapture={onPhotoCaptured} isCapturing={isCapturing} overlayImage={overlayImageRef.current} />
        </div>
      </div>
      
      {/* Camera Buttons */}
      <div className="flex justify-center space-x-4 bg-[#4b30ab] py-1.5 rounded-lg">
        <Button variant="ghost" className="text-white" onClick={() => {}}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 8v8H5V8h10zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z" fill="currentColor" />
          </svg>
        </Button>
        <Button variant="ghost" className="text-white h-9 w-9 rounded-full border-2 border-white flex items-center justify-center" onClick={handleCapture}>
          <div className="h-7 w-7 rounded-full bg-white"></div>
        </Button>
        <Button variant="ghost" className="text-white" onClick={() => {}}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" fill="currentColor" />
          </svg>
        </Button>
      </div>
      
      {/* Control Tabs */}
      <div className="bg-[#1A1A1A] rounded-lg p-2">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 bg-[#1A1A1A] p-0.5">
            <TabsTrigger value="frame-color" className={`text-xs ${activeTab === 'frame-color' ? 'bg-[#333] text-white' : 'text-gray-400'}`}>
              Frame Color
            </TabsTrigger>
            <TabsTrigger value="stickers" className={`text-xs ${activeTab === 'stickers' ? 'bg-[#333] text-white' : 'text-gray-400'}`}>
              Stickers
            </TabsTrigger>
            <TabsTrigger value="idol" className={`text-xs ${activeTab === 'idol' ? 'bg-[#333] text-white' : 'text-gray-400'}`}>
              Idol
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Stickers Grid */}
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {Array.from({
          length: 8
        }).map((_, index) => <div key={index} className="aspect-square border border-[#333] rounded-md"></div>)}
        </div>
      </div>
    </div>;
};
export default CameraControls;