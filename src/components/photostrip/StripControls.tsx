
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, QrCode, Camera } from 'lucide-react';

interface StripControlsProps {
  onDownload: () => void;
  onTakeNewPhotos: () => void;
}

const StripControls: React.FC<StripControlsProps> = ({ onDownload, onTakeNewPhotos }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      <Button
        onClick={onDownload}
        className="bg-pink-500 hover:bg-pink-600 text-white"
      >
        <Download className="mr-2 h-4 w-4" />
        Download Photo Strip
      </Button>
      
      <Button
        variant="outline"
        className="bg-white hover:bg-gray-100"
      >
        <QrCode className="mr-2 h-4 w-4" />
        Download via QR Code
      </Button>
      
      <Button
        onClick={onTakeNewPhotos}
        className="bg-purple-500 hover:bg-purple-600 text-white"
      >
        <Camera className="mr-2 h-4 w-4" />
        Take New Photos
      </Button>
    </div>
  );
};

export default StripControls;
