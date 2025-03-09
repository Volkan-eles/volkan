
import DiagonalStripsLayout from './DiagonalStripsLayout';
import { ClassicStripLayout, VerticalStripLayout, ElegantStripLayout, LargeVerticalLayout } from './StripLayouts';
import { VerticalDuoLayout, HorizontalDuoLayout } from './DuoLayouts';
import { BigSmallLayout, CreativeOverlapLayout, FullFrameLayout } from './CreativeLayouts';
import { GridLayout, SimpleGridLayout, ClassicGridLayout } from './GridLayouts';

// Define the common interface for all layout components
export interface LayoutProps {
  photos: string[];
  backgroundColor?: string;
  overlayImage?: HTMLImageElement | null;
}

export {
  DiagonalStripsLayout,
  ClassicStripLayout,
  VerticalStripLayout,
  ElegantStripLayout,
  LargeVerticalLayout,
  BigSmallLayout,
  GridLayout,
  SimpleGridLayout,
  ClassicGridLayout,
  VerticalDuoLayout,
  HorizontalDuoLayout,
  CreativeOverlapLayout,
  FullFrameLayout
};
