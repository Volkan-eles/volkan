
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
 * Creates a wedding-style photo layout with one large photo and three smaller ones
 */
export const createWeddingLayout = (
  photos: HTMLCanvasElement[],
  coupleName: string = 'Pauline & Hariss',
  weddingDate: string = 'MARCH 3, 2028',
  customMessage: string = 'DOWNLOAD YOUR PHOTO AT YOUR WEBSITE HERE'
): HTMLCanvasElement => {
  // Create a new canvas for the wedding layout
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not get canvas context');
  }
  
  if (photos.length === 0) return canvas;
  
  // Set the dimensions for the wedding layout (16:9 aspect ratio)
  const canvasWidth = 1200;
  const canvasHeight = 800;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  
  // Set white background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add elegant border
  ctx.strokeStyle = '#E5E5E5';
  ctx.lineWidth = 2;
  ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);
  
  const padding = 40;
  const photoAreaWidth = (canvas.width / 2) - (padding * 1.5);
  
  if (photos.length > 0) {
    // Draw large photo on top
    const mainPhotoHeight = photoAreaWidth * (3/4);
    ctx.drawImage(photos[0], padding, padding, photoAreaWidth, mainPhotoHeight);
    
    // Draw smaller photos below if available
    const smallPhotoWidth = (photoAreaWidth - padding) / 3;
    const smallPhotoHeight = smallPhotoWidth * (3/4);
    const smallPhotoY = padding + mainPhotoHeight + (padding / 2);
    
    // Draw up to 3 smaller photos
    for (let i = 1; i < 4 && i < photos.length; i++) {
      const smallPhotoX = padding + ((i - 1) * (smallPhotoWidth + (padding / 3)));
      ctx.drawImage(photos[i], smallPhotoX, smallPhotoY, smallPhotoWidth, smallPhotoHeight);
    }
  }
  
  // Add couple name and wedding date on the right side
  const textX = (canvas.width / 2) + padding;
  const textY = canvas.height / 2 - 50;
  
  // Add decorative elements
  ctx.fillStyle = '#E5E5E5';
  const decorSize = 5;
  for (let i = 0; i < 5; i++) {
    const decorX = textX + (photoAreaWidth / 2) - (decorSize * 5) + (i * decorSize * 2);
    const decorY = textY + 80;
    ctx.beginPath();
    ctx.arc(decorX, decorY, decorSize / 2, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Add couple name with a more elegant font
  ctx.font = "72px 'Pinyon Script', cursive";
  ctx.fillStyle = '#333333';
  ctx.textAlign = 'center';
  ctx.fillText(coupleName, textX + (photoAreaWidth / 2), textY);
  
  // Add wedding date
  ctx.font = "16px 'Arial', sans-serif";
  ctx.letterSpacing = "3px";
  ctx.fillStyle = '#555555';
  ctx.fillText(weddingDate, textX + (photoAreaWidth / 2), textY + 60);
  
  // Add custom message at the bottom
  ctx.font = "12px 'Arial', sans-serif";
  ctx.fillStyle = '#888888';
  ctx.fillText(customMessage, canvas.width / 2, canvas.height - 25);
  
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
