
import { useState } from 'react';

export type LayoutOption = {
  id: string;
  name: string;
  photos: number;
};

export default function usePhotoState() {
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [selectedLayout, setSelectedLayout] = useState<string>('elegant-strip');
  const [selectedOverlay, setSelectedOverlay] = useState<{ id: string; name: string; src: string } | null>(null);
  const [frameColor, setFrameColor] = useState<string>('white');
  const [isCapturing, setIsCapturing] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('frame-color');

  const handlePhotoCaptured = (photoSrc: string) => {
    setCapturedPhotos(prev => [...prev, photoSrc]);
    setIsCapturing(false);
  };

  const handleFrameColorChange = (color: string) => {
    setFrameColor(color);
  };

  return {
    capturedPhotos,
    setCapturedPhotos,
    selectedLayout,
    setSelectedLayout,
    selectedOverlay,
    setSelectedOverlay,
    frameColor,
    setFrameColor,
    isCapturing,
    setIsCapturing,
    activeTab,
    setActiveTab,
    handlePhotoCaptured,
    handleFrameColorChange
  };
}
