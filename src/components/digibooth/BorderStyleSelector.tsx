
import React from 'react';

export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge';
export type BorderWidth = 'none' | 'hairline' | 'thin' | 'medium' | 'thick' | 'heavy' | 'ultra';
export type FrameTheme = 'default' | 'birthday' | 'christmas' | 'halloween' | 'valentines' | 'wedding' | 'graduation' | 'babyshower' | 'anniversary' | 'newyear';

interface BorderStyleSelectorProps {
  selectedStyle: BorderStyle;
  selectedWidth: BorderWidth;
  selectedTheme: FrameTheme;
  onStyleChange: (style: BorderStyle) => void;
  onWidthChange: (width: BorderWidth) => void;
  onThemeChange: (theme: FrameTheme) => void;
}

const BorderStyleSelector: React.FC<BorderStyleSelectorProps> = ({
  selectedStyle,
  selectedWidth,
  selectedTheme,
  onStyleChange,
  onWidthChange,
  onThemeChange
}) => {
  // Border style options
  const borderStyles: { id: BorderStyle; name: string }[] = [
    { id: 'solid', name: 'Solid' },
    { id: 'dashed', name: 'Dashed' },
    { id: 'dotted', name: 'Dotted' },
    { id: 'double', name: 'Double' },
    { id: 'groove', name: 'Groove' },
    { id: 'ridge', name: 'Ridge' }
  ];

  // Border width options - expanded
  const borderWidths: { id: BorderWidth; name: string; visualClass: string }[] = [
    { id: 'none', name: 'None', visualClass: 'border-0' },
    { id: 'hairline', name: 'Hairline', visualClass: 'border-[1px]' },
    { id: 'thin', name: 'Thin', visualClass: 'border-2' },
    { id: 'medium', name: 'Medium', visualClass: 'border-4' },
    { id: 'thick', name: 'Thick', visualClass: 'border-6' },
    { id: 'heavy', name: 'Heavy', visualClass: 'border-8' },
    { id: 'ultra', name: 'Ultra', visualClass: 'border-[12px]' }
  ];

  // Theme options with colors and descriptions
  const themes: { id: FrameTheme; name: string; description: string; class: string }[] = [
    { id: 'default', name: 'Default', description: 'Standard frame', class: 'bg-blue-500 text-white' },
    { id: 'birthday', name: 'Birthday', description: 'Celebration theme', class: 'bg-gradient-to-r from-yellow-400 to-pink-500 text-white' },
    { id: 'christmas', name: 'Christmas', description: 'Holiday theme', class: 'bg-gradient-to-r from-green-600 to-red-600 text-white' },
    { id: 'halloween', name: 'Halloween', description: 'Spooky theme', class: 'bg-gradient-to-r from-orange-500 to-purple-900 text-white' },
    { id: 'valentines', name: 'Valentine\'s', description: 'Love theme', class: 'bg-gradient-to-r from-pink-400 to-red-400 text-white' },
    { id: 'wedding', name: 'Wedding', description: 'Elegant theme', class: 'bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-800 border border-gray-200' },
    { id: 'graduation', name: 'Graduation', description: 'Achievement theme', class: 'bg-gradient-to-r from-blue-800 to-indigo-900 text-white' },
    { id: 'babyshower', name: 'Baby Shower', description: 'Gentle theme', class: 'bg-gradient-to-r from-blue-200 to-pink-200 text-gray-800' },
    { id: 'anniversary', name: 'Anniversary', description: 'Celebration theme', class: 'bg-gradient-to-r from-yellow-200 to-yellow-600 text-gray-800' },
    { id: 'newyear', name: 'New Year', description: 'Festive theme', class: 'bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 text-white' }
  ];

  return (
    <div className="space-y-6">
      {/* Border Themes */}
      <div>
        <h3 className="font-medium mb-3 text-gray-700">Theme</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {themes.map(theme => (
            <div
              key={theme.id}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedTheme === theme.id
                  ? `${theme.class} shadow-lg scale-105`
                  : `${theme.class} opacity-70 hover:opacity-100 hover:scale-105`
              }`}
              onClick={() => onThemeChange(theme.id)}
            >
              <div className="text-center">
                <div className="font-medium text-sm">{theme.name}</div>
                <div className="text-xs mt-1 opacity-80">{theme.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Style */}
      <div>
        <h3 className="font-medium mb-3 text-gray-700">Border Style</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {borderStyles.map(style => (
            <div
              key={style.id}
              className={`p-3 border ${
                style.id === 'solid' ? 'border-solid' :
                style.id === 'dashed' ? 'border-dashed' :
                style.id === 'dotted' ? 'border-dotted' :
                style.id === 'double' ? 'border-double' :
                style.id === 'groove' ? 'border-groove' : 
                'border-ridge'
              } rounded-lg cursor-pointer transition-all duration-300 ${
                selectedStyle === style.id
                  ? 'bg-blue-500 text-white shadow-md scale-105'
                  : 'bg-white text-gray-800 hover:bg-gray-100 hover:scale-105'
              }`}
              onClick={() => onStyleChange(style.id)}
            >
              <div className="text-center text-sm">{style.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Width - enhanced with more options and visual preview */}
      <div>
        <h3 className="font-medium mb-3 text-gray-700">Border Width</h3>
        <div className="grid grid-cols-4 gap-3">
          {borderWidths.map(width => (
            <div
              key={width.id}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedWidth === width.id
                  ? 'bg-blue-500 text-white shadow-md scale-105'
                  : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-100 hover:scale-105'
              }`}
              onClick={() => onWidthChange(width.id)}
            >
              <div className="text-center text-sm">{width.name}</div>
              <div className={`mt-2 h-3 w-full bg-gray-100 ${
                selectedWidth === width.id ? 'bg-blue-200' : ''
              }`}>
                <div 
                  className={`mx-auto w-3/4 h-3 ${width.visualClass} border-gray-400 ${
                    selectedWidth === width.id ? 'border-white' : ''
                  }`} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorderStyleSelector;
