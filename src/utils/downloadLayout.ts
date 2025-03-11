
import html2canvas from 'html2canvas';
import { toast } from 'sonner';

export const downloadLayoutImage = async (layoutRef: React.RefObject<HTMLDivElement>, selectedLayout: string, bgColor: string) => {
  if (!layoutRef.current) {
    toast.error("Layout component not found");
    return;
  }

  try {
    toast.loading("Preparing download...");
    
    // Use higher scale factor for better resolution
    const scale = 4; // Increased from 2 to 4 for higher quality
    
    // Calculate optimal dimensions to maintain aspect ratio
    const originalWidth = layoutRef.current.offsetWidth;
    const originalHeight = layoutRef.current.offsetHeight;
    
    // Apply html2canvas with enhanced settings
    const canvas = await html2canvas(layoutRef.current, {
      backgroundColor: bgColor === 'transparent' || bgColor === 'white' ? null : bgColor,
      useCORS: true,
      scale: scale, // Higher quality
      logging: false, // Reduce console noise
      allowTaint: true,
      ignoreElements: (element) => {
        return element.hasAttribute('data-html2canvas-ignore') || 
               element.getAttribute('data-html2canvas-ignore') === 'true';
      },
      width: originalWidth,
      height: originalHeight,
      imageTimeout: 0, // No timeout for image loading
      onclone: (clonedDoc) => {
        // Find all images in the cloned document and optimize them
        const images = clonedDoc.querySelectorAll('img');
        images.forEach(img => {
          // Preserve original dimensions
          img.style.objectFit = 'contain';
          img.setAttribute('crossorigin', 'anonymous');
        });
        return clonedDoc;
      }
    });
    
    // Use higher quality when converting to PNG
    const dataUrl = canvas.toDataURL('image/png', 1.0); // Maximum quality setting
    
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `photo-layout-${selectedLayout}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.dismiss();
    toast.success("Layout downloaded successfully!");
  } catch (error) {
    console.error("Download error:", error);
    toast.dismiss();
    toast.error("Failed to download layout");
  }
};
