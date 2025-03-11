
import html2canvas from 'html2canvas';
import { toast } from 'sonner';

export const downloadLayoutImage = async (layoutRef: React.RefObject<HTMLDivElement>, selectedLayout: string, bgColor: string) => {
  if (!layoutRef.current) {
    toast.error("Layout component not found");
    return;
  }

  try {
    toast.loading("Preparing download...");
    
    const canvas = await html2canvas(layoutRef.current, {
      backgroundColor: bgColor === 'transparent' || bgColor === 'white' ? null : bgColor,
      useCORS: true,
      scale: 2, // Higher quality
      logging: false, // Reduce console noise
      allowTaint: true,
    });
    
    const dataUrl = canvas.toDataURL('image/png');
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
