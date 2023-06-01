import { AppBar, Container } from '@mui/material';
import {
  ButtonContainer,
  HomeButton,
  StyledButton,
  StyledToolbar,
} from './styles';
import { useTranslation } from 'react-i18next';

export const HeaderBar = () => {
  const { t } = useTranslation();

  return (
    <AppBar>
      <Container>
        <StyledToolbar>
          <HomeButton>Karran Lemos</HomeButton>
          <ButtonContainer>
            <StyledButton>{t('menu.labels.projects')}</StyledButton>
            <StyledButton>{t('menu.labels.about')}</StyledButton>
            <StyledButton>{t('menu.labels.contact')}</StyledButton>
          </ButtonContainer>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
