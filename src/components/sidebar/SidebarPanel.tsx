
import React from 'react';
import { X } from 'lucide-react';
import StickersPanel from './StickersPanel';
import LayoutsPanel from './LayoutsPanel';
import TextPanel from './TextPanel';
import DesignPanel from './DesignPanel';
import CategoriesPanel from './CategoriesPanel';

interface SidebarPanelProps {
  activePanel: string | null;
  selectedSticker: string | null;
  onSelectSticker: (sticker: {id: string; name: string; src: string}) => void;
  onClose: () => void;
  isCollapsed: boolean;
}

const SidebarPanel: React.FC<SidebarPanelProps> = ({ 
  activePanel, 
  selectedSticker, 
  onSelectSticker, 
  onClose, 
  isCollapsed 
}) => {
  if (!activePanel) return null;

  return (
    <>
      {/* Panel overlay */}
      <div 
        className="fixed left-[120px] md:left-[140px] top-0 h-full w-[280px] bg-[#242424] border-l border-[#333] z-50 overflow-auto"
        style={{ height: '100vh' }}
      >
        <div className="flex items-center justify-between p-3 border-b border-[#333] sticky top-0 bg-[#242424] z-10">
          <h3 className="text-sm font-medium capitalize">{activePanel}</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-md hover:bg-[#333] text-gray-400 hover:text-white"
            aria-label="Close panel"
          >
            <X size={14} />
          </button>
        </div>
        
        <div className="p-3">
          {activePanel === 'stickers' && (
            <StickersPanel 
              selectedSticker={selectedSticker} 
              onSelectSticker={onSelectSticker} 
            />
          )}
          
          {activePanel === 'layouts' && <LayoutsPanel />}
          
          {activePanel === 'text' && <TextPanel />}
          
          {activePanel === 'design' && <DesignPanel />}
          
          {activePanel === 'categories' && <CategoriesPanel />}
        </div>
      </div>

      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
        style={{ marginLeft: isCollapsed ? '120px' : '140px' }}
      />
    </>
  );
};

export default SidebarPanel;
