
import React from 'react';
import { TextElement } from '@/hooks/useTextElements';
import { X } from 'lucide-react';

interface TextLayerProps {
  textElements: TextElement[];
  onUpdate: (id: string, updates: Partial<TextElement>) => void;
  onDelete: (id: string) => void;
}

const TextLayer: React.FC<TextLayerProps> = ({
  textElements,
  onUpdate,
  onDelete,
}) => {
  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDrag = (e: React.DragEvent, id: string) => {
    if (e.clientX === 0 && e.clientY === 0) return;
    
    const rect = (e.target as HTMLElement).parentElement?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    onUpdate(id, {
      position: { x, y },
    });
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {textElements.map((element) => (
        <div
          key={element.id}
          className="absolute pointer-events-auto cursor-move"
          style={{
            left: `${element.position.x}%`,
            top: `${element.position.y}%`,
            transform: 'translate(-50%, -50%)',
            fontFamily: element.font,
            color: element.color,
            fontSize: element.size,
          }}
          draggable
          onDragStart={(e) => handleDragStart(e, element.id)}
          onDrag={(e) => handleDrag(e, element.id)}
        >
          <div className="group relative">
            <span>{element.text}</span>
            <button
              onClick={() => onDelete(element.id)}
              className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={12} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextLayer;
