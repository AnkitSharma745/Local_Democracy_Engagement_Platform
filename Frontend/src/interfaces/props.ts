import { Direction } from '@mui/system';
import { ReactNode } from 'react';

export interface ThemeCustomizationProps {
  children: ReactNode;
  mode?: 'light' | 'dark';
  presetColor?: string;
  fontFamily?: string;
  direction?: Direction;
}
