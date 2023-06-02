import { ThemeProvider, createTheme } from '@mui/material';
import { GlobalCss } from './core/GlobalCss';
import './core/i18n';
import { Page } from './page';

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalCss />
      <Page />
    </ThemeProvider>
  );
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
