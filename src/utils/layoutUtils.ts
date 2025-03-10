
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
          return `${baseClasses} h-[300px] max-w-[140px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[300px] max-w-[180px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[250px] w-full max-w-[220px] mx-auto`;
        case 'wide-horizontal':
          return `${baseClasses} h-[160px] w-full max-w-[240px] mx-auto`;
        default:
          return `${baseClasses} h-[250px] w-full max-w-[220px] mx-auto`;
      }
    } else {
      switch (category) {
        case 'tall-narrow':
          return `${baseClasses} h-[350px] md:h-[370px] lg:h-[390px] max-w-[180px] md:max-w-[190px] lg:max-w-[200px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[330px] md:h-[350px] lg:h-[370px] max-w-[210px] md:max-w-[230px] lg:max-w-[240px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[310px] md:h-[330px] lg:h-[350px] max-w-[270px] md:max-w-[290px] lg:max-w-[300px] mx-auto`;
        case 'wide-horizontal':
          return `${baseClasses} h-[220px] md:h-[240px] lg:h-[250px] max-w-[380px] md:max-w-[400px] lg:max-w-[420px] mx-auto`;
        default:
          return `${baseClasses} h-[310px] md:h-[330px] lg:h-[350px] max-w-[270px] md:max-w-[290px] lg:max-w-[300px] mx-auto`;
      }
    }
  };

  return { getContainerClasses };
};
