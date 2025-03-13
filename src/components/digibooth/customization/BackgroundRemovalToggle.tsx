
import React from 'react';
import { Button } from '@/components/ui/button';

interface BackgroundRemovalToggleProps {
  showBackgroundRemoval: boolean;
  toggleBackgroundRemoval: () => void;
}

const BackgroundRemovalToggle: React.FC<BackgroundRemovalToggleProps> = ({
  showBackgroundRemoval,
  toggleBackgroundRemoval
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-md font-medium text-gray-600 mb-2">Background Removal</h3>
      <div className="flex justify-center">
        <Button
          className={`px-3 py-1 rounded-md text-sm transition-all ${
            showBackgroundRemoval
              ? "bg-primary text-white ring-1 ring-offset-1 ring-primary"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
          onClick={toggleBackgroundRemoval}
        >
          {showBackgroundRemoval ? 'Background Removal On' : 'Background Removal Off'}
        </Button>
      </div>
    </div>
  );
};

export default BackgroundRemovalToggle;
