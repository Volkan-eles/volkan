
import { useState, useEffect } from 'react';
import { fontFamilies, textColors, fontSizes } from '@/utils/textStyles';
import { BorderWidthValue } from '@/components/kpop/photostrip/BorderWidthSelector';

export default function useKpopTextStyles() {
  // Default footer text state
  const [titleText, setTitleText] = useState('K-pop Booth');
  const [dateFormat, setDateFormat] = useState('short');
  const [customMessage, setCustomMessage] = useState('K-pop Memories!');
  
  // Style states for text
  const [titleFont, setTitleFont] = useState(fontFamilies[0].value);
  const [titleColor, setTitleColor] = useState(textColors[2].value); // Purple by default
  const [titleSize, setTitleSize] = useState(fontSizes[4].value); // XL by default
  
  const [customFont, setCustomFont] = useState(fontFamilies[3].value); // Dancing Script by default
  const [customColor, setCustomColor] = useState(textColors[3].value); // Pink by default
  const [customSize, setCustomSize] = useState(fontSizes[2].value); // Base by default
  
  // Text alignment and styling options
  const [titleAlignment, setTitleAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [customAlignment, setCustomAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [titleItalic, setTitleItalic] = useState(false);
  const [customItalic, setCustomItalic] = useState(true); // Default to italic for the custom message
  
  // Border width for adjusting image size
  const [imageSize, setImageSize] = useState<BorderWidthValue>('full');
  
  // Add font styles to the document head
  useEffect(() => {
    const fontLinks = [
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap",
      "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400&display=swap",
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap",
      "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,600;1,400&display=swap",
      "https://fonts.googleapis.com/css2?family=Pacifico&display=swap",
      "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&display=swap",
      "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&display=swap",
      "https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap",
      "https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap"
    ];
    
    // Add all font links to the document head
    fontLinks.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });
    
    // Add inline styles for font-family definitions
    const style = document.createElement('style');
    style.textContent = `
      .font-playfair { font-family: 'Playfair Display', serif; }
      .font-poppins { font-family: 'Poppins', sans-serif; }
      .font-dancing { font-family: 'Dancing Script', cursive; }
      .font-mono { font-family: 'Roboto Mono', monospace; }
      .font-pacifico { font-family: 'Pacifico', cursive; }
      .font-montserrat { font-family: 'Montserrat', sans-serif; }
      .font-lora { font-family: 'Lora', serif; }
      .font-oswald { font-family: 'Oswald', sans-serif; }
      .font-caveat { font-family: 'Caveat', cursive; }
    `;
    
    if (!document.querySelector('style#kpop-fonts')) {
      style.id = 'kpop-fonts';
      document.head.appendChild(style);
    }
    
    return () => {
      // Cleanup is typically not needed for font links
      if (document.querySelector('style#kpop-fonts')) {
        document.querySelector('style#kpop-fonts')?.remove();
      }
    };
  }, []);

  // Get image size class based on borderWidthValue
  const getImageSizeClass = (width: BorderWidthValue): string => {
    switch(width) {
      case 'small': return 'w-[70%] mx-auto';
      case 'medium': return 'w-[85%] mx-auto';
      case 'large': return 'w-[95%] mx-auto';
      case 'full':
      default: return 'w-full';
    }
  };

  return {
    titleText,
    setTitleText,
    dateFormat,
    setDateFormat,
    customMessage,
    setCustomMessage,
    titleFont,
    setTitleFont,
    titleColor,
    setTitleColor,
    titleSize,
    setTitleSize,
    titleAlignment,
    setTitleAlignment,
    titleItalic,
    setTitleItalic,
    customFont,
    setCustomFont,
    customColor,
    setCustomColor,
    customSize,
    setCustomSize,
    customAlignment,
    setCustomAlignment,
    customItalic,
    setCustomItalic,
    imageSize,
    setImageSize,
    getImageSizeClass
  };
}
