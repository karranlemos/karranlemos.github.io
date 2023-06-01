import { AppBar, Container } from '@mui/material';
import {
  ButtonContainer,
  HomeButton,
  StyledButton,
  StyledToolbar,
} from './styles';

export const Page = () => {
  return (
    <AppBar position="static">
      <Container>
        <StyledToolbar disableGutters>
          <HomeButton>Karran Lemos</HomeButton>
          <ButtonContainer>
            <StyledButton>Projetos</StyledButton>
            <StyledButton>Sobre</StyledButton>
            <StyledButton>Contato</StyledButton>
          </ButtonContainer>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
