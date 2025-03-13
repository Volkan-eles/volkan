
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

export type LayoutType = 'classic-strip' | 'dual-strip' | 'vertical-strip' | 'quad-strip' | 'portrait-split';

interface DigiboothLayoutSelectorProps {
  selectedLayout: LayoutType;
  onSelectLayout: (layout: LayoutType) => void;
}

const DigiboothLayoutSelector: React.FC<DigiboothLayoutSelectorProps> = ({
  selectedLayout,
  onSelectLayout
}) => {
  const layouts = [
    { id: 'classic-strip', name: 'Layout A - Classic Strip' },
    { id: 'dual-strip', name: 'Layout B - Dual Strip' },
    { id: 'vertical-strip', name: 'Layout C - Vertical Strip' },
    { id: 'quad-strip', name: 'Layout D - Quad Strip' },
    { id: 'portrait-split', name: 'Layout E - Portrait Split' },
  ];

  const getLayoutName = (layoutId: string) => {
    const layout = layouts.find(l => l.id === layoutId);
    return layout ? layout.name : 'Select Layout';
  };

  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium mb-2">Photo Strip Layout</h3>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {getLayoutName(selectedLayout)}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {layouts.map((layout) => (
            <DropdownMenuItem
              key={layout.id}
              onClick={() => onSelectLayout(layout.id as LayoutType)}
              className="cursor-pointer"
            >
              {layout.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DigiboothLayoutSelector;
