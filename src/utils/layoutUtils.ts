
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
          return `${baseClasses} h-[400px] max-w-[220px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[400px] max-w-[280px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[350px] w-full`;
        case 'wide-horizontal':
          return `${baseClasses} h-[250px] w-full`;
        default:
          return `${baseClasses} h-[350px] w-full`;
      }
    } else {
      switch (category) {
        case 'tall-narrow':
          return `${baseClasses} h-[480px] md:h-[520px] lg:h-[560px] max-w-[260px] md:max-w-[280px] lg:max-w-[300px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[460px] md:h-[500px] lg:h-[540px] max-w-[320px] md:max-w-[340px] lg:max-w-[360px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[420px] md:h-[460px] lg:h-[500px] w-full`;
        case 'wide-horizontal':
          return `${baseClasses} h-[320px] md:h-[350px] lg:h-[380px] w-full`;
        default:
          return `${baseClasses} h-[420px] md:h-[460px] lg:h-[500px] w-full`;
      }
    }
  };

  return { getContainerClasses };
};
