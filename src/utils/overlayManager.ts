
import { toast } from 'sonner';

export interface OverlayItem {
  id: string;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  scale: number;
}

// Initialize a new overlay with default properties
export const createOverlayItem = (id: string, src: string): OverlayItem => {
  return {
    id,
    src,
    x: 0, // Will be positioned by the component
    y: 0, // Will be positioned by the component
    width: 0, // Will be calculated when image loads
    height: 0, // Will be calculated when image loads
    rotation: 0,
    opacity: 1,
    scale: 1,
  };
};

// Calculate position for an overlay to place it at the bottom right
export const positionOverlayBottomRight = (
  overlay: OverlayItem,
  containerWidth: number,
  containerHeight: number,
  padding = 10
): OverlayItem => {
  // Clone the overlay to avoid mutating the original
  const updated = { ...overlay };
  
  // Position at bottom right with padding
  updated.x = containerWidth - overlay.width * overlay.scale - padding;
  updated.y = containerHeight - overlay.height * overlay.scale - padding;
  
  return updated;
};

// Draw multiple overlays on a canvas context
export const drawOverlays = (
  ctx: CanvasRenderingContext2D,
  overlays: OverlayItem[],
  images: Record<string, HTMLImageElement>
) => {
  overlays.forEach((overlay) => {
    const image = images[overlay.id];
    if (!image) return;
    
    try {
      ctx.save();
      
      // Set global alpha for opacity
      ctx.globalAlpha = overlay.opacity;
      
      // Move to the position where the center of the image will be
      const centerX = overlay.x + (overlay.width * overlay.scale) / 2;
      const centerY = overlay.y + (overlay.height * overlay.scale) / 2;
      
      // Translate to the center point, rotate, then translate back
      ctx.translate(centerX, centerY);
      ctx.rotate((overlay.rotation * Math.PI) / 180);
      ctx.translate(-centerX, -centerY);
      
      // Draw the image at the position with scaling
      ctx.drawImage(
        image,
        overlay.x,
        overlay.y,
        overlay.width * overlay.scale,
        overlay.height * overlay.scale
      );
      
      ctx.restore();
    } catch (error) {
      console.error('Error drawing overlay:', error);
    }
  });
};
