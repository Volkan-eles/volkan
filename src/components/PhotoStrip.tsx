
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
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
    
    // Fill the background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
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
    };
    
    loadAndDrawPhotos();
  }, [photos, frameStyle]);

  const handleDownload = async () => {
    if (canvasRef.current) {
      try {
        await downloadImage(canvasRef.current, 'celebrity-photo-strip');
      } catch (error) {
        console.error('Failed to download photo strip:', error);
      }
    }
  };

  if (photos.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8">
        <p className="text-gray-500 text-center">
          Take photos to create your photo strip
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className={`photo-frame photo-frame-${frameStyle} mb-4 animate-fade-in`}>
        <canvas 
          ref={canvasRef} 
          className="max-w-full"
        />
      </div>
      
      <Button
        onClick={handleDownload}
        className="bg-booth-green text-black hover:bg-booth-green/90 shadow-sm hover:shadow-md transition-all animate-fade-in"
      >
        <Download className="mr-2 h-4 w-4" />
        Save as PNG
      </Button>
    </div>
  );
};

export default PhotoStrip;
