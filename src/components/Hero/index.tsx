import { useTranslation, Trans } from 'react-i18next';
import * as S from './styles';
import { FakeWindow } from './FakeWindow';

export function Hero() {
  const { t } = useTranslation();

  return (
    <S.Section id="home">
      <S.Content>
        <S.Greeting>{t('hero.greeting')}</S.Greeting>
        <S.Name>Karran Lemos</S.Name>
        <S.Subtitle>
          <Trans i18nKey="hero.subtitle" components={{ strong: <S.Highlight /> }} />
        </S.Subtitle>
        <S.Actions>
          <S.ResumeButton onClick={() => console.log('Resume clicked')}>
            {t('hero.viewResume')}
          </S.ResumeButton>
          <S.SecondaryButton href="#contact">{t('hero.getInTouch')}</S.SecondaryButton>
        </S.Actions>
      </S.Content>

      <FakeWindow />
    </S.Section>
  );
}
