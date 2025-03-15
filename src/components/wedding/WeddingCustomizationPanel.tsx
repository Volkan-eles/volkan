
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import FrameColorOptions from '@/components/digibooth/customization/FrameColorOptions';
import StickerOptions from '@/components/digibooth/customization/StickerOptions';
import BorderOptions from '@/components/digibooth/customization/BorderOptions';
import FrameThemeOptions from '@/components/digibooth/customization/FrameThemeOptions';
import BackgroundRemovalToggle from '@/components/digibooth/customization/BackgroundRemovalToggle';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Sticker, Frame, LayoutTemplate, Eraser } from 'lucide-react';

interface WeddingCustomizationPanelProps {
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
  borderStyle: BorderStyle;
  setBorderStyle: (style: BorderStyle) => void;
  borderWidth: BorderWidth;
  setBorderWidth: (width: BorderWidth) => void;
  frameTheme: FrameTheme;
  setFrameTheme: (theme: FrameTheme) => void;
  showBackgroundRemoval: boolean;
  toggleBackgroundRemoval: () => void;
}

const WeddingCustomizationPanel: React.FC<WeddingCustomizationPanelProps> = ({
  frameColor,
  setFrameColor,
  sticker,
  setSticker,
  borderStyle,
  setBorderStyle,
  borderWidth,
  setBorderWidth,
  frameTheme,
  setFrameTheme,
  showBackgroundRemoval,
  toggleBackgroundRemoval
}) => {
  return (
    <Card className="bg-white/90 shadow-md">
      <CardContent className="p-4">
        <Tabs defaultValue="theme">
          <TabsList className="w-full bg-gray-100">
            <TabsTrigger value="theme" className="flex items-center gap-1">
              <LayoutTemplate className="h-4 w-4" /> Theme
            </TabsTrigger>
            <TabsTrigger value="color" className="flex items-center gap-1">
              <Palette className="h-4 w-4" /> Colors
            </TabsTrigger>
            <TabsTrigger value="border" className="flex items-center gap-1">
              <Frame className="h-4 w-4" /> Border
            </TabsTrigger>
            <TabsTrigger value="stickers" className="flex items-center gap-1">
              <Sticker className="h-4 w-4" /> Stickers
            </TabsTrigger>
            <TabsTrigger value="effects" className="flex items-center gap-1">
              <Eraser className="h-4 w-4" /> Effects
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="theme" className="pt-4">
            <FrameThemeOptions
              frameTheme={frameTheme}
              setFrameTheme={setFrameTheme}
            />
          </TabsContent>
          
          <TabsContent value="color" className="pt-4">
            <FrameColorOptions 
              frameColor={frameColor}
              setFrameColor={setFrameColor}
            />
          </TabsContent>
          
          <TabsContent value="border" className="pt-4">
            <BorderOptions
              borderStyle={borderStyle}
              setBorderStyle={setBorderStyle}
              borderWidth={borderWidth}
              setBorderWidth={setBorderWidth}
            />
          </TabsContent>
          
          <TabsContent value="stickers" className="pt-4">
            <StickerOptions
              sticker={sticker}
              setSticker={setSticker}
            />
          </TabsContent>
          
          <TabsContent value="effects" className="pt-4">
            <BackgroundRemovalToggle
              showBackgroundRemoval={showBackgroundRemoval}
              toggleBackgroundRemoval={toggleBackgroundRemoval}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WeddingCustomizationPanel;
