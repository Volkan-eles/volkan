
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LayoutsPanel: React.FC = () => {
  return (
    <Tabs defaultValue="grid" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-[#333]">
        <TabsTrigger value="grid">Grid</TabsTrigger>
        <TabsTrigger value="strip">Strip</TabsTrigger>
        <TabsTrigger value="diagonal">Diagonal</TabsTrigger>
        <TabsTrigger value="creative">Creative</TabsTrigger>
      </TabsList>
      <TabsContent value="grid">
        <div className="grid grid-cols-2 gap-2 mt-4">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              className="aspect-square bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer"
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="strip">
        <div className="grid grid-cols-2 gap-2 mt-4">
          {[1, 2].map((item) => (
            <div 
              key={item} 
              className="aspect-[2/3] bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer"
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="diagonal">
        <div className="text-center py-6">Diagonal layouts coming soon!</div>
      </TabsContent>
      <TabsContent value="creative">
        <div className="text-center py-6">Creative layouts coming soon!</div>
      </TabsContent>
    </Tabs>
  );
};

export default LayoutsPanel;
