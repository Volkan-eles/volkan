
import { useState } from 'react';

export interface TextElement {
  id: string;
  text: string;
  font: string;
  color: string;
  size: string;
  position: { x: number; y: number };
}

export const useTextElements = () => {
  const [textElements, setTextElements] = useState<TextElement[]>([]);

  const addTextElement = (style: {
    text?: string;
    font?: string;
    color?: string;
    size?: string;
  }) => {
    const newElement: TextElement = {
      id: Date.now().toString(),
      text: style.text || 'New Text',
      font: style.font || 'sans',
      color: style.color || '#000000',
      size: style.size || '16px',
      position: { x: 50, y: 50 },
    };
    setTextElements(prev => [...prev, newElement]);
  };

  const updateTextElement = (id: string, updates: Partial<TextElement>) => {
    setTextElements(prev =>
      prev.map(element =>
        element.id === id ? { ...element, ...updates } : element
      )
    );
  };

  const deleteTextElement = (id: string) => {
    setTextElements(prev => prev.filter(element => element.id !== id));
  };

  return {
    textElements,
    addTextElement,
    updateTextElement,
    deleteTextElement,
  };
};
