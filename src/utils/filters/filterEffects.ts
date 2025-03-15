import { FilterEffectConfig } from './types';

// Enhanced type for image data with width/height
interface ImageDataWithDimensions extends Uint8ClampedArray {
  width?: number;
  height?: number;
}

// Helper function to get dimensions from image data or canvas
const getDimensions = (
  data: Uint8ClampedArray,
  canvas?: { width: number, height: number }
): { width: number, height: number } => {
  // If data has dimensions as properties (added by our code elsewhere)
  if ('width' in data && 'height' in data) {
    // Safe type checking to ensure width and height are numbers
    const width = typeof data['width'] === 'number' ? data['width'] : 0;
    const height = typeof data['height'] === 'number' ? data['height'] : 0;
    
    if (width > 0 && height > 0) {
      return { width, height };
    }
  }
  
  // If canvas is provided, use its dimensions
  if (canvas) {
    return { width: canvas.width, height: canvas.height };
  }
  
  // Fallback: estimate dimensions based on data length
  // Assuming 4 bytes per pixel (RGBA)
  const totalPixels = data.length / 4;
  // Guess a square image if we don't know better
  const estimatedWidth = Math.sqrt(totalPixels);
  return { width: Math.round(estimatedWidth), height: Math.round(estimatedWidth) };
};

// Collection of filter effect implementations
export const filterEffects: Record<string, (data: Uint8ClampedArray, canvas?: { width: number, height: number }) => void> = {
  bw: (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = data[i + 1] = data[i + 2] = avg;
    }
  },
  
  sepia: (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
      data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
      data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
    }
  },
  
  vintage: (data: Uint8ClampedArray) => {
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
  },
  
  soft: (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.min(255, data[i] * 0.9 + 25);
      data[i + 1] = Math.min(255, data[i + 1] * 0.9 + 25);
      data[i + 2] = Math.min(255, data[i + 2] * 0.9 + 25);
    }
  },
  
  noir: (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      const newVal = avg * 1.2 - 30;
      data[i] = data[i + 1] = data[i + 2] = Math.min(255, Math.max(0, newVal));
    }
  },
  
  vivid: (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.min(255, data[i] * 1.1);
      data[i + 1] = Math.min(255, data[i + 1] * 1.1);
      data[i + 2] = Math.min(255, data[i + 2] * 1.1);
    }
  },
  
  dreamy: (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
      // Soft blue-tinted dreamy effect
      data[i] = Math.min(255, data[i] * 0.85 + 40); // Reduce red
      data[i + 1] = Math.min(255, data[i + 1] * 0.85 + 40); // Reduce green
      data[i + 2] = Math.min(255, data[i + 2] * 0.95 + 60); // Enhance blue
    }
  },
  
  retro70s: (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
      // 70s yellow-orange tint
      data[i] = Math.min(255, data[i] * 1.1 + 10); // Enhance red
      data[i + 1] = Math.min(255, data[i + 1] * 1.0 + 5); // Slight green
      data[i + 2] = Math.min(255, data[i + 2] * 0.7); // Reduce blue
    }
  },
  
  polaroid: (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
      // Polaroid-like washed out effect
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = Math.min(255, data[i] * 0.8 + avg * 0.2 + 15);
      data[i + 1] = Math.min(255, data[i + 1] * 0.8 + avg * 0.2 + 15);
      data[i + 2] = Math.min(255, data[i + 2] * 0.8 + avg * 0.2);
    }
  },
  
  cyberpunk: (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
      // High contrast neon cyberpunk effect
      data[i] = Math.min(255, Math.max(0, data[i] * 1.2 - 20)); // Enhance red
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] * 0.8 + 10)); // Modify green
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] * 1.5 - 10)); // Enhance blue
    }
  },
  
  faded: (data: Uint8ClampedArray) => {
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
  },
  
  // New vintage-themed filters
  vintageWarm: (data: Uint8ClampedArray, canvas?: { width: number, height: number }) => {
    const dimensions = getDimensions(data, canvas);
    const { width, height } = dimensions;
    
    for (let i = 0; i < data.length; i += 4) {
      // Golden-hour warm vintage effect
      data[i] = Math.min(255, data[i] * 1.1 + 15); // Enhance red
      data[i + 1] = Math.min(255, data[i + 1] * 0.95 + 10); // Slightly reduce green
      data[i + 2] = Math.min(255, data[i + 2] * 0.8); // Reduce blue significantly
      
      // Add vignette effect (darker corners)
      const x = (i / 4) % width;
      const y = Math.floor((i / 4) / width);
      
      if (x < width * 0.2 || x > width * 0.8 || y < height * 0.2 || y > height * 0.8) {
        data[i] = Math.max(0, data[i] * 0.85);
        data[i + 1] = Math.max(0, data[i + 1] * 0.85);
        data[i + 2] = Math.max(0, data[i + 2] * 0.85);
      }
    }
  },
  
  vintageCool: (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
      // Cool blue-tinted vintage effect
      data[i] = Math.min(255, data[i] * 0.85); // Reduce red
      data[i + 1] = Math.min(255, data[i + 1] * 0.9); // Slightly reduce green
      data[i + 2] = Math.min(255, data[i + 2] * 1.1 + 10); // Enhance blue
      
      // Add grain effect
      if (Math.random() > 0.98) {
        const grainAmount = Math.random() * 20 - 10;
        data[i] = Math.min(255, Math.max(0, data[i] + grainAmount));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + grainAmount));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + grainAmount));
      }
    }
  },
  
  vintageSepia: (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Enhanced sepia for antique photos
      data[i] = Math.min(255, (r * 0.44) + (g * 0.76) + (b * 0.22));
      data[i + 1] = Math.min(255, (r * 0.29) + (g * 0.69) + (b * 0.17));
      data[i + 2] = Math.min(255, (r * 0.17) + (g * 0.53) + (b * 0.13));
      
      // Add scratch effect occasionally
      if (Math.random() > 0.997) {
        const length = Math.floor(Math.random() * 30) + 5;
        for (let j = 0; j < length && i + j * 4 < data.length; j += 1) {
          data[i + j * 4] = 255;
          data[i + j * 4 + 1] = 255;
          data[i + j * 4 + 2] = 255;
        }
      }
    }
  },
  
  vintageFade: (data: Uint8ClampedArray, canvas?: { width: number, height: number }) => {
    const dimensions = getDimensions(data, canvas);
    const { width } = dimensions;
    
    for (let i = 0; i < data.length; i += 4) {
      // Memento faded memory effect
      data[i] = Math.min(255, data[i] * 0.8 + 50); // Washed out red
      data[i + 1] = Math.min(255, data[i + 1] * 0.8 + 50); // Washed out green
      data[i + 2] = Math.min(255, data[i + 2] * 0.9 + 40); // Slightly tinted blue
      
      // Light leaks on one edge (left side)
      const x = (i / 4) % width;
      if (x < width * 0.1) {
        const intensity = 1 - (x / (width * 0.1));
        data[i] = Math.min(255, data[i] + intensity * 60); // Add red light leak
        data[i + 1] = Math.min(255, data[i + 1] + intensity * 30); // Add some green
      }
    }
  }
};

// Apply adjustments to image data
export const applyAdjustments = (
  data: Uint8ClampedArray, 
  adjustments: { brightness: number; contrast: number; saturation: number }
) => {
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
};

