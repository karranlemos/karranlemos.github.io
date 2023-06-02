import { AppBar, Container } from '@mui/material';
import {
  ButtonContainer,
  HomeButton,
  LanguageButton,
  StyledButton,
  StyledToolbar,
} from './styles';
import { useTranslation } from 'react-i18next';
import { US, BR } from 'country-flag-icons/react/3x2';
import { updateCurrentLanguage } from '../../providers/localStorage/language';

export const HeaderBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLanguage);
    updateCurrentLanguage(newLanguage);
  };

  return (
    <AppBar>
      <Container>
        <StyledToolbar>
          <HomeButton>Karran Lemos</HomeButton>
          <ButtonContainer>
            <StyledButton>{t('menu.labels.projects')}</StyledButton>
            <StyledButton>{t('menu.labels.about')}</StyledButton>
            <StyledButton>{t('menu.labels.contact')}</StyledButton>
            <LanguageButton onClick={changeLanguage}>
              {i18n.language === 'pt' ? (
                <BR title="Português" />
              ) : (
                <US title="English" />
              )}
            </LanguageButton>
          </ButtonContainer>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
