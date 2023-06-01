import { styled } from '@mui/material';

export const SectionContainer = styled('section')`
  position: relative;
  height: min(100vh, 800px);
  background-color: rgba(13, 13, 13, 0.9);
`;

export const Background = styled('div')`
  position: absolute;
  inset: 0;

  background-repeat: no-repeat;
  background-image: url('images/entry-section-background.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  z-index: -1;
`;
