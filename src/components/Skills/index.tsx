import { useTranslation } from 'react-i18next';
import * as S from './styles';

const SKILLS = [
  {
    icon: '💻',
    titleKey: 'skills.cat.languages',
    items: ['TypeScript / JavaScript', 'C#', 'SQL', 'NoSQL', 'HTML / CSS', 'Java', 'Kotlin'],
  },
  {
    icon: '⚙️',
    titleKey: 'skills.cat.frameworks',
    items: ['React', '.NET', 'React Native', 'Express.js'],
  },
  {
    icon: '🛠️',
    titleKey: 'skills.cat.tools',
    items: ['Git', 'Docker', 'skills.cat.aiTooling', 'Razor', 'Node.JS', 'Keycloak', 'Swagger', 'Scrum'],
  },
];

export function Skills() {
  const { t } = useTranslation();

  return (
    <S.Section id="skills">
      <S.SectionLabel>{t('skills.label')}</S.SectionLabel>
      <S.SectionTitle>{t('skills.title')}</S.SectionTitle>

      <S.Grid>
        {SKILLS.map((skill, index) => (
          <S.Card key={skill.titleKey}>
            <S.CardHeader>
              <S.CardIcon index={index}>{skill.icon}</S.CardIcon>
              <S.CardTitle>{t(skill.titleKey)}</S.CardTitle>
            </S.CardHeader>
            <S.List>
              {skill.items.map(item => (
                <S.Item key={item}>{t(item)}</S.Item>
              ))}
            </S.List>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
}
