
import React from 'react';
import { Button } from '@/components/ui/button';
import { HexColorPicker } from 'react-colorful';
import { RefreshCw } from 'lucide-react';

interface FrameColorPanelProps {
  frameColor: string;
  onFrameColorChange: (color: string) => void;
}

const FrameColorPanel: React.FC<FrameColorPanelProps> = ({
  frameColor,
  onFrameColorChange
}) => {
  return (
    <div className="mt-2 p-3 space-y-3 animate-fade-in">
      <h3 className="text-sm font-medium text-white/90 mb-2">Choose frame color</h3>
      <HexColorPicker 
        color={frameColor} 
        onChange={onFrameColorChange} 
        className="w-full max-w-[180px] mx-auto rounded-lg overflow-hidden shadow-lg transition-all duration-300" 
      />
      <div className="grid grid-cols-5 gap-3 mt-4">
        {['#FFFFFF', '#000000', '#4b30ab', '#FF6B6B', '#22bb33'].map(color => (
          <div 
            key={color}
            onClick={() => onFrameColorChange(color)}
            className={`w-full aspect-square rounded-lg cursor-pointer border-2 transition-all duration-200 transform hover:scale-110 ${frameColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-[#1A1A1A] shadow-glow' : 'border-transparent opacity-80 hover:opacity-100'}`}
            style={{ backgroundColor: color }}
            aria-label={`Select ${color} color`}
            role="button"
            tabIndex={0}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between bg-black/20 p-2 rounded-md">
        <div className="text-xs text-white/70">Current: {frameColor}</div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs text-white/70 hover:text-white hover:bg-white/10"
          onClick={() => onFrameColorChange('#FFFFFF')}
        >
          <RefreshCw className="h-3 w-3 mr-1" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default FrameColorPanel;
