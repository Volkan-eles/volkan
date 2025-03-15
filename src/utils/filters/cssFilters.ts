
import { FilterType } from '@/components/photobooth/FilterSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';

export const getFilterStyle = (
  filter: FilterType | DigiboothFilterType, 
  intensity: number | FilterAdjustmentValues = 1
): string => {
  if (filter === 'none') return 'none';
  
  const filters: Record<string, string> = {
    bw: 'grayscale(100%)',
    sepia: 'sepia(100%)',
    vintage: 'sepia(50%) contrast(80%) brightness(90%)',
    soft: 'contrast(90%) brightness(110%) saturate(85%)',
    noir: 'grayscale(100%) contrast(120%) brightness(90%)',
    vivid: 'saturate(150%) contrast(110%)',
    dreamy: 'brightness(110%) saturate(90%) contrast(90%) hue-rotate(350deg)',
    retro70s: 'sepia(30%) saturate(120%) contrast(110%) brightness(105%) hue-rotate(350deg)',
    polaroid: 'brightness(110%) contrast(90%) saturate(90%)',
    cyberpunk: 'hue-rotate(220deg) saturate(180%) brightness(110%) contrast(120%)',
    faded: 'brightness(110%) contrast(90%) saturate(85%)',
    // New vintage filters
    vintageWarm: 'sepia(40%) brightness(105%) contrast(95%) saturate(110%) hue-rotate(10deg)',
    vintageCool: 'brightness(100%) contrast(105%) saturate(95%) hue-rotate(190deg)',
    vintageSepia: 'sepia(70%) brightness(95%) contrast(110%) saturate(90%)',
    vintageFade: 'brightness(115%) contrast(90%) saturate(80%) sepia(20%)'
  };
  
  const baseFilter = filters[filter] || 'none';
  
  // Apply adjustments if they're provided
  if (typeof intensity === 'object' && intensity) {
    const { brightness, contrast, saturation } = intensity;
    return `${baseFilter} brightness(${brightness/100}) contrast(${contrast/100}) saturate(${saturation/100})`;
  }
  
  // If intensity is a number, apply it (for backward compatibility)
  if (typeof intensity === 'number' && intensity !== 1) {
    return `${baseFilter} opacity(${intensity})`;
  }
  
  return baseFilter;
};
