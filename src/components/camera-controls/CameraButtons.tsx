
import React from 'react';
import { Button } from '@/components/ui/button';

interface CameraButtonsProps {
  handleCapture: () => void;
  isCapturing: boolean;
}

const CameraButtons: React.FC<CameraButtonsProps> = ({
  handleCapture,
  isCapturing
}) => {
  return (
    <div className="flex justify-center space-x-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      <Button 
        variant="ghost" 
        className="text-white p-1 h-8 hover:bg-white/20 transition-colors relative overflow-hidden group" 
        onClick={() => {}}
        aria-label="Switch camera"
      >
        <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 8v8H5V8h10zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z" fill="currentColor" />
        </svg>
        <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
      </Button>
      <Button 
        variant="ghost" 
        className="text-white h-12 w-12 rounded-full border-2 border-white flex items-center justify-center p-0 hover:bg-white/20 hover:scale-110 transition-all duration-300 transform relative overflow-hidden" 
        onClick={handleCapture}
        disabled={isCapturing}
        aria-label="Take photo"
      >
        <div className="h-7 w-7 rounded-full bg-white transition-transform duration-300 transform group-hover:scale-110"></div>
        {isCapturing && (
          <span className="absolute inset-0 bg-white/20 animate-pulse"></span>
        )}
      </Button>
      <Button 
        variant="ghost" 
        className="text-white p-1 h-8 hover:bg-white/20 transition-colors relative overflow-hidden group"
        onClick={() => {}}
        aria-label="Camera settings"
      >
        <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" fill="currentColor" />
        </svg>
        <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
      </Button>
    </div>
  );
};

export default CameraButtons;
