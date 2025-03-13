
import { FilterType } from '@/components/photobooth/FilterSelector';

export const applyCanvasFilter = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, filter: FilterType) => {
  console.log(`Applying filter: ${filter} to canvas`);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
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
        
        data[i] = Math.min(255, data[i] * 0.8);
        data[i + 1] = Math.min(255, data[i + 1] * 0.8);
        data[i + 2] = Math.min(255, data[i + 2] * 0.8);
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
    
    case 'none':
    default:
      break;
  }
  
  ctx.putImageData(imageData, 0, 0);
};
