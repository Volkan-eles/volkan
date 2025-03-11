
import { useEffect, useState } from 'react';
import { useIsMobile } from './use-mobile';

type LayoutSize = {
  maxWidth: string;
  padding: string;
  aspectRatio: string;
};

export const useLayoutResponsive = (layout: string) => {
  const [layoutSize, setLayoutSize] = useState<LayoutSize>({
    maxWidth: '450px',
    padding: '0.75rem',
    aspectRatio: '1/2.3'
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    const updateLayoutSize = () => {
      const width = window.innerWidth;
      
      if (layout.includes('strip') || layout === 'diagonal-strips') {
        if (isMobile) {
          setLayoutSize({
            maxWidth: '85%',  // Slightly wider on mobile for strip layouts
            padding: '0.5rem',
            aspectRatio: '1/1.8'
          });
        } else if (width < 1024) {
          setLayoutSize({
            maxWidth: '360px', // Wider for better aesthetic look
            padding: '0.75rem',
            aspectRatio: '1/2'
          });
        } else {
          setLayoutSize({
            maxWidth: '380px', // Wider like in the second image
            padding: '1rem',
            aspectRatio: '1/2'
          });
        }
      } else if (layout === 'grid' || layout === 'simple-grid' || layout === 'classic-grid') {
        if (isMobile) {
          setLayoutSize({
            maxWidth: '100%',
            padding: '0.5rem',
            aspectRatio: '1/1'
          });
        } else if (width < 1024) {
          setLayoutSize({
            maxWidth: '480px',
            padding: '0.75rem',
            aspectRatio: '1/1'
          });
        } else {
          setLayoutSize({
            maxWidth: '600px',
            padding: '1rem',
            aspectRatio: '1/1'
          });
        }
      } else {
        if (isMobile) {
          setLayoutSize({
            maxWidth: '100%',
            padding: '0.5rem',
            aspectRatio: '4/5'
          });
        } else if (width < 1024) {
          setLayoutSize({
            maxWidth: '420px',
            padding: '0.75rem',
            aspectRatio: '3/4'
          });
        } else {
          setLayoutSize({
            maxWidth: '500px',
            padding: '1rem',
            aspectRatio: '3/4'
          });
        }
      }
    };

    updateLayoutSize();
    window.addEventListener('resize', updateLayoutSize);
    return () => window.removeEventListener('resize', updateLayoutSize);
  }, [layout, isMobile]);

  return layoutSize;
};
