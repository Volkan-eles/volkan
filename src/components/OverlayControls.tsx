
import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RotateCw, Trash2, Copy, Move, Plus, Minus } from 'lucide-react';
import { OverlayItem } from '@/utils/overlayManager';

interface OverlayControlsProps {
  overlay: OverlayItem;
  onUpdate: (updatedOverlay: OverlayItem) => void;
  onDelete: () => void;
  onDuplicate: () => void;
}

const OverlayControls: React.FC<OverlayControlsProps> = ({
  overlay,
  onUpdate,
  onDelete,
  onDuplicate
}) => {
  const handleOpacityChange = (value: number[]) => {
    onUpdate({ ...overlay, opacity: value[0] });
  };

  const handleRotationChange = (value: number[]) => {
    onUpdate({ ...overlay, rotation: value[0] });
  };

  const handleScaleChange = (value: number[]) => {
    onUpdate({ ...overlay, scale: value[0] });
  };

  return (
    <div className="bg-[#1A1A1A] rounded-lg p-3 border border-[#333] mb-2 animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-xs font-medium text-white">Overlay Controls</h4>
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full bg-[#333] hover:bg-[#444]"
            onClick={onDuplicate}
          >
            <Copy className="h-3 w-3 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full bg-[#333] hover:bg-[#444]"
            onClick={onDelete}
          >
            <Trash2 className="h-3 w-3 text-white" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {/* Opacity Control */}
        <div className="flex items-center space-x-2">
          <Minus className="h-3 w-3 text-white" />
          <div className="flex-1">
            <Slider
              value={[overlay.opacity]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={handleOpacityChange}
              className="h-2"
            />
          </div>
          <Plus className="h-3 w-3 text-white" />
          <span className="text-xs text-white w-10 text-right">
            {Math.round(overlay.opacity * 100)}%
          </span>
        </div>

        {/* Rotation Control */}
        <div className="flex items-center space-x-2">
          <RotateCw className="h-3 w-3 text-white" />
          <div className="flex-1">
            <Slider
              value={[overlay.rotation]}
              min={0}
              max={360}
              step={1}
              onValueChange={handleRotationChange}
              className="h-2"
            />
          </div>
          <span className="text-xs text-white w-10 text-right">{Math.round(overlay.rotation)}°</span>
        </div>

        {/* Scale Control */}
        <div className="flex items-center space-x-2">
          <Move className="h-3 w-3 text-white" />
          <div className="flex-1">
            <Slider
              value={[overlay.scale]}
              min={0.5}
              max={1.5}
              step={0.01}
              onValueChange={handleScaleChange}
              className="h-2"
            />
          </div>
          <span className="text-xs text-white w-10 text-right">
            {Math.round(overlay.scale * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverlayControls;
