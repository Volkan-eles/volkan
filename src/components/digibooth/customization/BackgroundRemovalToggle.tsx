
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
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-700 mb-3">Background Removal</h3>
      <div className="flex justify-center">
        <Button
          className={`px-3 py-1.5 rounded-md text-sm transition-all ${
            showBackgroundRemoval
              ? "bg-blue-500 text-white ring-2 ring-offset-1 ring-blue-500"
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
