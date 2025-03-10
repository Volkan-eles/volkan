
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
          return `${baseClasses} h-[320px] max-w-[160px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[320px] max-w-[200px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[270px] w-full max-w-[250px] mx-auto`;
        case 'wide-horizontal':
          return `${baseClasses} h-[180px] w-full max-w-[280px] mx-auto`;
        default:
          return `${baseClasses} h-[270px] w-full max-w-[250px] mx-auto`;
      }
    } else {
      switch (category) {
        case 'tall-narrow':
          return `${baseClasses} h-[380px] md:h-[420px] lg:h-[440px] max-w-[200px] md:max-w-[220px] lg:max-w-[240px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[360px] md:h-[400px] lg:h-[420px] max-w-[240px] md:max-w-[260px] lg:max-w-[280px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[340px] md:h-[360px] lg:h-[380px] max-w-[300px] md:max-w-[320px] lg:max-w-[340px] mx-auto`;
        case 'wide-horizontal':
          return `${baseClasses} h-[250px] md:h-[270px] lg:h-[290px] max-w-[420px] md:max-w-[460px] lg:max-w-[480px] mx-auto`;
        default:
          return `${baseClasses} h-[340px] md:h-[360px] lg:h-[380px] max-w-[300px] md:max-w-[320px] lg:max-w-[340px] mx-auto`;
      }
    }
  };

  return { getContainerClasses };
};
