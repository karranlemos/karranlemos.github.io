import { Button, Toolbar, styled } from '@mui/material';

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const ButtonContainer = styled('div')`
  display: flex;
`;

export const StyledButton = styled(Button)`
  ${({ theme }) => theme.typography.body1}
  text-transform: none;
`;
StyledButton.defaultProps = { color: 'inherit' };

export const HomeButton = styled(StyledButton)`
  font-weight: bold;
`;
