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
 * Based on the black background reference design
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
  
  // Set the dimensions for the wedding layout (16:10 aspect ratio)
  const canvasWidth = 1200;
  const canvasHeight = 750;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  
  // Set black background (matching the reference image)
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Calculate dimensions for the layout
  const padding = 40;
  const gutter = 20; // Space between photos
  
  // Calculate photo dimensions
  const leftSideWidth = (canvasWidth / 2) - (padding * 1.5);
  
  // Main large photo dimensions
  const mainPhotoWidth = leftSideWidth;
  const mainPhotoHeight = mainPhotoWidth * (9/16); // 16:9 aspect ratio
  
  // Small photos dimensions (3 in a row)
  const smallPhotoWidth = (leftSideWidth - (gutter * 2)) / 3;
  const smallPhotoHeight = smallPhotoWidth * (9/16); // 16:9 aspect ratio
  
  // Left side - photos
  if (photos.length > 0) {
    // Draw large photo on top
    ctx.drawImage(
      photos[0], 
      padding, 
      padding, 
      mainPhotoWidth, 
      mainPhotoHeight
    );
    
    // Calculate Y position for small photos (below main photo with some gap)
    const smallPhotoY = padding + mainPhotoHeight + gutter;
    
    // Draw up to 3 smaller photos in a row
    for (let i = 1; i < 4 && i < photos.length; i++) {
      const smallPhotoX = padding + ((i - 1) * (smallPhotoWidth + gutter));
      ctx.drawImage(
        photos[i], 
        smallPhotoX, 
        smallPhotoY, 
        smallPhotoWidth, 
        smallPhotoHeight
      );
    }
  }
  
  // Right side - couple name and date
  const textX = (canvasWidth / 2) + padding;
  const textAreaWidth = (canvasWidth / 2) - (padding * 2);
  
  // Add couple name with elegant script font
  ctx.font = "bold 100px 'Pinyon Script', cursive";
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Calculate position for the text to be centered
  const textY = canvas.height / 2;
  
  // Split the couple name to render it in two lines if needed
  if (coupleName.includes('&')) {
    const parts = coupleName.split('&');
    const firstName = parts[0].trim();
    const secondName = parts[1].trim();
    
    // Draw the first name
    ctx.fillText(firstName, textX + (textAreaWidth / 2), textY - 60);
    
    // Draw the & symbol
    ctx.font = "bold 80px 'Pinyon Script', cursive";
    ctx.fillText('&', textX + (textAreaWidth / 2), textY);
    
    // Draw the second name
    ctx.font = "bold 100px 'Pinyon Script', cursive";
    ctx.fillText(secondName, textX + (textAreaWidth / 2), textY + 60);
  } else {
    // If no ampersand, draw the name as is
    ctx.fillText(coupleName, textX + (textAreaWidth / 2), textY);
  }
  
  // Add wedding date
  ctx.font = "16px 'Arial', sans-serif";
  ctx.letterSpacing = "3px";
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(weddingDate, textX + (textAreaWidth / 2), textY + 120);
  
  // Add custom message at the bottom right
  ctx.font = "10px 'Arial', sans-serif";
  ctx.letterSpacing = "1px";
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.textAlign = 'right';
  ctx.fillText(customMessage.toUpperCase(), canvas.width - padding, canvas.height - padding);
  
  return canvas;
};

/**
 * Converts a canvas to a Blob (for downloading)
 */
export const canvasToBlob = (
  canvas: HTMLCanvasElement
): Promise<Blob> => {
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
export const downloadImage = async (
  canvas: HTMLCanvasElement, 
  filename: string = 'photo-booth'
): Promise<void> => {
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
