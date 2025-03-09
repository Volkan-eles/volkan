
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
    const scaleRatio = Math.min(
      canvas.width / overlayImage.width,
      canvas.height / overlayImage.height
    ) * 0.9; // Scale to 90% of the possible size
    
    const overlayWidth = overlayImage.width * scaleRatio;
    const overlayHeight = overlayImage.height * scaleRatio;
    
    // Position the overlay - bottom right corner with some padding
    const x = canvas.width - overlayWidth - 20;
    const y = canvas.height - overlayHeight - 20;
    
    // Draw the overlay
    ctx.drawImage(overlayImage, x, y, overlayWidth, overlayHeight);
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
  
  // Set the dimensions of the photo strip - use higher resolution
  const photoWidth = 800; // Increased from 400
  const photoHeight = 600; // Increased from 300
  const padding = 15;
  
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
  
  // Add a decorative pattern based on frame style
  if (frameStyle === 'pink' || frameStyle === 'yellow') {
    ctx.fillStyle = frameStyle === 'pink' ? '#fecdd3' : '#fef3c7';
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = 8 + Math.random() * 20;
      
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Load and draw each photo
  const loadAndDrawPhotos = async () => {
    for (let i = 0; i < photos.length; i++) {
      const img = new Image();
      img.src = photos[i].toDataURL('image/png', 1.0);
      await new Promise<void>((resolve) => {
        img.onload = () => {
          const y = padding + (i * (photoHeight + padding));
          // Apply improved shadow for depth
          if (frameStyle !== 'white') {
            ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
          }
          ctx.drawImage(img, padding, y, photoWidth, photoHeight);
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          resolve();
        };
      });
    }
    
    // Add frame decoration if needed
    if (frameStyle === 'white' || frameStyle === 'yellow') {
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 3;
      ctx.strokeRect(4, 4, canvas.width - 8, canvas.height - 8);
    }
    
    // Add signature/branding to the photo strip
    ctx.font = 'bold 18px sans-serif';
    ctx.fillStyle = frameStyle === 'white' || frameStyle === 'yellow' ? '#333' : '#fff';
    ctx.textAlign = 'center';
    ctx.fillText('K-pop Frame', canvas.width / 2, canvas.height - 12);
  };
  
  loadAndDrawPhotos();
  
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
    }, 'image/png', 0.95); // Higher quality setting
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
