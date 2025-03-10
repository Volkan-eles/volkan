
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TextPanel: React.FC = () => {
  return (
    <Tabs defaultValue="headings" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-[#333]">
        <TabsTrigger value="headings">Headings</TabsTrigger>
        <TabsTrigger value="body">Body</TabsTrigger>
        <TabsTrigger value="effects">Effects</TabsTrigger>
      </TabsList>
      <TabsContent value="headings">
        <div className="space-y-3 mt-4">
          <div className="p-2 bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer">
            <p className="text-lg font-bold">Heading 1</p>
          </div>
          <div className="p-2 bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer">
            <p className="text-base font-bold">Heading 2</p>
          </div>
          <div className="p-2 bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer">
            <p className="text-sm font-bold">Heading 3</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="body">
        <div className="space-y-3 mt-4">
          <div className="p-2 bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer">
            <p className="text-base">Normal text</p>
          </div>
          <div className="p-2 bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer">
            <p className="text-sm">Small text</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="effects">
        <div className="text-center py-6">Text effects coming soon!</div>
      </TabsContent>
    </Tabs>
  );
};

export default TextPanel;
