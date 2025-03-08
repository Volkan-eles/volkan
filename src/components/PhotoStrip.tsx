
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share2 } from 'lucide-react';
import { downloadImage } from '@/utils/imageProcessing';

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

    // Set dimensions for the photo strip
    const photoWidth = 400;
    const photoHeight = 300;
    const padding = 10;
    
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
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = 5 + Math.random() * 15;
        
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
            ctx.drawImage(img, padding, y, photoWidth, photoHeight);
            resolve();
          };
        });
      }
      
      // Add frame decoration if needed
      if (frameStyle === 'white' || frameStyle === 'yellow') {
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.strokeRect(3, 3, canvas.width - 6, canvas.height - 6);
      }
      
      // Add signature/branding to the photo strip
      ctx.font = '14px sans-serif';
      ctx.fillStyle = frameStyle === 'white' || frameStyle === 'yellow' ? '#333' : '#fff';
      ctx.textAlign = 'center';
      ctx.fillText('CatFrame', canvas.width / 2, canvas.height - 6);
    };
    
    loadAndDrawPhotos();
  }, [photos, frameStyle]);

  const handleDownload = async () => {
    if (canvasRef.current) {
      try {
        await downloadImage(canvasRef.current, 'cat-photo-strip');
      } catch (error) {
        console.error('Failed to download photo strip:', error);
      }
    }
  };

  if (photos.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8">
        <p className="text-gray-500 text-center">
          Take photos with your favorite cat overlays to create your photo strip
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className={`photo-frame photo-frame-${frameStyle} mb-4 animate-fade-in rounded-lg overflow-hidden`}>
        <canvas 
          ref={canvasRef} 
          className="max-w-full"
        />
      </div>
      
      <div className="flex space-x-3">
        <Button
          onClick={handleDownload}
          className="bg-booth-green text-black hover:bg-booth-green/90 shadow-sm hover:shadow-md transition-all animate-fade-in"
        >
          <Download className="mr-2 h-4 w-4" />
          Save as PNG
        </Button>
      </div>
    </div>
  );
};

export default PhotoStrip;
