
import { useIsMobile } from '@/hooks/use-mobile';

export const useLayoutContainer = (selectedLayout: string) => {
  const isMobile = useIsMobile();
  
  const getLayoutCategory = () => {
    if (['diagonal-strips', 'classic-strip', 'vertical-strip', 'elegant-strip'].includes(selectedLayout)) {
      return 'tall-narrow';
    }
    else if (['big-small'].includes(selectedLayout)) {
      return 'portrait';
    }
    else if (['grid', 'simple-grid', 'classic-grid', 'horizontal-duo', 'creative-overlap', 'full-frame'].includes(selectedLayout)) {
      return 'wide-horizontal';
    }
    else if (selectedLayout === 'large-vertical') {
      return 'large-vertical';
    }
    return 'tall-narrow';
  };

  const getContainerClasses = () => {
    const category = getLayoutCategory();
    const baseClasses = "flex-1 bg-white rounded-lg overflow-hidden flex items-center justify-center";
    
    if (isMobile) {
      switch (category) {
        case 'tall-narrow':
          return `${baseClasses} h-[350px] max-w-[180px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[350px] max-w-[220px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[300px] w-full max-w-[280px] mx-auto`;
        case 'wide-horizontal':
          return `${baseClasses} h-[200px] w-full max-w-[320px] mx-auto`;
        default:
          return `${baseClasses} h-[300px] w-full max-w-[280px] mx-auto`;
      }
    } else {
      switch (category) {
        case 'tall-narrow':
          return `${baseClasses} h-[420px] md:h-[460px] lg:h-[480px] max-w-[220px] md:max-w-[240px] lg:max-w-[260px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[400px] md:h-[440px] lg:h-[460px] max-w-[280px] md:max-w-[300px] lg:max-w-[320px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[380px] md:h-[400px] lg:h-[420px] max-w-[340px] md:max-w-[360px] lg:max-w-[380px] mx-auto`;
        case 'wide-horizontal':
          return `${baseClasses} h-[280px] md:h-[300px] lg:h-[320px] max-w-[480px] md:max-w-[520px] lg:max-w-[540px] mx-auto`;
        default:
          return `${baseClasses} h-[380px] md:h-[400px] lg:h-[420px] max-w-[340px] md:max-w-[360px] lg:max-w-[380px] mx-auto`;
      }
    }
  };

  return { getContainerClasses };
};
