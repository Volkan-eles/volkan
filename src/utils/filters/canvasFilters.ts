
import { FilterType } from '@/components/photobooth/FilterSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { filterEffects, applyAdjustments } from './filterEffects';

export const applyCanvasFilter = (
  ctx: CanvasRenderingContext2D, 
  canvas: HTMLCanvasElement, 
  filter: FilterType | DigiboothFilterType,
  adjustments?: FilterAdjustmentValues
) => {
  console.log(`Applying filter: ${filter} to canvas`, adjustments);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply filter effect if it exists
  if (filter !== 'none' && filterEffects[filter]) {
    // Pass canvas dimensions to filter effect
    filterEffects[filter](data, { width: canvas.width, height: canvas.height });
  }
  
  // Apply adjustments if provided
  if (adjustments) {
    applyAdjustments(data, adjustments);
  }
  
  ctx.putImageData(imageData, 0, 0);
};
