
import React, { useState } from 'react';
import { 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from '@/components/ui/sidebar';
import { 
  Home, 
  Palette, 
  LayoutGrid, 
  Sticker, 
  Type, 
  FolderOpen, 
  MoreHorizontal, 
  Settings,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SidebarMenuItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  submenuItems?: { label: string; id: string }[];
}

const menuItems: SidebarMenuItemProps[] = [
  { icon: Home, label: 'Dashboard', isActive: true },
  { 
    icon: Palette, 
    label: 'Design', 
    hasSubmenu: true,
    submenuItems: [
      { label: 'Templates', id: 'templates' },
      { label: 'Colors', id: 'colors' },
      { label: 'Styles', id: 'styles' }
    ]
  },
  { 
    icon: LayoutGrid, 
    label: 'Layout',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Grid', id: 'grid' },
      { label: 'Strip', id: 'strip' },
      { label: 'Custom', id: 'custom' }
    ]
  },
  { 
    icon: Sticker, 
    label: 'Sticker',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Characters', id: 'characters' },
      { label: 'Emoji', id: 'emoji' },
      { label: 'Decorative', id: 'decorative' }
    ]
  },
  { 
    icon: Type, 
    label: 'Text',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Headings', id: 'headings' },
      { label: 'Body', id: 'body' },
      { label: 'Effects', id: 'effects' }
    ]
  },
  { 
    icon: FolderOpen, 
    label: 'Categories',
    hasSubmenu: true,
    submenuItems: [
      { label: 'K-pop', id: 'kpop' },
      { label: 'Casual', id: 'casual' },
      { label: 'Party', id: 'party' }
    ]
  },
  { icon: MoreHorizontal, label: 'More' },
  { icon: Settings, label: 'Settings' },
];

const SidebarMenuItems: React.FC = () => {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label) 
        : [...prev, label]
    );
  };

  const isExpanded = (label: string) => expandedItems.includes(label);

  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          {isCollapsed ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton 
                    className={`flex items-center justify-center py-1.5 ${
                      item.isActive 
                        ? 'text-white bg-[#4b30ab] hover:bg-[#5b40bb]' 
                        : 'text-gray-300 hover:bg-[#2A2A2A]'
                    }`}
                  >
                    <item.icon size={16} />
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <>
              {item.hasSubmenu ? (
                <Collapsible
                  open={isExpanded(item.label)}
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton 
                      onClick={() => toggleExpand(item.label)}
                      className={`flex items-center justify-between w-full py-1.5 ${
                        item.isActive 
                          ? 'text-white bg-[#4b30ab] hover:bg-[#5b40bb]' 
                          : 'text-gray-300 hover:bg-[#2A2A2A]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon size={16} />
                        <span className="text-sm">{item.label}</span>
                      </div>
                      {isExpanded(item.label) ? (
                        <ChevronDown size={14} />
                      ) : (
                        <ChevronRight size={14} />
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="pl-6 py-1 space-y-1">
                      {item.submenuItems?.map(subitem => (
                        <button 
                          key={subitem.id}
                          className="w-full text-left text-xs text-gray-400 hover:text-white py-1 px-2 rounded hover:bg-[#2A2A2A] transition-colors"
                        >
                          {subitem.label}
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <SidebarMenuButton 
                  className={`flex items-center gap-2 py-1.5 ${
                    item.isActive 
                      ? 'text-white bg-[#4b30ab] hover:bg-[#5b40bb]' 
                      : 'text-gray-300 hover:bg-[#2A2A2A]'
                  }`}
                >
                  <item.icon size={16} />
                  <span className="text-sm">{item.label}</span>
                </SidebarMenuButton>
              )}
            </>
          )}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default SidebarMenuItems;
