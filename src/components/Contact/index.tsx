import { useTranslation } from 'react-i18next';
import * as S from './styles';
import LinkedInIcon from '../../assets/linkedin.svg?react';
import ResumeIcon from '../../assets/resume.svg?react';

export function Contact() {
  const { t } = useTranslation();

  return (
    <S.Section id="contact">
      <S.SectionLabel>{t('contact.label')}</S.SectionLabel>
      <S.SectionTitle>{t('contact.title')}</S.SectionTitle>
      <S.Subtitle>{t('contact.subtitle')}</S.Subtitle>

      <S.Buttons>
        <S.IconButton onClick={() => console.log('LinkedIn clicked')}>
          <LinkedInIcon />
          {t('contact.linkedin')}
        </S.IconButton>
        <S.IconButton onClick={() => console.log('Resume clicked')}>
          <ResumeIcon />
          {t('contact.resume')}
        </S.IconButton>
      </S.Buttons>
    </S.Section>
  );
}
