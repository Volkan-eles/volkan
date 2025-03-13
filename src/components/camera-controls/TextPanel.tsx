
import React from 'react';
import TextPanelComponent from '@/components/sidebar/TextPanel';

interface TextStyleProps {
  text?: string;
  font?: string;
  color?: string;
  size?: string;
}

interface TextPanelProps {
  onTextStyleChange?: (style: TextStyleProps) => void;
}

const TextPanel: React.FC<TextPanelProps> = ({ onTextStyleChange }) => {
  return (
    <div className="mt-2 p-3 animate-fade-in">
      <TextPanelComponent onTextStyleChange={onTextStyleChange} />
    </div>
  );
};

export default TextPanel;
