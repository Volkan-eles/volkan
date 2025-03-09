
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share2, Twitter, Facebook } from 'lucide-react';
import { downloadImage } from '@/utils/imageProcessing';
import { toast } from 'sonner';

interface PhotoStripProps {
  photos: string[];
  frameStyle: string;
}

const PhotoStrip: React.FC<PhotoStripProps> = ({ photos, frameStyle }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || photos.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set dimensions for the photo strip - we use higher resolution canvas 
    // for better quality downloads, but display at appropriate size with CSS
    const photoWidth = 800;
    const photoHeight = 600;
    const padding = 15;
    
    canvas.width = photoWidth + (padding * 2);
    canvas.height = (photoHeight * photos.length) + (padding * (photos.length + 1));
    
    // Set frame background color
    let bgColor = '#FFFFFF';
    if (frameStyle === 'black') bgColor = '#333333';
    if (frameStyle === 'red') bgColor = '#b32424';
    if (frameStyle === 'blue') bgColor = '#3b82f6';
    if (frameStyle === 'pink') bgColor = '#ec4899';
    if (frameStyle === 'yellow') bgColor = '#fde047';
    
    // Fill the background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add a decorative pattern based on frame style
    if (frameStyle === 'pink' || frameStyle === 'yellow') {
      ctx.fillStyle = frameStyle === 'pink' ? '#fecdd3' : '#fef3c7';
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = 8 + Math.random() * 20;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Load and draw each photo
    const loadAndDrawPhotos = async () => {
      for (let i = 0; i < photos.length; i++) {
        const img = new Image();
        img.src = photos[i];
        await new Promise<void>((resolve) => {
          img.onload = () => {
            const y = padding + (i * (photoHeight + padding));
            
            // Apply shadow for a nicer look
            if (frameStyle !== 'white') {
              ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
              ctx.shadowBlur = 10;
              ctx.shadowOffsetX = 3;
              ctx.shadowOffsetY = 3;
            }
            
            ctx.drawImage(img, padding, y, photoWidth, photoHeight);
            
            // Reset shadow
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            
            resolve();
          };
        });
      }
      
      // Add frame decoration if needed
      if (frameStyle === 'white' || frameStyle === 'yellow') {
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 3;
        ctx.strokeRect(4, 4, canvas.width - 8, canvas.height - 8);
      }
      
      // Add signature/branding to the photo strip
      ctx.font = 'bold 18px sans-serif';
      ctx.fillStyle = frameStyle === 'white' || frameStyle === 'yellow' ? '#333' : '#fff';
      ctx.textAlign = 'center';
      ctx.fillText('K-pop Frame', canvas.width / 2, canvas.height - 12);
    };
    
    loadAndDrawPhotos();
  }, [photos, frameStyle]);

  const handleDownload = async () => {
    if (canvasRef.current) {
      try {
        await downloadImage(canvasRef.current, 'kpop-photo-strip');
        toast.success('Photo strip saved to your device!');
      } catch (error) {
        console.error('Failed to download photo strip:', error);
        toast.error('Failed to download photo strip');
      }
    }
  };

  const handleShare = (platform: 'twitter' | 'facebook') => {
    if (!canvasRef.current) return;
    
    // Convert canvas to data URL
    const dataUrl = canvasRef.current.toDataURL('image/png');
    
    // Share text
    const shareText = 'Check out my K-pop photo with favorite idols! #KpopFrame';
    
    // Prepare share URL
    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`;
      window.open(shareUrl, '_blank');
      toast.success('Sharing to Twitter!');
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`;
      window.open(shareUrl, '_blank');
      toast.success('Sharing to Facebook!');
    }
  };

  if (photos.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8">
        <p className="text-gray-500 text-center">
          Take photos with your favorite K-pop idol overlays to create your photo strip
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className={`photo-frame photo-frame-${frameStyle} mb-4 animate-fade-in rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}>
        <canvas 
          ref={canvasRef} 
          className="max-w-full"
          style={{ maxHeight: '600px' }}
        />
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          onClick={handleDownload}
          className="bg-booth-green text-black hover:bg-booth-green/90 shadow-sm hover:shadow-md transition-all animate-fade-in"
        >
          <Download className="mr-2 h-4 w-4" />
          Save as PNG
        </Button>
        
        <Button
          onClick={() => handleShare('twitter')}
          className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 shadow-sm hover:shadow-md transition-all animate-fade-in"
        >
          <Twitter className="mr-2 h-4 w-4" />
          Twitter
        </Button>
        
        <Button
          onClick={() => handleShare('facebook')}
          className="bg-[#4267B2] text-white hover:bg-[#4267B2]/90 shadow-sm hover:shadow-md transition-all animate-fade-in"
        >
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </Button>
      </div>
    </div>
  );
};

export default PhotoStrip;
