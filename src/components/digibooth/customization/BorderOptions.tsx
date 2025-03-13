import React from 'react';
import { BorderStyle, BorderWidth } from '@/components/digibooth/BorderStyleSelector';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
interface BorderOptionsProps {
  borderStyle: BorderStyle;
  setBorderStyle: (style: BorderStyle) => void;
  borderWidth: BorderWidth;
  setBorderWidth: (width: BorderWidth) => void;
}
const BorderOptions: React.FC<BorderOptionsProps> = ({
  borderStyle,
  setBorderStyle,
  borderWidth,
  setBorderWidth
}) => {
  // Border style options
  const borderStyles: {
    id: BorderStyle;
    name: string;
  }[] = [{
    id: 'solid',
    name: 'Solid'
  }, {
    id: 'dashed',
    name: 'Dashed'
  }, {
    id: 'dotted',
    name: 'Dotted'
  }, {
    id: 'double',
    name: 'Double'
  }, {
    id: 'groove',
    name: 'Groove'
  }, {
    id: 'ridge',
    name: 'Ridge'
  }];

  // Border width options
  const borderWidths: {
    id: BorderWidth;
    name: string;
  }[] = [{
    id: 'thin',
    name: 'Thin'
  }, {
    id: 'medium',
    name: 'Medium'
  }, {
    id: 'thick',
    name: 'Thick'
  }];
  return;
};
export default BorderOptions;