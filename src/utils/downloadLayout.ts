
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

    // Create a copy of the layout container to preserve original dimensions
    const tempContainer = layoutRef.current.cloneNode(true) as HTMLDivElement;
    
    // Preserve original aspect ratio and size
    const originalWidth = layoutRef.current.offsetWidth;
    const originalHeight = layoutRef.current.offsetHeight;
    
    // Apply original dimensions to the clone
    tempContainer.style.width = `${originalWidth}px`;
    tempContainer.style.height = `${originalHeight}px`;
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '-9999px';
    
    // Temporarily append to the document
    document.body.appendChild(tempContainer);
    
    // Find and remove any elements marked to be excluded from download
    Array.from(tempContainer.querySelectorAll('[data-html2canvas-ignore="true"]')).forEach(el => {
      el.remove();
    });
    
    // Fix image aspect ratios in the clone
    Array.from(tempContainer.querySelectorAll('img')).forEach((img) => {
      // Preserve object-fit properties
      img.style.objectFit = 'cover';
      img.style.width = '100%';
      img.style.height = '100%';
      
      // Ensure CORS is set properly
      img.crossOrigin = 'anonymous';
    });
    
    // Create a higher quality canvas
    const canvas = await html2canvas(tempContainer, {
      backgroundColor: bgColor === 'transparent' || bgColor === 'white' ? null : bgColor,
      useCORS: true,
      scale: 4, // Higher quality (increased from 2)
      logging: false,
      allowTaint: true,
      imageTimeout: 30000, // Increased timeout for image loading
      width: originalWidth, // Use original dimensions
      height: originalHeight,
      onclone: (document, clonedDoc) => {
        // Any additional modifications to the cloned document can go here
      },
    });
    
    // Remove the temporary container
    document.body.removeChild(tempContainer);
    
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
  
  // Prevent any scaling artifacts
  imgElement.style.imageRendering = "auto";
  
  // Ensure proper aspect ratio
  imgElement.style.objectFit = "cover";
  imgElement.style.width = "100%";
  imgElement.style.height = "100%";
};
