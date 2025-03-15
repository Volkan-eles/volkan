
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';

// CSS filter definitions for the preview
const filterDefinitions: Record<DigiboothFilterType, string> = {
  none: 'none',
  bw: 'grayscale(100%)',
  sepia: 'sepia(100%)',
  vintage: 'sepia(50%) contrast(80%) brightness(90%)',
  soft: 'contrast(90%) brightness(110%) saturate(85%)',
  noir: 'grayscale(100%) contrast(120%) brightness(90%)',
  vivid: 'saturate(150%) contrast(110%)',
  dreamy: 'brightness(105%) contrast(90%) saturate(80%) sepia(20%)',
  retro70s: 'sepia(40%) saturate(120%) hue-rotate(-10deg)',
  polaroid: 'contrast(90%) brightness(110%) sepia(20%) saturate(80%)',
  cyberpunk: 'contrast(140%) brightness(110%) saturate(170%) hue-rotate(10deg)',
  faded: 'contrast(85%) brightness(120%) saturate(80%)'
};

// Helper function to get CSS filter string for preview
export const getFilterStyle = (filter: DigiboothFilterType, adjustments?: FilterAdjustmentValues) => {
  // Base filter effects
  let filterString = filterDefinitions[filter] || 'none';
  
  // Add adjustments if provided
  if (adjustments) {
    if (filter === 'none') {
      filterString = '';
    }
    
    if (adjustments.brightness !== 100) {
      filterString += ` brightness(${adjustments.brightness / 100})`;
    }
    
    if (adjustments.contrast !== 100) {
      filterString += ` contrast(${adjustments.contrast / 100})`;
    }
    
    if (adjustments.saturation !== 100) {
      filterString += ` saturate(${adjustments.saturation / 100})`;
    }
  }
  
  return filterString;
};
