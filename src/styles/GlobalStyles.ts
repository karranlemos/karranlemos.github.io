import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${theme.colors.bg};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.sans};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.bg};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.border};
    border-radius: 3px;
  }
`;
