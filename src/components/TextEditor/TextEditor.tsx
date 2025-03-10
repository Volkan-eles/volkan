
import React, { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from '@/components/ui/button';
import { Plus, ChevronDown, Text } from 'lucide-react';
import TextControls from './TextControls';

export interface TextElement {
  id: string;
  text: string;
  fontSize: number;
  position: number;
}

interface TextEditorProps {
  texts: TextElement[];
  onAddText: () => void;
  onUpdateText: (id: string, updates: Partial<TextElement>) => void;
  onDeleteText: (id: string) => void;
  onMoveText: (id: string, direction: 'up' | 'down') => void;
}

const TextEditor: React.FC<TextEditorProps> = ({
  texts,
  onAddText,
  onUpdateText,
  onDeleteText,
  onMoveText,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          className="w-full flex items-center justify-between p-2 hover:bg-gray-100"
        >
          <div className="flex items-center gap-2">
            <Text className="h-4 w-4" />
            <span>Text Editor</span>
          </div>
          <ChevronDown className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="border-t">
        <div className="p-2">
          <Button 
            variant="outline" 
            onClick={onAddText}
            className="w-full flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Text Box
          </Button>
        </div>
        
        {texts.map((text) => (
          <TextControls
            key={text.id}
            currentText={text.text}
            currentFontSize={text.fontSize}
            onTextChange={(newText) => onUpdateText(text.id, { text: newText })}
            onFontSize={(newSize) => onUpdateText(text.id, { fontSize: newSize })}
            onDelete={() => onDeleteText(text.id)}
            onMoveUp={() => onMoveText(text.id, 'up')}
            onMoveDown={() => onMoveText(text.id, 'down')}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default TextEditor;
