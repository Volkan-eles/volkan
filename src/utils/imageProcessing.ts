
// Helper functions for image processing

/**
 * Combines a user photo with an overlay image
 */
export const combineImages = (
  baseImage: HTMLImageElement | HTMLCanvasElement,
  overlayImage: HTMLImageElement | null,
  frameStyle: string = 'white'
): HTMLCanvasElement => {
  // Create canvas for the combined image
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not get canvas context');
  }
  
  // Set dimensions based on the base image
  canvas.width = baseImage.width;
  canvas.height = baseImage.height;
  
  // Draw the base image
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  
  // Apply subtle image enhancement
  ctx.globalCompositeOperation = 'overlay';
  ctx.globalAlpha = 0.1;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 1.0;
  ctx.globalCompositeOperation = 'source-over';
  
  // If overlay exists, draw it on top
  if (overlayImage) {
    // Calculate position to center the overlay
    const scaleRatio = Math.min(
      canvas.width / overlayImage.width,
      canvas.height / overlayImage.height
    ) * 0.95; // Scale up overlay
    
    const overlayWidth = overlayImage.width * scaleRatio;
    const overlayHeight = overlayImage.height * scaleRatio;
    const x = canvas.width - overlayWidth - 10;
    const y = canvas.height - overlayHeight - 10;
    
    // Add subtle shadow behind overlay
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    // Draw the overlay
    ctx.drawImage(overlayImage, x, y, overlayWidth, overlayHeight);
    
    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  }
  
  return canvas;
};

/**
 * Creates a photo strip from multiple images
 */
export const createPhotoStrip = (
  photos: HTMLCanvasElement[],
  frameStyle: string = 'white'
): HTMLCanvasElement => {
  // Create a new canvas for the photo strip
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not get canvas context');
  }
  
  if (photos.length === 0) return canvas;
  
  // Set the dimensions of the photo strip with higher resolution
  const photoWidth = 800; // Higher resolution
  const photoHeight = 600; // Higher resolution
  const padding = 20;
  
  canvas.width = photoWidth + (padding * 2);
  canvas.height = (photoHeight * photos.length) + (padding * (photos.length + 1));
  
  // Set background color based on frame style
  let bgColor = '#FFFFFF';
  if (frameStyle === 'black') bgColor = '#333333';
  if (frameStyle === 'red') bgColor = '#b32424';
  if (frameStyle === 'blue') bgColor = '#3b82f6';
  if (frameStyle === 'pink') bgColor = '#ec4899';
  if (frameStyle === 'yellow') bgColor = '#fde047';
  
  // Fill the background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw each photo with enhanced quality
  photos.forEach((photo, index) => {
    const y = padding + (index * (photoHeight + padding));
    
    // Add shadow effect for depth
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    
    ctx.drawImage(photo, padding, y, photoWidth, photoHeight);
    
    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    // Add border
    ctx.strokeStyle = frameStyle === 'white' || frameStyle === 'yellow' ? '#333' : '#fff';
    ctx.lineWidth = 2;
    ctx.strokeRect(padding, y, photoWidth, photoHeight);
  });
  
  // Add frame border
  ctx.strokeStyle = frameStyle === 'white' || frameStyle === 'yellow' ? '#333' : '#fff';
  ctx.lineWidth = 3;
  ctx.strokeRect(4, 4, canvas.width - 8, canvas.height - 8);
  
  // Add signature
  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = frameStyle === 'white' || frameStyle === 'yellow' ? '#333' : '#fff';
  ctx.textAlign = 'center';
  ctx.fillText('K-pop Frame', canvas.width / 2, canvas.height - 15);
  
  return canvas;
};

/**
 * Converts a canvas to a Blob (for downloading)
 */
export const canvasToBlob = (canvas: HTMLCanvasElement): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('Canvas to Blob conversion failed'));
      }
    }, 'image/png', 0.95); // Higher quality PNG
  });
};

/**
 * Creates a download link for an image
 */
export const downloadImage = async (canvas: HTMLCanvasElement, filename: string = 'photo-booth'): Promise<void> => {
  try {
    const blob = await canvasToBlob(canvas);
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the object URL
    setTimeout(() => URL.revokeObjectURL(url), 100);
  } catch (error) {
    console.error('Failed to download image:', error);
    throw error;
  }
};
