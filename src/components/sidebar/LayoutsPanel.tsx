
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LayoutsPanel: React.FC = () => {
  return (
    <Tabs defaultValue="grid" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-[#333]/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5">
        <TabsTrigger 
          value="grid"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600/90 data-[state=active]:to-fuchsia-600/90 transition-all duration-300"
        >
          Grid
        </TabsTrigger>
        <TabsTrigger 
          value="strip"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600/90 data-[state=active]:to-fuchsia-600/90 transition-all duration-300"
        >
          Strip
        </TabsTrigger>
        <TabsTrigger 
          value="diagonal"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600/90 data-[state=active]:to-fuchsia-600/90 transition-all duration-300"
        >
          Diagonal
        </TabsTrigger>
        <TabsTrigger 
          value="creative"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600/90 data-[state=active]:to-fuchsia-600/90 transition-all duration-300"
        >
          Creative
        </TabsTrigger>
      </TabsList>
      <TabsContent value="grid" className="animate-fade-in">
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              className="aspect-square bg-[#333]/50 border border-white/5 rounded-lg hover:bg-[#444]/70 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="strip" className="animate-fade-in">
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[1, 2].map((item) => (
            <div 
              key={item} 
              className="aspect-[2/3] bg-[#333]/50 border border-white/5 rounded-lg hover:bg-[#444]/70 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="diagonal" className="animate-fade-in">
        <div className="text-center py-10 text-white/70">
          <div className="text-gradient text-sm">Diagonal layouts coming soon!</div>
          <div className="mt-4 w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto animate-pulse-gentle opacity-20"></div>
        </div>
      </TabsContent>
      <TabsContent value="creative" className="animate-fade-in">
        <div className="text-center py-10 text-white/70">
          <div className="text-gradient text-sm">Creative layouts coming soon!</div>
          <div className="mt-4 w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto animate-bounce-subtle opacity-20"></div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default LayoutsPanel;
