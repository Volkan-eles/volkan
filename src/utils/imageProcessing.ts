
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
  
  // If overlay exists, draw it on top
  if (overlayImage) {
    // Calculate position to center the overlay
    const overlayWidth = canvas.width;
    const overlayHeight = overlayImage.height * (canvas.width / overlayImage.width);
    const y = canvas.height - overlayHeight;
    
    // Draw the overlay
    ctx.drawImage(overlayImage, 0, y, overlayWidth, overlayHeight);
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
  
  // Set the dimensions of the photo strip
  const photoWidth = photos[0].width;
  const photoHeight = photos[0].height;
  const padding = 10;
  
  canvas.width = photoWidth + (padding * 2);
  canvas.height = (photoHeight * photos.length) + (padding * (photos.length + 1));
  
  // Set background color based on frame style
  let bgColor = '#FFFFFF';
  if (frameStyle === 'black') bgColor = '#333333';
  if (frameStyle === 'red') bgColor = '#b32424';
  
  // Fill the background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw each photo
  photos.forEach((photo, index) => {
    const y = padding + (index * (photoHeight + padding));
    ctx.drawImage(photo, padding, y, photoWidth, photoHeight);
  });
  
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
    }, 'image/png');
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
