import { useTranslation } from 'react-i18next';
import * as S from './styles';

interface Job {
  company: string;
  role: string;
  period: string;
  bullets: string[];
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
                <S.Company>{exp.company}</S.Company>
                <S.Role>{exp.role}</S.Role>
                <S.Period>{exp.period}</S.Period>
                <S.List>
                  {exp.bullets.map((b, i) => (
                    <S.Item key={i}>{b}</S.Item>
                  ))}
                </S.List>
              </S.CardBody>
            </S.Card>
          ))}
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
