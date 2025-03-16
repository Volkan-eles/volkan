
import React from 'react';
import { Slider } from '@/components/ui/slider';

export type BorderWidthValue = 'small' | 'medium' | 'large' | 'full';

interface BorderWidthSelectorProps {
  selectedWidth: BorderWidthValue;
  onSelectWidth: (width: BorderWidthValue) => void;
}

const BorderWidthSelector: React.FC<BorderWidthSelectorProps> = ({
  selectedWidth,
  onSelectWidth
}) => {
  const widthOptions: {
    value: BorderWidthValue;
    label: string;
    size: string;
  }[] = [
    { value: 'small', label: 'Small', size: '70%' },
    { value: 'medium', label: 'Medium', size: '85%' },
    { value: 'large', label: 'Large', size: '95%' },
    { value: 'full', label: 'Full', size: '100%' }
  ];

  // Convert string width to slider number value (0-100)
  const getSliderValue = (width: BorderWidthValue): number => {
    switch(width) {
      case 'small': return 0;
      case 'medium': return 33;
      case 'large': return 66;
      case 'full': return 100;
      default: return 100;
    }
  };

  // Convert slider number to width value
  const getWidthFromSlider = (value: number): BorderWidthValue => {
    if (value < 20) return 'small';
    if (value < 50) return 'medium';
    if (value < 85) return 'large';
    return 'full';
  };

  const handleSliderChange = (value: number[]) => {
    onSelectWidth(getWidthFromSlider(value[0]));
  };

  return (
    <div className="mt-3">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-sm font-medium text-gray-700">Image Size</h3>
        <span className="text-xs text-purple-600 font-medium">
          {widthOptions.find(option => option.value === selectedWidth)?.label || 'Full'}
        </span>
      </div>
      
      <Slider 
        defaultValue={[getSliderValue(selectedWidth)]} 
        max={100}
        step={1}
        onValueChange={handleSliderChange}
        className="py-1"
      />
      
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Small</span>
        <span>Medium</span>
        <span>Large</span>
        <span>Full</span>
      </div>
    </div>
  );
};

export default BorderWidthSelector;
