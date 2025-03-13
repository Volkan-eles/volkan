
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { layoutOptions } from '@/data/layoutOptions';

interface DigiboothLayoutSelectorProps {
  selectedLayout: string;
  onLayoutChange: (layout: string) => void;
}

const DigiboothLayoutSelector: React.FC<DigiboothLayoutSelectorProps> = ({
  selectedLayout,
  onLayoutChange
}) => {
  // Group layouts by type for better organization
  const stripLayouts = layoutOptions.filter(layout => 
    layout.id.includes('strip') || layout.id === 'diagonal-strips'
  );
  
  const gridLayouts = layoutOptions.filter(layout => 
    layout.id.includes('grid')
  );
  
  const specialLayouts = layoutOptions.filter(layout => 
    !layout.id.includes('strip') && !layout.id.includes('grid') && layout.id !== 'diagonal-strips'
  );

  return (
    <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-blue-100">
      <h3 className="text-center text-lg font-medium text-blue-700 mb-2">Layout Options</h3>
      <p className="text-center text-blue-600 text-sm mb-4">Choose a layout for your photos</p>
      
      <Tabs defaultValue="strip" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-blue-100/50 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-200/50">
          <TabsTrigger 
            value="strip"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/90 data-[state=active]:to-indigo-500/90 transition-all duration-300"
          >
            Strip
          </TabsTrigger>
          <TabsTrigger 
            value="grid"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/90 data-[state=active]:to-indigo-500/90 transition-all duration-300"
          >
            Grid
          </TabsTrigger>
          <TabsTrigger 
            value="creative"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/90 data-[state=active]:to-indigo-500/90 transition-all duration-300"
          >
            Creative
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="strip" className="animate-fade-in mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stripLayouts.map((layout) => (
              <div 
                key={layout.id} 
                className={`aspect-[3/4] border-2 rounded-lg cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  selectedLayout === layout.id 
                    ? 'border-blue-500 shadow-md bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300 bg-white'
                }`}
                onClick={() => onLayoutChange(layout.id)}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center p-2">
                  {layout.id === 'vertical-strip' && (
                    <div className="space-y-1 w-full">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-4 w-full bg-blue-200 rounded-sm"></div>
                      ))}
                    </div>
                  )}
                  {layout.id === 'classic-strip' && (
                    <div className="space-y-1 w-full">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-4 w-full bg-blue-200 rounded-sm"></div>
                      ))}
                    </div>
                  )}
                  {layout.id === 'elegant-strip' && (
                    <div className="space-y-2 w-full">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-4 w-full bg-blue-200 rounded-sm"></div>
                      ))}
                    </div>
                  )}
                  {layout.id === 'diagonal-strips' && (
                    <div className="transform rotate-12 space-y-2 w-full">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-4 w-full bg-blue-200 rounded-sm"></div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="absolute bottom-1 inset-x-0 text-center text-xs font-medium text-gray-700">
                  {layout.name}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="grid" className="animate-fade-in mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {gridLayouts.map((layout) => (
              <div 
                key={layout.id} 
                className={`aspect-[4/3] border-2 rounded-lg cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  selectedLayout === layout.id 
                    ? 'border-blue-500 shadow-md bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300 bg-white'
                }`}
                onClick={() => onLayoutChange(layout.id)}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center p-2">
                  {layout.id === 'grid' && (
                    <div className="grid grid-cols-2 gap-1 w-full h-full">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-full h-full bg-blue-200 rounded-sm"></div>
                      ))}
                    </div>
                  )}
                  {layout.id === 'simple-grid' && (
                    <div className="grid grid-cols-2 gap-2 w-full h-full">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-full h-full bg-blue-200 rounded-sm"></div>
                      ))}
                    </div>
                  )}
                  {layout.id === 'classic-grid' && (
                    <div className="grid grid-cols-2 gap-1 w-full h-full border border-blue-300 p-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-full h-full bg-blue-200 rounded-sm"></div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="absolute bottom-1 inset-x-0 text-center text-xs font-medium text-gray-700">
                  {layout.name}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="creative" className="animate-fade-in mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {specialLayouts.map((layout) => (
              <div 
                key={layout.id} 
                className={`aspect-[1/1] border-2 rounded-lg cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  selectedLayout === layout.id 
                    ? 'border-blue-500 shadow-md bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300 bg-white'
                }`}
                onClick={() => onLayoutChange(layout.id)}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center p-2">
                  {layout.id === 'big-small' && (
                    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1">
                      <div className="col-span-2 row-span-1 bg-blue-200 rounded-sm"></div>
                      <div className="col-span-1 row-span-1 bg-blue-200 rounded-sm"></div>
                      <div className="col-span-1 row-span-1 bg-blue-200 rounded-sm"></div>
                    </div>
                  )}
                  {layout.id === 'creative-overlap' && (
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 m-auto w-3/4 h-3/4 bg-blue-200 rounded-sm transform rotate-3"></div>
                      <div className="absolute inset-0 m-auto w-3/4 h-3/4 bg-blue-300 rounded-sm transform -rotate-3"></div>
                    </div>
                  )}
                  {layout.id === 'full-frame' && (
                    <div className="w-full h-full bg-blue-200 rounded-sm"></div>
                  )}
                  {layout.id === 'horizontal-duo' && (
                    <div className="w-full h-full flex flex-col gap-1">
                      <div className="w-full h-1/2 bg-blue-200 rounded-sm"></div>
                      <div className="w-full h-1/2 bg-blue-200 rounded-sm"></div>
                    </div>
                  )}
                  {layout.id === 'vertical-duo' && (
                    <div className="w-full h-full flex flex-row gap-1">
                      <div className="w-1/2 h-full bg-blue-200 rounded-sm"></div>
                      <div className="w-1/2 h-full bg-blue-200 rounded-sm"></div>
                    </div>
                  )}
                  {layout.id === 'large-vertical' && (
                    <div className="w-full h-full flex flex-col gap-1">
                      <div className="w-full h-2/3 bg-blue-200 rounded-sm"></div>
                      <div className="w-full h-1/3 bg-blue-200 rounded-sm"></div>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-1 inset-x-0 text-center text-xs font-medium text-gray-700">
                  {layout.name}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DigiboothLayoutSelector;
