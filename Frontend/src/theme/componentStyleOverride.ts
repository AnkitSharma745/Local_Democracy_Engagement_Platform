import { Theme } from '@mui/material/styles';

export default function componentStyleOverrides(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.common.white,
          boxShadow: 'none',
        },
      },
    },
  };
}
