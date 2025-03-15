
import html2canvas from 'html2canvas';
import { toast } from 'sonner';
import { downloadImage } from './imageProcessing';

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
    
    // Instead of capturing individual photos, capture the entire container with styling
    const canvas = await html2canvas(container, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      scale: 2, // Higher resolution
      logging: false // Disable logging for cleaner console
    });
    
    // Download the final image
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    const fileName = isWedding ? `wedding-photos-${formattedDate}` : `photo-strip-${formattedDate}`;
    await downloadImage(canvas, fileName);
    
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
