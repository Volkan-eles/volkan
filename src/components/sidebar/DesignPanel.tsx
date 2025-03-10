
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DesignPanel: React.FC = () => {
  return (
    <Tabs defaultValue="templates" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-[#333]">
        <TabsTrigger value="templates">Templates</TabsTrigger>
        <TabsTrigger value="colors">Colors</TabsTrigger>
        <TabsTrigger value="styles">Styles</TabsTrigger>
      </TabsList>
      <TabsContent value="templates">
        <div className="grid grid-cols-2 gap-2 mt-4">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              className="aspect-video bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer"
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="colors">
        <div className="grid grid-cols-4 gap-2 mt-4">
          {['#FF5555', '#55FF55', '#5555FF', '#FFFF55', '#FF55FF', '#55FFFF', '#FFFFFF', '#000000'].map((color) => (
            <div 
              key={color} 
              className="aspect-square rounded-md cursor-pointer" 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="styles">
        <div className="text-center py-6">Design styles coming soon!</div>
      </TabsContent>
    </Tabs>
  );
};

export default DesignPanel;
