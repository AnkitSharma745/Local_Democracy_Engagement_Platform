export type ThemeMode = 'light' | 'dark';
export type PresetColor = 'default' | 'theme1';
export type Direction = 'ltr' | 'rtl';

export interface ThemeState {
  mode: ThemeMode;
  presetColor: PresetColor;
  fontFamily: string;
  direction: Direction;
}
