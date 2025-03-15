
import { FilterType } from '@/components/photobooth/FilterSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';

// Shared type for filter configurations
export interface FilterEffectConfig {
  id: FilterType | DigiboothFilterType;
  cssFilter: string;
  applyEffect: (data: Uint8ClampedArray) => void;
}
