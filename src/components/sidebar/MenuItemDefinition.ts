
import { LucideIcon } from 'lucide-react';
import { 
  Home, 
  Palette, 
  LayoutGrid, 
  Sticker, 
  Type, 
  FolderOpen, 
  MoreHorizontal, 
  Settings 
} from 'lucide-react';

export interface MenuItemDefinition {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  panelType?: 'stickers' | 'layouts' | 'text' | 'design' | 'categories';
}

export const menuItems: MenuItemDefinition[] = [
  { icon: Home, label: 'Dashboard', isActive: true },
  { icon: Palette, label: 'Design', panelType: 'design' },
  { icon: LayoutGrid, label: 'Layout', panelType: 'layouts' },
  { icon: Sticker, label: 'Sticker', panelType: 'stickers' },
  { icon: Type, label: 'Text', panelType: 'text' },
  { icon: FolderOpen, label: 'Categories', panelType: 'categories' },
  { icon: MoreHorizontal, label: 'More' },
  { icon: Settings, label: 'Settings' },
];
