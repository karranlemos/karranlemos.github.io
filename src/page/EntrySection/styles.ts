import { styled } from '@mui/material';

export const SectionContainer = styled('div')`
  height: min(100vh, 800px);
  background-repeat: no-repeat;
  background-image: linear-gradient(
      0deg,
      rgba(13, 13, 13, 0.9),
      rgba(13, 13, 13, 0.9)
    ),
    url('images/entry-section-background.jpg');
  background-size: cover;
  background-position: center;
`;
