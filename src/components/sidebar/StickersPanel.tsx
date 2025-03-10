
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StickersGrid from '../StickersGrid';

interface StickersPanelProps {
  selectedSticker: string | null;
  onSelectSticker: (sticker: {id: string; name: string; src: string}) => void;
}

const StickersPanel: React.FC<StickersPanelProps> = ({ 
  selectedSticker, 
  onSelectSticker 
}) => {
  return (
    <Tabs defaultValue="kpop" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-[#333]">
        <TabsTrigger value="kpop">K-pop</TabsTrigger>
        <TabsTrigger value="emojis">Emojis</TabsTrigger>
        <TabsTrigger value="cute">Cute</TabsTrigger>
      </TabsList>
      <TabsContent value="kpop">
        <StickersGrid 
          onSelectSticker={onSelectSticker} 
          selectedSticker={selectedSticker}
        />
      </TabsContent>
      <TabsContent value="emojis">
        <div className="mt-2 text-sm text-gray-400 text-center py-6">
          Emoji stickers coming soon!
        </div>
      </TabsContent>
      <TabsContent value="cute">
        <div className="mt-2 text-sm text-gray-400 text-center py-6">
          Cute stickers coming soon!
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default StickersPanel;
