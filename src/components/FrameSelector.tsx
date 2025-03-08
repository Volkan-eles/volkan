
import React from 'react';
import { Button } from '@/components/ui/button';

interface FrameSelectorProps {
  selectedFrame: string;
  onSelectFrame: (frame: string) => void;
}

const FrameSelector: React.FC<FrameSelectorProps> = ({ selectedFrame, onSelectFrame }) => {
  const frameOptions = [
    { id: 'white', label: 'White', color: 'bg-booth-white text-black border border-gray-300' },
    { id: 'black', label: 'Black', color: 'bg-booth-black text-white' },
    { id: 'red', label: 'Red', color: 'bg-booth-red text-white' },
    { id: 'blue', label: 'Blue', color: 'bg-booth-blue text-white' },
    { id: 'pink', label: 'Pink', color: 'bg-pink-400 text-white' },
    { id: 'yellow', label: 'Yellow', color: 'bg-yellow-300 text-black' },
  ];

  return (
    <div className="glass-panel p-4 mb-4">
      <h3 className="text-sm font-medium mb-3">Select Frame Style</h3>
      <div className="grid grid-cols-3 gap-2">
        {frameOptions.map((frame) => (
          <Button
            key={frame.id}
            variant={selectedFrame === frame.id ? "default" : "outline"}
            className={`${frame.color} transition-all duration-300 transform ${
              selectedFrame === frame.id ? 'scale-105 shadow-md' : 'hover:scale-105'
            }`}
            onClick={() => onSelectFrame(frame.id)}
          >
            {frame.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FrameSelector;
