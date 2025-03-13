
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
    <div>
      <h3 className="text-sm font-medium text-gray-600 mb-1">Background</h3>
      <div className="flex">
        <Button
          className={`px-2 py-0.5 rounded-md text-xs h-auto transition-all ${
            showBackgroundRemoval
              ? "bg-primary text-white ring-1 ring-offset-1 ring-primary"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
          onClick={toggleBackgroundRemoval}
        >
          {showBackgroundRemoval ? 'Remove BG: On' : 'Remove BG: Off'}
        </Button>
      </div>
    </div>
  );
};

export default BackgroundRemovalToggle;
