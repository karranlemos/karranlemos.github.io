import { Button, Toolbar, styled } from '@mui/material';

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;
StyledToolbar.defaultProps = { disableGutters: true };

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

export const LanguageButton = styled(Button)`
  min-width: 48px;

  svg {
    width: 28px;
  }
`;
