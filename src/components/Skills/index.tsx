import * as S from './styles';

const SKILLS = [
  {
    icon: '💻',
    title: 'Languages',
    items: ['TypeScript', 'Python', 'Go', 'Rust', 'SQL'],
  },
  {
    icon: '⚙️',
    title: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js / Express', 'FastAPI', 'GraphQL'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Misc',
    items: ['Docker / Kubernetes', 'AWS / GCP', 'PostgreSQL / Redis', 'Git & CI/CD', 'Linux'],
  },
];

export function Skills() {
  return (
    <S.Section id="skills">
      <S.SectionLabel>What I bring to the table</S.SectionLabel>
      <S.SectionTitle>Skills & Abilities</S.SectionTitle>

      <S.Grid>
        {SKILLS.map(skill => (
          <S.Card key={skill.title}>
            <S.CardIcon>{skill.icon}</S.CardIcon>
            <S.CardTitle>{skill.title}</S.CardTitle>
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
