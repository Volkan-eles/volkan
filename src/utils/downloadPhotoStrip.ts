
import html2canvas from 'html2canvas';
import { toast } from 'sonner';

export const downloadPhotoStrip = async (setIsDownloading: (value: boolean) => void) => {
  setIsDownloading(true);
  
  try {
    toast.loading('Creating your photo strip...');
    
    // Find the strip container - look for the specific ID we added
    const stripContainer = document.getElementById('photo-strip-container');
    
    if (!stripContainer) {
      toast.error('Could not find the photo strip element');
      setIsDownloading(false);
      return;
    }
    
    // Create a clone to avoid modifying the original during capturing
    const clonedContainer = stripContainer.cloneNode(true) as HTMLElement;
    clonedContainer.style.position = 'absolute';
    clonedContainer.style.left = '-9999px';
    clonedContainer.style.top = '0';
    
    // Add to the document body temporarily
    document.body.appendChild(clonedContainer);
    
    // Set all images to crossOrigin anonymous
    Array.from(clonedContainer.querySelectorAll('img')).forEach(img => {
      img.crossOrigin = 'anonymous';
      img.style.maxWidth = 'none';
      img.style.maxHeight = 'none';
    });
    
    // Render with higher quality settings
    const canvas = await html2canvas(clonedContainer, {
      scale: 4, // Higher scale for better quality
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: null,
      onclone: (doc, clone) => {
        // Additional adjustments to the clone
        Array.from(clone.querySelectorAll('img')).forEach(img => {
          img.crossOrigin = 'anonymous';
          img.style.imageRendering = 'high-quality';
        });
      }
    });
    
    // Remove the cloned element
    document.body.removeChild(clonedContainer);
    
    // Convert to high-quality PNG
    const dataUrl = canvas.toDataURL('image/png', 1.0);
    
    // Create and trigger download
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
    link.download = `pica-pica-photostrip-${timestamp}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.dismiss();
    toast.success('Photo strip downloaded successfully!');
  } catch (error) {
    console.error('Error downloading photo strip:', error);
    toast.error('Failed to download photo strip. Please try again.');
  } finally {
    setIsDownloading(false);
  }
};
