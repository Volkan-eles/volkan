
import React from 'react';

export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge';
export type BorderWidth = 'thin' | 'medium' | 'thick';
export type FrameTheme = 'default' | 'birthday' | 'christmas' | 'halloween' | 'valentines' | 'wedding';

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

  // Border width options
  const borderWidths: { id: BorderWidth; name: string }[] = [
    { id: 'thin', name: 'Thin' },
    { id: 'medium', name: 'Medium' },
    { id: 'thick', name: 'Thick' }
  ];

  // Theme options with colors and descriptions
  const themes: { id: FrameTheme; name: string; description: string; class: string }[] = [
    { id: 'default', name: 'Default', description: 'Standard frame', class: 'bg-blue-500 text-white' },
    { id: 'birthday', name: 'Birthday', description: 'Celebration theme', class: 'bg-gradient-to-r from-yellow-400 to-pink-500 text-white' },
    { id: 'christmas', name: 'Christmas', description: 'Holiday theme', class: 'bg-gradient-to-r from-green-600 to-red-600 text-white' },
    { id: 'halloween', name: 'Halloween', description: 'Spooky theme', class: 'bg-gradient-to-r from-orange-500 to-purple-900 text-white' },
    { id: 'valentines', name: 'Valentine\'s', description: 'Love theme', class: 'bg-gradient-to-r from-pink-400 to-red-400 text-white' },
    { id: 'wedding', name: 'Wedding', description: 'Elegant theme', class: 'bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-800 border border-gray-200' }
  ];

  return (
    <div className="space-y-4">
      {/* Border Themes */}
      <div>
        <h3 className="font-medium mb-2">Theme</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {themes.map(theme => (
            <button
              key={theme.id}
              className={`px-3 py-2 rounded-lg text-sm transition-all ${
                selectedTheme === theme.id
                  ? `${theme.class} ring-2 ring-offset-2 ring-blue-400`
                  : `${theme.class} opacity-70 hover:opacity-100`
              }`}
              onClick={() => onThemeChange(theme.id)}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </div>

      {/* Border Style */}
      <div>
        <h3 className="font-medium mb-2">Border Style</h3>
        <div className="grid grid-cols-3 gap-2">
          {borderStyles.map(style => (
            <button
              key={style.id}
              className={`px-3 py-2 border ${
                style.id === 'solid' ? 'border-solid' :
                style.id === 'dashed' ? 'border-dashed' :
                style.id === 'dotted' ? 'border-dotted' :
                style.id === 'double' ? 'border-double' :
                'border-solid'
              } rounded-lg ${
                selectedStyle === style.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => onStyleChange(style.id)}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>

      {/* Border Width */}
      <div>
        <h3 className="font-medium mb-2">Border Width</h3>
        <div className="grid grid-cols-3 gap-2">
          {borderWidths.map(width => (
            <button
              key={width.id}
              className={`px-3 py-2 rounded-lg ${
                selectedWidth === width.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-100'
              }`}
              onClick={() => onWidthChange(width.id)}
            >
              {width.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorderStyleSelector;
