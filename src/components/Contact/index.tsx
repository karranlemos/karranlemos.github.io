import { useTranslation } from 'react-i18next';
import * as S from './styles';
import LinkedInIcon from '../../assets/linkedin.svg?react';
import ResumeIcon from '../../assets/resume.svg?react';

export function Contact() {
  const { t, i18n } = useTranslation();
  const resumeUrl = `/pdfs/Resume - Karran Lemos (${i18n.language === 'pt' ? 'pt' : 'en'}).pdf`;

  return (
    <S.Section id="contact">
      <S.SectionLabel>{t('contact.label')}</S.SectionLabel>
      <S.SectionTitle>{t('contact.title')}</S.SectionTitle>
      <S.Subtitle>{t('contact.subtitle')}</S.Subtitle>

      <S.Buttons>
        <S.IconButton as="a" href="https://www.linkedin.com/in/karranlemos" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
          {t('contact.linkedin')}
        </S.IconButton>
        <S.IconButton as="a" href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <ResumeIcon />
          {t('contact.resume')}
        </S.IconButton>
      </S.Buttons>
    </S.Section>
  );
}
