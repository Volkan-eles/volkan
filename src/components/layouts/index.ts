
import DiagonalStripsLayout from './DiagonalStripsLayout';
import { ClassicStripLayout, VerticalStripLayout, ElegantStripLayout, LargeVerticalLayout } from './StripLayouts';
import { BigSmallLayout, VerticalDuoLayout, HorizontalDuoLayout } from './DuoLayouts';
import { GridLayout, SimpleGridLayout, ClassicGridLayout } from './GridLayouts';
import { CreativeOverlapLayout, FullFrameLayout } from './CreativeLayouts';

// Define the common interface for all layout components
export interface LayoutProps {
  photos: string[];
  backgroundColor?: string;
  dateString?: string;
  textColor?: string; // Added to handle text color based on background darkness
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
