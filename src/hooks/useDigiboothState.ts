
import { useState } from 'react';
import { toast } from 'sonner';
import { DigiboothFilterType, FilterAdjustmentValues, DEFAULT_FILTER_ADJUSTMENTS } from '@/components/digibooth/DigiboothFilterSelector';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';

export default function useDigiboothState() {
  // State management
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [bgColor, setBgColor] = useState<string>('bg-gradient-to-r from-blue-100 to-teal-100');
  const [selectedFilter, setSelectedFilter] = useState<DigiboothFilterType>('none');
  const [filterAdjustments, setFilterAdjustments] = useState<FilterAdjustmentValues>({ ...DEFAULT_FILTER_ADJUSTMENTS });
  const [countdownTime, setCountdownTime] = useState<number>(3);
  const [frameColor, setFrameColor] = useState<FrameColorType>('blue');
  const [selectedSticker, setSelectedSticker] = useState<StickerType>('none');
  const [showControls, setShowControls] = useState<boolean>(true);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  // Handle photo capture
  const handlePhotoCaptured = (photoSrc: string) => {
    setCapturedPhotos(prev => [...prev, photoSrc]);
    setIsCapturing(false);
    toast.success('Photo captured!');
    
    // If we've taken enough photos, hide controls and show preview
    if (capturedPhotos.length >= 3) {
      setShowControls(false);
    }
  };

  // Handle starting photo capture
  const handleTakePhoto = () => {
    setIsCapturing(true);
  };

  // Handle retaking the last photo
  const handleRetakePhoto = () => {
    if (capturedPhotos.length > 0) {
      const newPhotos = [...capturedPhotos];
      newPhotos.pop();
      setCapturedPhotos(newPhotos);
      toast.info('Last photo removed. Take another!');
    }
  };

  // Handle clearing all photos to restart
  const handleTakeNewPhotos = () => {
    setCapturedPhotos([]);
    setShowControls(true);
    toast.info('Starting a new photo session!');
  };

  // Handle filter change
  const handleFilterChange = (filter: DigiboothFilterType) => {
    setSelectedFilter(filter);
    toast.success(`${filter === 'none' ? 'No filter' : filter} selected!`);
  };

  // Handle filter adjustment change
  const handleFilterAdjustmentChange = (adjustments: FilterAdjustmentValues) => {
    setFilterAdjustments(adjustments);
  };

  // Handle countdown time change
  const handleCountdownChange = (time: number) => {
    setCountdownTime(time);
    toast.success(`Countdown set to ${time} seconds`);
  };

  return {
    capturedPhotos,
    setCapturedPhotos,
    isCapturing,
    setIsCapturing,
    bgColor,
    setBgColor,
    selectedFilter,
    setSelectedFilter,
    filterAdjustments,
    setFilterAdjustments,
    countdownTime,
    setCountdownTime,
    frameColor,
    setFrameColor,
    selectedSticker,
    setSelectedSticker,
    showControls,
    setShowControls,
    isDownloading,
    setIsDownloading,
    handlePhotoCaptured,
    handleTakePhoto,
    handleRetakePhoto,
    handleTakeNewPhotos,
    handleFilterChange,
    handleFilterAdjustmentChange,
    handleCountdownChange
  };
}
