
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
  const panelWidth = isMobile ? '280px' : '320px';

  return (
    <>
      {/* Enhanced panel with glassmorphism effect */}
      <div 
        className="fixed top-0 h-full border-l border-white/10 z-50 overflow-hidden transition-all duration-300 backdrop-blur-xl bg-gradient-to-br from-[#242424]/90 to-[#1A1A2A]/90 shadow-2xl animate-fade-in"
        style={{ 
          left: sidebarWidth, 
          width: panelWidth,
          height: '100vh',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)'
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
      >
        <div className="flex items-center justify-between p-3 border-b border-white/10 sticky top-0 z-10 bg-gradient-to-r from-[#242424]/95 to-[#1A1A2A]/95 backdrop-blur-xl">
          <h3 
            id="panel-title" 
            className="text-sm font-medium capitalize bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
          >
            {activePanel}
          </h3>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 transform hover:rotate-90"
            aria-label="Close panel"
          >
            <X size={14} />
          </button>
        </div>
        
        <div className="p-3 overflow-y-auto h-[calc(100vh-48px)] custom-scrollbar">
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

      {/* Improved backdrop with enhanced blur effect */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
        style={{ marginLeft: sidebarWidth }}
        role="presentation"
        aria-hidden="true"
      />
    </>
  );
};

export default SidebarPanel;
