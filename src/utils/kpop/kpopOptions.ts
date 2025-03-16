
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';

// Options for the UI
export const frameColorOptions = [
  { value: 'white' as FrameColorType, label: 'White', color: '#FFFFFF' },
  { value: 'black' as FrameColorType, label: 'Black', color: '#000000' },
  { value: 'pink' as FrameColorType, label: 'Pink', color: '#EC4899' },
  { value: 'purple' as FrameColorType, label: 'Purple', color: '#8B5CF6' },
  { value: 'blue' as FrameColorType, label: 'Blue', color: '#3B82F6' },
  { value: 'green' as FrameColorType, label: 'Green', color: '#10B981' },
  { value: 'yellow' as FrameColorType, label: 'Yellow', color: '#FBBF24' },
  { value: 'softPink' as FrameColorType, label: 'Soft Pink', color: '#FFDEE2' },
  { value: 'softPurple' as FrameColorType, label: 'Soft Purple', color: '#E5DEFF' },
  { value: 'softBlue' as FrameColorType, label: 'Soft Blue', color: '#D3E4FD' },
];

export const stickerOptions = [
  { value: 'none' as StickerType, label: 'None' },
  { value: 'mofusand' as StickerType, label: 'Mofusand', preview: '/mofusand-frame.png' },
  { value: 'shin-chan' as StickerType, label: 'Shin Chan', preview: '/shin-chan.png' },
  { value: 'miffy' as StickerType, label: 'Miffy', preview: '/miffy-frame.png' },
];

export const getBorderColor = (frameColor: FrameColorType): string => {
  switch(frameColor) {
    case 'white': return 'border-white bg-white';
    case 'black': return 'border-black bg-black';
    case 'pink': return 'border-pink-400 bg-pink-400';
    case 'green': return 'border-green-500 bg-green-500';
    case 'blue': return 'border-blue-500 bg-blue-500';
    case 'yellow': return 'border-yellow-400 bg-yellow-400';
    case 'purple': return 'border-purple-500 bg-purple-500';
    case 'maroon': return 'border-red-800 bg-red-800';
    case 'burgundy': return 'border-red-900 bg-red-900';
    // New soft colors
    case 'softGreen': return 'border-[#F2FCE2] bg-[#F2FCE2]';
    case 'softYellow': return 'border-[#FEF7CD] bg-[#FEF7CD]';
    case 'softOrange': return 'border-[#FEC6A1] bg-[#FEC6A1]';
    case 'softPurple': return 'border-[#E5DEFF] bg-[#E5DEFF]';
    case 'softPink': return 'border-[#FFDEE2] bg-[#FFDEE2]';
    case 'softPeach': return 'border-[#FDE1D3] bg-[#FDE1D3]';
    case 'softBlue': return 'border-[#D3E4FD] bg-[#D3E4FD]';
    case 'softGray': return 'border-[#F1F0FB] bg-[#F1F0FB]';
    default: return 'border-white bg-white';
  }
};

// Helper function to determine if a frame color needs dark text
export const needsDarkText = (frameColor: FrameColorType): boolean => {
  return ['white', 'yellow', 'softGreen', 'softYellow', 'softOrange', 
          'softPurple', 'softPink', 'softPeach', 'softBlue', 'softGray'].includes(frameColor);
};

// Helper function to get appropriate text color for a frame color
export const getTextColorForFrame = (frameColor: FrameColorType): string => {
  return needsDarkText(frameColor) ? 'text-gray-800' : 'text-white';
};

// Get sticker image source based on sticker type
export const getStickerImage = (sticker: StickerType): string | null => {
  switch(sticker) {
    case 'mofusand': return '/mofusand-frame.png';
    case 'shin-chan': return '/shin-chan.png';
    case 'miffy': return '/miffy-frame.png';
    default: return null;
  }
};

// Enhanced functions for Kpop theme
export const getKpopFrameStyle = (frameColor: FrameColorType): string => {
  const baseStyle = getBorderColor(frameColor);
  return `${baseStyle} kpop-frame`;
};

export const getKpopTextStyle = (frameColor: FrameColorType): string => {
  const textColor = getTextColorForFrame(frameColor);
  return `${textColor} font-medium`;
};
