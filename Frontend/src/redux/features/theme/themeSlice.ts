import { Direction } from '@mui/system';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PresetColor, ThemeMode, ThemeState } from './types';

const initialState: ThemeState = {
  mode: 'light',
  presetColor: 'default',
  fontFamily: 'SansOri,sans-serif',
  direction: 'ltr',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<ThemeMode>) {
      const myState = state;
      myState.mode = action.payload;
    },
    setPresetColor(state, action: PayloadAction<PresetColor>) {
      const myState = state;
      myState.presetColor = action.payload;
    },
    setFontFamily(state, action: PayloadAction<string>) {
      const myState = state;
      myState.fontFamily = action.payload;
    },
    setDirection(state, action: PayloadAction<Direction>) {
      const myState = state;
      myState.direction = action.payload;
    },
    setTheme(state, action: PayloadAction<Partial<ThemeState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setMode,
  setPresetColor,
  setFontFamily,
  setDirection,
  setTheme,
} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
export default themeSlice.reducer;
