import html2canvas from 'html2canvas';
import { toast } from 'sonner';

/**
 * Loads all images within a container to ensure they're fully rendered before capturing
 * @param container The container element with images
 * @returns A promise that resolves when all images are loaded
 */
const preloadAllImages = async (container: HTMLElement): Promise<void> => {
  const images = Array.from(container.querySelectorAll('img'));
  
  if (images.length === 0) return Promise.resolve();
  
  const loadPromises = images.map(img => {
    // If image is already loaded, resolve immediately
    if (img.complete) return Promise.resolve();
    
    // Otherwise wait for it to load
    return new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => {
        console.warn(`Failed to load image: ${img.src}`);
        resolve(); // Resolve anyway to not block the process
      };
    });
  });
  
  return Promise.all(loadPromises).then(() => {});
};

export const downloadLayoutImage = async (layoutRef: React.RefObject<HTMLDivElement>, selectedLayout: string, bgColor: string) => {
  if (!layoutRef.current) {
    toast.error("Layout component not found");
    return;
  }

  try {
    toast.loading("Preparing download...");
    
    // First, ensure all images are fully loaded
    await preloadAllImages(layoutRef.current);
    
    // Allow a brief moment for any transitions or final renders
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Create a higher quality canvas
    const canvas = await html2canvas(layoutRef.current, {
      backgroundColor: bgColor === 'transparent' || bgColor === 'white' ? null : bgColor,
      useCORS: true,
      scale: 4, // Higher quality (increased from 2)
      logging: false,
      allowTaint: true,
      onclone: (document, clonedDoc) => {
        // Additional modifications to the cloned document before rendering
        const clonedElement = clonedDoc.querySelector('[data-html2canvas-ignore]');
        if (clonedElement) {
          clonedElement.remove();
        }
      },
      ignoreElements: (element) => {
        return element.hasAttribute('data-html2canvas-ignore') || 
               element.getAttribute('data-html2canvas-ignore') === 'true';
      },
      imageTimeout: 30000, // Increased timeout for image loading
      width: layoutRef.current.offsetWidth, // Explicitly set width
      height: layoutRef.current.offsetHeight, // Explicitly set height
    });
    
    // Convert to high-quality PNG
    const dataUrl = canvas.toDataURL('image/png', 1.0); // Maximum quality setting
    
    // Create and trigger download
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

// Helper function to improve image rendering in the layouts
export const optimizeImageRendering = (imgElement: HTMLImageElement): void => {
  if (!imgElement) return;
  
  // Set crossOrigin for CORS images
  imgElement.crossOrigin = "anonymous";
  
  // Set loading priority
  imgElement.loading = "eager";
  
  // Ensure proper rendering
  imgElement.decoding = "sync";
  
  // Prevent any scaling artifacts by using pixelated rendering
  imgElement.style.imageRendering = "auto";
};
