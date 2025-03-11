
import { useIsMobile } from './use-mobile';

export const useMobileLayout = (layout: string) => {
  const isMobile = useIsMobile();

  const getMobileStyles = () => {
    if (!isMobile) return {};

    // Adjust spacing and sizes based on layout type
    switch (layout) {
      case 'grid':
      case 'simple-grid':
      case 'classic-grid':
        return {
          gap: '0.5rem',
          padding: '0.5rem',
          textSize: 'text-xs',
        };
      case 'diagonal-strips':
      case 'classic-strip':
      case 'vertical-strip':
      case 'elegant-strip':
        return {
          gap: '0.5rem',
          padding: '0.5rem',
          textSize: 'text-xs',
          width: '85%', // Make more narrow on mobile
        };
      case 'creative-overlap':
      case 'big-small':
        return {
          gap: '0.5rem',
          padding: '0.375rem',
          textSize: 'text-xs',
        };
      default:
        return {
          gap: '0.5rem',
          padding: '0.5rem',
          textSize: 'text-xs',
        };
    }
  };

  return {
    mobileStyles: getMobileStyles(),
    isMobile,
  };
};
