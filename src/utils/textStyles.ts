
// Define font families for use in the photo strip
export const fontFamilies = [
  { name: 'Default', value: 'sans' },
  { name: 'Playfair Display', value: 'playfair' },
  { name: 'Poppins', value: 'poppins' },
  { name: 'Dancing Script', value: 'dancing' },
  { name: 'Roboto Mono', value: 'mono' },
  { name: 'Pacifico', value: 'pacifico' },
  { name: 'Montserrat', value: 'montserrat' },
  { name: 'Lora', value: 'lora' },
  { name: 'Oswald', value: 'oswald' },
  { name: 'Caveat', value: 'caveat' }
];

// Define text colors available for the photo strip
export const textColors = [
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Purple', value: '#9b87f5' },
  { name: 'Pink', value: '#D946EF' },
  { name: 'Blue', value: '#0EA5E9' },
  { name: 'Green', value: '#10B981' },
  { name: 'Orange', value: '#F97316' },
  { name: 'Red', value: '#EF4444' },
  { name: 'Teal', value: '#14B8A6' },
  { name: 'Lavender', value: '#A78BFA' },
  { name: 'Rose', value: '#FB7185' },
  { name: 'Amber', value: '#F59E0B' }
];

// Define font sizes available for the photo strip
export const fontSizes = [
  { name: 'XS', value: 'text-xs' },
  { name: 'SM', value: 'text-sm' },
  { name: 'Base', value: 'text-base' },
  { name: 'LG', value: 'text-lg' },
  { name: 'XL', value: 'text-xl' },
  { name: '2XL', value: 'text-2xl' },
  { name: '3XL', value: 'text-3xl' }
];

// Font style options for text customization
export const fontStyles = [
  { name: 'Normal', value: 'normal' },
  { name: 'Italic', value: 'italic' },
  { name: 'Bold', value: 'font-bold' },
  { name: 'Bold Italic', value: 'font-bold italic' }
];

// Text alignment options
export const alignmentOptions = [
  { name: 'Left', value: 'left' },
  { name: 'Center', value: 'center' },
  { name: 'Right', value: 'right' }
];

// Get CSS font-family string for a given font value
export const getFontFamilyStyle = (fontValue: string): string => {
  switch(fontValue) {
    case 'playfair': return "'Playfair Display', serif";
    case 'poppins': return "'Poppins', sans-serif";
    case 'dancing': return "'Dancing Script', cursive";
    case 'mono': return "'Roboto Mono', monospace";
    case 'pacifico': return "'Pacifico', cursive";
    case 'montserrat': return "'Montserrat', sans-serif";
    case 'lora': return "'Lora', serif";
    case 'oswald': return "'Oswald', sans-serif";
    case 'caveat': return "'Caveat', cursive";
    default: return "sans-serif";
  }
};
