import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useAppSelector } from '@/redux/core/utils/reduxHook';
import Palette from './palettes';
import componentStyleOverrides from './componentStyleOverride';
import Typography from './typography';

interface Props {
  children: React.ReactNode;
}

export default function ThemeCustomization({ children }: Props) {
  const mode = useAppSelector((state) => state.theme.mode);
  const presetColor = useAppSelector((state) => state.theme.presetColor);
  const fontFamily = useAppSelector((state) => state.theme.fontFamily);
  const direction = useAppSelector((state) => state.theme.direction);

  const theme = useMemo(() => Palette(presetColor, mode), [presetColor, mode]);
  const themeTypography = useMemo(
    () => Typography(theme, fontFamily),
    [theme, fontFamily]
  );

  const themeOptions = useMemo(
    () => ({
      direction,
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: '2rem',
          padding: '1rem',
          '@media (min-width: 600px)': {
            minHeight: '2rem',
          },
        },
      },
      typography: themeTypography,
    }),
    [theme, themeTypography, direction]
  );

  const themes = useMemo(() => createTheme(themeOptions), [themeOptions]);

  themes.components = useMemo(() => componentStyleOverrides(themes), [themes]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
