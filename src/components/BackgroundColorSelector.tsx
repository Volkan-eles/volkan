
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BackgroundColorSelectorProps {
  bgColor: string;
  setBgColor: (color: string) => void;
}

const BackgroundColorSelector: React.FC<BackgroundColorSelectorProps> = ({ bgColor, setBgColor }) => {
  const bgColorOptions = [
    // Light colors
    { name: 'White', value: 'white' },
    { name: 'Light Gray', value: 'bg-gray-50' },
    { name: 'Sky Blue', value: 'bg-blue-50' },
    { name: 'Light Pink', value: 'bg-pink-50' },
    { name: 'Soft Purple', value: 'bg-purple-50' },
    { name: 'Soft Yellow', value: 'bg-yellow-50' },
    { name: 'Mint Green', value: 'bg-green-50' },
    { name: 'Lavender', value: 'bg-indigo-50' },
    { name: 'Peach', value: 'bg-orange-50' },
    
    // Medium colors
    { name: 'Blue 200', value: 'bg-blue-200' },
    { name: 'Green 200', value: 'bg-green-200' },
    { name: 'Yellow 200', value: 'bg-yellow-200' },
    { name: 'Red 200', value: 'bg-red-200' },
    { name: 'Purple 200', value: 'bg-purple-200' },
    { name: 'Pink 200', value: 'bg-pink-200' },
    { name: 'Indigo 200', value: 'bg-indigo-200' },
    { name: 'Teal 200', value: 'bg-teal-200' },
    
    // Darker colors
    { name: 'Gray 500', value: 'bg-gray-500' },
    { name: 'Blue 500', value: 'bg-blue-500' },
    { name: 'Green 500', value: 'bg-green-500' },
    { name: 'Yellow 500', value: 'bg-yellow-500' },
    { name: 'Red 500', value: 'bg-red-500' },
    { name: 'Purple 500', value: 'bg-purple-500' },
    { name: 'Pink 500', value: 'bg-pink-500' },
    { name: 'Indigo 500', value: 'bg-indigo-500' },
    
    // Dark colors
    { name: 'Gray 800', value: 'bg-gray-800' },
    { name: 'Blue 800', value: 'bg-blue-800' },
    { name: 'Green 800', value: 'bg-green-800' },
    { name: 'Yellow 800', value: 'bg-yellow-800' },
    { name: 'Red 800', value: 'bg-red-800' },
    { name: 'Purple 800', value: 'bg-purple-800' },
    { name: 'Pink 800', value: 'bg-pink-800' },
    { name: 'Indigo 800', value: 'bg-indigo-800' },
    
    // Black and near-black
    { name: 'Black', value: 'bg-black' },
    { name: 'Dark Slate', value: 'bg-slate-900' },
  ];

  return (
    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-md p-0.5 h-7 border border-white/10 shadow-inner transition-all duration-300 hover:bg-black/50">
      <span className="text-white text-xs ml-1 font-medium">BG:</span>
      <div className="flex flex-wrap gap-1 max-w-[140px] overflow-x-auto scrollbar-none">
        {bgColorOptions.slice(0, 10).map((color) => (
          <button
            key={color.value}
            className={`w-3 h-3 rounded-sm ${color.value} ${
              bgColor === color.value 
                ? 'ring-1 ring-white shadow-[0_0_5px_rgba(255,255,255,0.5)]' 
                : 'hover:scale-110 transition-transform'
            }`}
            onClick={() => setBgColor(color.value)}
            title={color.name}
            aria-label={`Set background color to ${color.name}`}
          />
        ))}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button 
              className="w-3 h-3 rounded-sm bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center text-white text-[8px] font-bold hover:scale-110 transition-transform"
              aria-label="More color options"
            >
              +
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#1A1A1A]/90 backdrop-blur-md border-[#555] text-white p-2 w-[220px] flex flex-wrap gap-1 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.4)]">
            <div className="w-full text-xs mb-1 text-gray-300 font-medium px-1">More Colors</div>
            {bgColorOptions.slice(10).map((color) => (
              <button
                key={color.value}
                className={`w-6 h-6 rounded-sm ${color.value} ${
                  bgColor === color.value 
                    ? 'ring-1 ring-white shadow-[0_0_5px_rgba(255,255,255,0.5)]' 
                    : 'hover:scale-110 transition-transform'
                }`}
                onClick={() => setBgColor(color.value)}
                title={color.name}
                aria-label={`Set background color to ${color.name}`}
              />
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default BackgroundColorSelector;
