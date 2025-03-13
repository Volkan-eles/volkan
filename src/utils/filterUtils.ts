
import { FilterType } from '@/components/photobooth/FilterSelector';
import { DigiboothFilterType } from '@/components/digibooth/DigiboothFilterSelector';
import { FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';

export const applyCanvasFilter = (
  ctx: CanvasRenderingContext2D, 
  canvas: HTMLCanvasElement, 
  filter: FilterType | DigiboothFilterType,
  adjustments?: FilterAdjustmentValues
) => {
  console.log(`Applying filter: ${filter} to canvas`, adjustments);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply basic filter effects first
  switch(filter) {
    case 'bw':
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i + 1] = data[i + 2] = avg;
      }
      break;
    
    case 'sepia':
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
        data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
        data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
      }
      break;
    
    case 'vintage':
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
        data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
        data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
        
        // Add vintage effect
        data[i] = Math.min(255, data[i] * 0.9);
        data[i + 1] = Math.min(255, data[i + 1] * 0.9);
        data[i + 2] = Math.min(255, data[i + 2] * 0.9);
      }
      break;
    
    case 'soft':
      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.min(255, data[i] * 0.9 + 25);
        data[i + 1] = Math.min(255, data[i + 1] * 0.9 + 25);
        data[i + 2] = Math.min(255, data[i + 2] * 0.9 + 25);
      }
      break;
    
    case 'noir':
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        const newVal = avg * 1.2 - 30;
        data[i] = data[i + 1] = data[i + 2] = Math.min(255, Math.max(0, newVal));
      }
      break;
    
    case 'vivid':
      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.min(255, data[i] * 1.1);
        data[i + 1] = Math.min(255, data[i + 1] * 1.1);
        data[i + 2] = Math.min(255, data[i + 2] * 1.1);
      }
      break;
      
    // Special and advanced filters
    case 'dreamy':
      for (let i = 0; i < data.length; i += 4) {
        // Soft blue-tinted dreamy effect
        data[i] = Math.min(255, data[i] * 0.85 + 40); // Reduce red
        data[i + 1] = Math.min(255, data[i + 1] * 0.85 + 40); // Reduce green
        data[i + 2] = Math.min(255, data[i + 2] * 0.95 + 60); // Enhance blue
      }
      break;
      
    case 'retro70s':
      for (let i = 0; i < data.length; i += 4) {
        // 70s yellow-orange tint
        data[i] = Math.min(255, data[i] * 1.1 + 10); // Enhance red
        data[i + 1] = Math.min(255, data[i + 1] * 1.0 + 5); // Slight green
        data[i + 2] = Math.min(255, data[i + 2] * 0.7); // Reduce blue
      }
      break;
      
    case 'polaroid':
      for (let i = 0; i < data.length; i += 4) {
        // Polaroid-like washed out effect
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = Math.min(255, data[i] * 0.8 + avg * 0.2 + 15);
        data[i + 1] = Math.min(255, data[i + 1] * 0.8 + avg * 0.2 + 15);
        data[i + 2] = Math.min(255, data[i + 2] * 0.8 + avg * 0.2);
      }
      break;
      
    case 'cyberpunk':
      for (let i = 0; i < data.length; i += 4) {
        // High contrast neon cyberpunk effect
        data[i] = Math.min(255, Math.max(0, data[i] * 1.2 - 20)); // Enhance red
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] * 0.8 + 10)); // Modify green
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] * 1.5 - 10)); // Enhance blue
      }
      break;
      
    case 'faded':
      for (let i = 0; i < data.length; i += 4) {
        // Faded film look
        data[i] = Math.min(255, data[i] * 0.9 + 40); // Red
        data[i + 1] = Math.min(255, data[i + 1] * 0.9 + 40); // Green
        data[i + 2] = Math.min(255, data[i + 2] * 0.9 + 40); // Blue
        
        // Slightly enhance shadows for a film fade effect
        if (data[i] < 100 && data[i + 1] < 100 && data[i + 2] < 100) {
          data[i] = Math.min(255, data[i] * 0.8);
          data[i + 1] = Math.min(255, data[i + 1] * 0.8);
          data[i + 2] = Math.min(255, data[i + 2] * 0.8);
        }
      }
      break;
    
    case 'none':
    default:
      break;
  }
  
  // Apply adjustments if provided
  if (adjustments) {
    const brightness = adjustments.brightness / 100;
    const contrast = adjustments.contrast / 100;
    const saturation = adjustments.saturation / 100;
    
    for (let i = 0; i < data.length; i += 4) {
      // Apply brightness
      data[i] = Math.min(255, Math.max(0, data[i] * brightness));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] * brightness));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] * brightness));
      
      // Apply contrast
      if (contrast !== 1) {
        data[i] = Math.min(255, Math.max(0, 128 + (data[i] - 128) * contrast));
        data[i + 1] = Math.min(255, Math.max(0, 128 + (data[i + 1] - 128) * contrast));
        data[i + 2] = Math.min(255, Math.max(0, 128 + (data[i + 2] - 128) * contrast));
      }
      
      // Apply saturation
      if (saturation !== 1) {
        const gray = 0.2989 * data[i] + 0.5870 * data[i + 1] + 0.1140 * data[i + 2];
        data[i] = Math.min(255, Math.max(0, gray + (data[i] - gray) * saturation));
        data[i + 1] = Math.min(255, Math.max(0, gray + (data[i + 1] - gray) * saturation));
        data[i + 2] = Math.min(255, Math.max(0, gray + (data[i + 2] - gray) * saturation));
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
};

// Helper function to get CSS filter string for preview
export const getFilterStyle = (filter: DigiboothFilterType, adjustments?: FilterAdjustmentValues) => {
  // Base filter effects
  let filterString = '';
  
  switch(filter) {
    case 'bw': 
      filterString = 'grayscale(100%)'; 
      break;
    case 'sepia': 
      filterString = 'sepia(100%)'; 
      break;
    case 'vintage': 
      filterString = 'sepia(50%) contrast(80%) brightness(90%)'; 
      break;
    case 'soft': 
      filterString = 'contrast(90%) brightness(110%) saturate(85%)'; 
      break;
    case 'noir': 
      filterString = 'grayscale(100%) contrast(120%) brightness(90%)'; 
      break;
    case 'vivid': 
      filterString = 'saturate(150%) contrast(110%)'; 
      break;
    case 'dreamy':
      filterString = 'brightness(105%) contrast(90%) saturate(80%) sepia(20%)';
      break;
    case 'retro70s':
      filterString = 'sepia(40%) saturate(120%) hue-rotate(-10deg)';
      break;
    case 'polaroid':
      filterString = 'contrast(90%) brightness(110%) sepia(20%) saturate(80%)';
      break;
    case 'cyberpunk':
      filterString = 'contrast(140%) brightness(110%) saturate(170%) hue-rotate(10deg)';
      break;
    case 'faded':
      filterString = 'contrast(85%) brightness(120%) saturate(80%)';
      break;
    case 'none':
    default: 
      filterString = 'none'; 
      break;
  }
  
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
