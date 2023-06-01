import { IconButton, styled } from '@mui/material';

export const Container = styled('div')`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

export const StyledIconButton = styled(IconButton)`
  & .MuiSvgIcon-root {
    font-size: 60px;
  }
`;
