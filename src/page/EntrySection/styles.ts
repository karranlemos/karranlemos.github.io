import { Typography, styled } from '@mui/material';

export const SectionContainer = styled('section')`
  position: relative;
  height: min(100vh, 800px);
  background-color: rgba(13, 13, 13, 0.9);

  display: flex;
  justify-content: center;
  align-items: center;
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

export const Title = styled(Typography)`
  font-size: 5rem;
  font-weight: bold;
`;
Title.defaultProps = { variant: 'h1', component: 'h1' };
