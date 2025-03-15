
import html2canvas from 'html2canvas';
import { toast } from 'sonner';
import { createPhotoStrip, createWeddingLayout, downloadImage } from './imageProcessing';

export const downloadPhotoStrip = async (
  setIsDownloading: (value: boolean) => void,
  isWedding: boolean = false
) => {
  try {
    setIsDownloading(true);
    toast.loading(isWedding ? 'Creating your wedding photo memories...' : 'Creating your photo strip...');
    
    // Get the container element
    const container = document.getElementById('photo-strip-container');
    if (!container) {
      throw new Error('Photo strip container not found');
    }
    
    // Get the individual photo elements within the strip
    const photoElements = container.querySelectorAll('[id^="photo-item-"]');
    if (photoElements.length === 0) {
      throw new Error('No photos found in the strip');
    }
    
    // Convert each photo element to a canvas
    const photoCanvases = await Promise.all(
      Array.from(photoElements).map(async (photoElement) => {
        const canvas = await html2canvas(photoElement as HTMLElement, {
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          scale: 2, // Higher resolution
          logging: false // Disable logging for cleaner console
        });
        return canvas;
      })
    );
    
    let finalCanvas;
    if (isWedding) {
      // For wedding template, create a wedding layout
      
      // Get wedding details from the container
      const coupleNameElement = container.querySelector('[title="Click to edit couple names"]');
      const weddingDateElement = container.querySelector('[title="Click to edit wedding date"]');
      const customMessageElement = container.querySelector('[title="Click to edit message"]');
      
      const coupleName = coupleNameElement ? coupleNameElement.textContent || 'Pauline & Hariss' : 'Pauline & Hariss';
      const weddingDate = weddingDateElement ? weddingDateElement.textContent || 'MARCH 3, 2028' : 'MARCH 3, 2028';
      const customMessage = customMessageElement ? customMessageElement.textContent || 'DOWNLOAD YOUR PHOTO AT YOUR WEBSITE HERE' : 'DOWNLOAD YOUR PHOTO AT YOUR WEBSITE HERE';
      
      finalCanvas = createWeddingLayout(photoCanvases, coupleName, weddingDate, customMessage);
    } else {
      // For regular photo strips, create a strip layout
      finalCanvas = createPhotoStrip(photoCanvases, 'white');
    }
    
    // Download the final image
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    const fileName = isWedding ? `wedding-photos-${formattedDate}` : `photo-strip-${formattedDate}`;
    await downloadImage(finalCanvas, fileName);
    
    setIsDownloading(false);
    toast.dismiss();
    toast.success(isWedding ? 'Wedding photos saved successfully!' : 'Photo strip saved successfully!');
    
  } catch (error) {
    console.error('Error downloading photo strip:', error);
    setIsDownloading(false);
    toast.dismiss();
    toast.error('Failed to download photos. Please try again.');
  }
};
