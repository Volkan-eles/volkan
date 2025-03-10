
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Bold, 
  Italic, 
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Plus,
  Minus,
  ArrowUp,
  ArrowDown,
  Trash2
} from 'lucide-react';

interface TextControlsProps {
  onFontSize: (size: number) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  currentFontSize: number;
  onTextChange: (text: string) => void;
  currentText: string;
}

const TextControls: React.FC<TextControlsProps> = ({
  onFontSize,
  onDelete,
  onMoveUp,
  onMoveDown,
  currentFontSize,
  onTextChange,
  currentText
}) => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex items-center gap-2">
        <Input
          value={currentText}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="Enter text"
          className="flex-1"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={onDelete}
          className="hover:bg-red-100"
        >
          <Trash2 className="h-4 w-4 text-red-500" />
        </Button>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={() => onFontSize(currentFontSize - 1)}>
          <Minus className="h-4 w-4" />
        </Button>
        <span className="text-sm">{currentFontSize}px</span>
        <Button variant="outline" size="icon" onClick={() => onFontSize(currentFontSize + 1)}>
          <Plus className="h-4 w-4" />
        </Button>
        <div className="flex-1" />
        <Button variant="outline" size="icon" onClick={onMoveUp}>
          <ArrowUp className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={onMoveDown}>
          <ArrowDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TextControls;
