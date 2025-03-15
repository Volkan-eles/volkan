
import { FilterEffectConfig } from './types';

// Collection of filter effect implementations
export const filterEffects: Record<string, (data: Uint8ClampedArray) => void> = {
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
