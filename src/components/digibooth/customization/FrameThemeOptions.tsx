
import React from 'react';
import { FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import { Button } from '@/components/ui/button';

interface FrameThemeOptionsProps {
  frameTheme: FrameTheme;
  setFrameTheme: (theme: FrameTheme) => void;
}

const FrameThemeOptions: React.FC<FrameThemeOptionsProps> = ({
  frameTheme,
  setFrameTheme
}) => {
  // Theme options with expanded information
  const themes: { id: FrameTheme; name: string; bgClass: string; description: string }[] = [
    { id: 'default', name: 'Default', bgClass: 'bg-blue-500 text-white', description: 'Classic frame' },
    { id: 'birthday', name: 'Birthday', bgClass: 'bg-gradient-to-r from-yellow-400 to-pink-500 text-white', description: 'Celebration theme' },
    { id: 'christmas', name: 'Christmas', bgClass: 'bg-gradient-to-r from-green-600 to-red-600 text-white', description: 'Holiday theme' },
    { id: 'halloween', name: 'Halloween', bgClass: 'bg-gradient-to-r from-orange-500 to-purple-900 text-white', description: 'Spooky theme' },
    { id: 'valentines', name: 'Valentine\'s', bgClass: 'bg-gradient-to-r from-pink-400 to-red-400 text-white', description: 'Love theme' },
    { id: 'wedding', name: 'Wedding', bgClass: 'bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-800 border border-gray-200', description: 'Elegant theme' },
    { id: 'graduation', name: 'Graduation', bgClass: 'bg-gradient-to-r from-blue-800 to-indigo-900 text-white', description: 'Achievement theme' },
    { id: 'babyshower', name: 'Baby Shower', bgClass: 'bg-gradient-to-r from-blue-200 to-pink-200 text-gray-800', description: 'Gentle theme' },
    { id: 'anniversary', name: 'Anniversary', bgClass: 'bg-gradient-to-r from-yellow-200 to-yellow-600 text-gray-800', description: 'Golden celebration' },
    { id: 'newyear', name: 'New Year', bgClass: 'bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 text-white', description: 'Festive theme' },
    { id: 'vintage', name: 'Vintage', bgClass: 'bg-gradient-to-r from-amber-700 to-yellow-600 text-white', description: 'Retro theme' }
  ];

  return (
    <div className="mb-4">
      <h3 className="text-xs font-medium text-gray-600 mb-2">Frame Theme</h3>
      <div className="flex flex-wrap gap-1.5 max-h-[160px] overflow-y-auto pr-1">
        {themes.map(theme => (
          <Button
            key={theme.id}
            variant={frameTheme === theme.id ? "default" : "outline"}
            className={`px-2 py-1 ${theme.bgClass} rounded-md text-xs ${
              frameTheme === theme.id ? 'ring-2 ring-offset-1 ring-primary shadow-md scale-105' : 'hover:scale-105'
            } transition-all duration-200 flex flex-col h-auto min-w-[90px] border`}
            onClick={() => {
              setFrameTheme(theme.id);
            }}
          >
            <span className="font-medium">{theme.name}</span>
            <span className="text-[9px] opacity-90 mt-0.5">{theme.description}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FrameThemeOptions;
