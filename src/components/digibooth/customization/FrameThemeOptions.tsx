
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
  // Theme options
  const themes: { id: FrameTheme; name: string; bgClass: string }[] = [
    { id: 'default', name: 'Default', bgClass: 'bg-blue-500 text-white' },
    { id: 'birthday', name: 'Birthday', bgClass: 'bg-gradient-to-r from-yellow-400 to-pink-500 text-white' },
    { id: 'christmas', name: 'Christmas', bgClass: 'bg-gradient-to-r from-green-600 to-red-600 text-white' },
    { id: 'halloween', name: 'Halloween', bgClass: 'bg-gradient-to-r from-orange-500 to-purple-900 text-white' },
    { id: 'valentines', name: 'Valentine\'s', bgClass: 'bg-gradient-to-r from-pink-400 to-red-400 text-white' },
    { id: 'wedding', name: 'Wedding', bgClass: 'bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-800 border border-gray-200' }
  ];

  return (
    <div className="mb-4">
      <h3 className="text-md font-medium text-gray-600 mb-2">Frame Theme</h3>
      <div className="flex flex-wrap justify-center gap-1.5">
        {themes.map(theme => (
          <Button
            key={theme.id}
            className={`px-2.5 py-1 ${theme.bgClass} rounded-md text-xs ${
              frameTheme === theme.id ? 'ring-1 ring-offset-1 ring-primary' : ''
            } hover:opacity-90 transition-all`}
            onClick={() => setFrameTheme(theme.id)}
          >
            {theme.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FrameThemeOptions;
