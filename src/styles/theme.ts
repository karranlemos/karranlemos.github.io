export const theme = {
  colors: {
    bg: '#0d1117',
    bgSecondary: '#161b22',
    bgCard: '#1c2128',
    border: '#30363d',
    accent: '#58a6ff',
    accentHover: '#79c0ff',
    text: '#e6edf3',
    textMuted: '#8b949e',
    textDim: '#6e7681',
  },
  fonts: {
    sans: "'Inter', 'Segoe UI', sans-serif",
    mono: "'Fira Code', 'Cascadia Code', monospace",
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
  },
  shadow: '0 4px 24px rgba(0,0,0,0.4)',
};

export type Theme = typeof theme;
