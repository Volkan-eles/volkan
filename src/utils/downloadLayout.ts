
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
    toast.loading("Preparing high-quality download...");
    
    // First, ensure all images are fully loaded
    await preloadAllImages(layoutRef.current);
    
    // Allow a brief moment for any transitions or final renders
    await new Promise(resolve => setTimeout(resolve, 200));

    // Get the original dimensions before cloning
    const originalWidth = layoutRef.current.offsetWidth;
    const originalHeight = layoutRef.current.offsetHeight;
    
    // Create a deep clone of the layout to avoid modifying the original
    const tempContainer = layoutRef.current.cloneNode(true) as HTMLDivElement;
    
    // Set fixed dimensions to prevent responsive scaling during capture
    tempContainer.style.width = `${originalWidth}px`;
    tempContainer.style.height = `${originalHeight}px`;
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '-9999px';
    tempContainer.style.overflow = 'hidden';
    
    // Temporarily append to the document
    document.body.appendChild(tempContainer);
    
    // Find and remove any elements marked to be excluded from download
    Array.from(tempContainer.querySelectorAll('[data-html2canvas-ignore="true"]')).forEach(el => {
      el.remove();
    });
    
    // Fix aspect ratios for all image containers
    Array.from(tempContainer.querySelectorAll('.image-container, .high-quality-image-container')).forEach((container: HTMLElement) => {
      container.style.position = 'relative';
      container.style.overflow = 'hidden';
      container.style.display = 'flex';
      container.style.alignItems = 'center';
      container.style.justifyContent = 'center';
      
      // Ensure container maintains aspect ratio
      if (!container.style.aspectRatio) {
        container.style.aspectRatio = '1/1';
      }
    });
    
    // Properly style all images in the clone to preserve quality
    Array.from(tempContainer.querySelectorAll('img')).forEach((img: HTMLImageElement) => {
      // Apply explicit styling to ensure proper rendering
      img.style.objectFit = 'cover';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.display = 'block';
      img.style.position = 'relative';
      img.style.maxWidth = 'none'; // Prevent max-width constraint
      img.style.maxHeight = 'none'; // Prevent max-height constraint
      
      // Apply high-quality rendering
      img.style.imageRendering = 'high-quality';
      
      // Parent container enforces aspect ratio - ensure image fills it completely
      if (img.parentElement) {
        img.parentElement.style.overflow = 'hidden';
        
        if (img.parentElement.style.aspectRatio === '') {
          img.parentElement.style.aspectRatio = '1/1';
        }
      }
      
      // Set CORS attributes
      img.crossOrigin = 'anonymous';
      
      // Force reload if needed (helps with CORS issues)
      const originalSrc = img.src;
      if (originalSrc.startsWith('http') && !originalSrc.includes('?')) {
        img.src = `${originalSrc}?${new Date().getTime()}`;
      }
    });
    
    // Create a higher quality canvas with increased pixel density
    const canvas = await html2canvas(tempContainer, {
      backgroundColor: bgColor === 'transparent' || bgColor === 'white' ? null : bgColor,
      useCORS: true,
      scale: 5, // Higher quality for sharper images (increased from 4 to 5)
      logging: false,
      allowTaint: true,
      imageTimeout: 30000, // Increased timeout for image loading
      width: originalWidth,
      height: originalHeight,
      onclone: (document, clonedDoc) => {
        // Apply high-quality rendering to all images
        const clonedImages = clonedDoc.querySelectorAll('img');
        clonedImages.forEach((img: HTMLImageElement) => {
          img.style.objectFit = 'cover';
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.imageRendering = 'high-quality';
          img.style.maxWidth = 'none';
          img.style.maxHeight = 'none';
        });
      },
    });
    
    // Remove the temporary container
    document.body.removeChild(tempContainer);
    
    // Convert to high-quality PNG with maximum quality
    const dataUrl = canvas.toDataURL('image/png', 1.0);
    
    // Create and trigger download
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `photo-layout-${selectedLayout}-hq.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.dismiss();
    toast.success("High-quality layout downloaded successfully!");
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
  
  // Improve rendering quality
  imgElement.style.imageRendering = "high-quality";
  
  // Ensure proper aspect ratio preservation
  imgElement.style.objectFit = "cover";
  imgElement.style.width = "100%";
  imgElement.style.height = "100%";
  imgElement.style.maxWidth = "none";
  imgElement.style.maxHeight = "none";
};
