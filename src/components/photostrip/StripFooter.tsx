
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';

interface StripFooterProps {
  frameColor: FrameColorType;
  textColor: string;
}

const StripFooter: React.FC<StripFooterProps> = ({ frameColor, textColor }) => {
  // Format date for footer
  const formatDate = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    return `${month}/${day}/${year} ${hours}:${minutes} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
  };

  return (
    <div className={`text-center py-1 ${textColor}`}>
      <div className="text-sm font-medium">KPop Photobooth • {formatDate()}</div>
      <div className="text-xs">© {new Date().getFullYear()} KPop Photobooth</div>
    </div>
  );
};

export default StripFooter;
