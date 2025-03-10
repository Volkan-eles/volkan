import DiagonalStripsLayout from './DiagonalStripsLayout';
import { ClassicStripLayout, VerticalStripLayout, ElegantStripLayout, LargeVerticalLayout } from './StripLayouts';
import { BigSmallLayout, VerticalDuoLayout, HorizontalDuoLayout } from './DuoLayouts';
import { GridLayout, SimpleGridLayout, ClassicGridLayout } from './GridLayouts';
import { CreativeOverlapLayout, FullFrameLayout } from './CreativeLayouts';
import { TextElement } from '../TextEditor/TextEditor';

export interface LayoutProps {
  photos: string[];
  backgroundColor?: string;
  dateString?: string;
  texts?: TextElement[];
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
