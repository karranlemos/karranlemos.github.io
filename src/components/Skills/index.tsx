import { useTranslation } from 'react-i18next';
import * as S from './styles';

const SKILLS = [
  {
    icon: '💻',
    titleKey: 'skills.cat.languages',
    items: ['TypeScript', 'Python', 'Go', 'Rust', 'SQL'],
  },
  {
    icon: '⚙️',
    titleKey: 'skills.cat.frameworks',
    items: ['React', 'Next.js', 'Node.js / Express', 'FastAPI', 'GraphQL'],
  },
  {
    icon: '🛠️',
    titleKey: 'skills.cat.tools',
    items: ['Docker / Kubernetes', 'AWS / GCP', 'PostgreSQL / Redis', 'Git & CI/CD', 'Linux'],
  },
];

export function Skills() {
  const { t } = useTranslation();

  return (
    <S.Section id="skills">
      <S.SectionLabel>{t('skills.label')}</S.SectionLabel>
      <S.SectionTitle>{t('skills.title')}</S.SectionTitle>

      <S.Grid>
        {SKILLS.map(skill => (
          <S.Card key={skill.titleKey}>
            <S.CardIcon>{skill.icon}</S.CardIcon>
            <S.CardTitle>{t(skill.titleKey)}</S.CardTitle>
            <S.List>
              {skill.items.map(item => (
                <S.Item key={item}>{item}</S.Item>
              ))}
            </S.List>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
}
