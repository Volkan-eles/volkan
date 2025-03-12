
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DesignPanel: React.FC = () => {
  return (
    <Tabs defaultValue="templates" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-[#333]/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5">
        <TabsTrigger 
          value="templates" 
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600/90 data-[state=active]:to-fuchsia-600/90 transition-all duration-300"
        >
          Templates
        </TabsTrigger>
        <TabsTrigger 
          value="colors"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600/90 data-[state=active]:to-fuchsia-600/90 transition-all duration-300"
        >
          Colors
        </TabsTrigger>
        <TabsTrigger 
          value="styles"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600/90 data-[state=active]:to-fuchsia-600/90 transition-all duration-300"
        >
          Styles
        </TabsTrigger>
      </TabsList>
      <TabsContent value="templates" className="animate-fade-in">
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              className="aspect-video bg-[#333]/50 border border-white/5 rounded-lg hover:bg-[#444]/70 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="colors" className="animate-fade-in">
        <div className="grid grid-cols-4 gap-3 mt-4">
          {['#FF5555', '#55FF55', '#5555FF', '#FFFF55', '#FF55FF', '#55FFFF', '#FFFFFF', '#000000'].map((color) => (
            <div 
              key={color} 
              className="aspect-square rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-white/10" 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="styles" className="animate-fade-in">
        <div className="text-center py-10 text-white/70">
          <div className="text-gradient text-sm">Design styles coming soon!</div>
          <div className="mt-4 w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto animate-spin opacity-20"></div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default DesignPanel;
