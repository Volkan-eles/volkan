
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CategoriesPanel: React.FC = () => {
  return (
    <Tabs defaultValue="kpop" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-[#333]">
        <TabsTrigger value="kpop">K-pop</TabsTrigger>
        <TabsTrigger value="casual">Casual</TabsTrigger>
        <TabsTrigger value="party">Party</TabsTrigger>
      </TabsList>
      <TabsContent value="kpop">
        <div className="grid grid-cols-2 gap-2 mt-4">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              className="aspect-square bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer"
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="casual">
        <div className="text-center py-6">Casual templates coming soon!</div>
      </TabsContent>
      <TabsContent value="party">
        <div className="text-center py-6">Party templates coming soon!</div>
      </TabsContent>
    </Tabs>
  );
};

export default CategoriesPanel;
