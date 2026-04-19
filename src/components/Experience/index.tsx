import { useTranslation } from 'react-i18next';
import * as S from './styles';

interface Job {
  title: string;
  subtitle: string;
}

export function Experience() {
  const { t } = useTranslation();
  const jobs = t('experience.jobs', { returnObjects: true }) as Job[];

  return (
    <S.Section id="experience">
      <S.Inner>
        <S.SectionLabel>{t('experience.label')}</S.SectionLabel>
        <S.SectionTitle>{t('experience.title')}</S.SectionTitle>

        <S.Grid>
          {jobs.map((exp, idx) => (
            <S.Card key={idx}>
              <S.CardBody>
                <S.Title>{exp.title}</S.Title>
                <S.Subtitle>{exp.subtitle}</S.Subtitle>
              </S.CardBody>
            </S.Card>
          ))}
        </S.Grid>
        <S.ResumeHint>{t('experience.resumeHint')}</S.ResumeHint>
      </S.Inner>
    </S.Section>
  );
}
