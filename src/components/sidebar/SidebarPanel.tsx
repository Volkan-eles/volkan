
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import StickersPanel from './StickersPanel';
import LayoutsPanel from './LayoutsPanel';
import TextPanel from './TextPanel';
import DesignPanel from './DesignPanel';
import CategoriesPanel from './CategoriesPanel';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  // Close panel on escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activePanel) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [activePanel, onClose]);
  
  if (!activePanel) return null;

  const sidebarWidth = isCollapsed ? '3rem' : '8.75rem';
  const panelWidth = isMobile ? '260px' : '280px';

  return (
    <>
      {/* Panel overlay */}
      <div 
        className="fixed top-0 h-full bg-[#242424] border-l border-[#333] z-50 overflow-auto transition-all duration-200"
        style={{ 
          left: sidebarWidth, 
          width: panelWidth,
          height: '100vh' 
        }}
      >
        <div className="flex items-center justify-between p-3 border-b border-[#333] sticky top-0 bg-[#242424] z-10">
          <h3 className="text-sm font-medium capitalize">{activePanel}</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-md hover:bg-[#333] text-gray-400 hover:text-white transition-colors"
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
        className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-200"
        onClick={onClose}
        style={{ marginLeft: sidebarWidth }}
      />
    </>
  );
};

export default SidebarPanel;
