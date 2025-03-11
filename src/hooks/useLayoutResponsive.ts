
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const updateLayoutSize = () => {
      const width = window.innerWidth;
      
      if (layout.includes('strip') || layout === 'diagonal-strips') {
        if (width < 640) { // sm
          setLayoutSize({
            maxWidth: '320px',
            padding: '0.5rem',
            aspectRatio: '1/2'
          });
        } else if (width < 1024) { // md
          setLayoutSize({
            maxWidth: '380px',
            padding: '0.75rem',
            aspectRatio: '1/2.2'
          });
        } else { // lg
          setLayoutSize({
            maxWidth: '450px',
            padding: '1rem',
            aspectRatio: '1/2.3'
          });
        }
      } else if (layout === 'grid' || layout === 'simple-grid' || layout === 'classic-grid') {
        if (width < 640) {
          setLayoutSize({
            maxWidth: '360px',
            padding: '0.5rem',
            aspectRatio: '4/5'
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
        if (width < 640) {
          setLayoutSize({
            maxWidth: '340px',
            padding: '0.5rem',
            aspectRatio: '3/4'
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
  }, [layout]);

  return layoutSize;
};
