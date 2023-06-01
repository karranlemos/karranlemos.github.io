import { Button, ButtonProps, Toolbar, styled } from '@mui/material';

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const ButtonContainer = styled('div')`
  display: flex;
`;

export const StyledButton = styled((buttonProps: ButtonProps) => (
  <Button color="inherit" {...buttonProps} />
))`
  ${({ theme }) => theme.typography.body1}
  text-transform: none;
`;

export const HomeButton = styled(StyledButton)`
  font-weight: bold;
`;
