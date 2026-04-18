import * as S from './styles';

const EXPERIENCES = [
  {
    logo: '🏢',
    company: 'Acme Corp',
    role: 'Senior Full-Stack Engineer',
    period: 'Jan 2023 – Present',
    bullets: [
      'Led migration of monolith to microservices, cutting deploy time by 60%.',
      'Built real-time dashboard with React & WebSockets serving 50k daily users.',
    ],
  },
  {
    logo: '🚀',
    company: 'StartupXYZ',
    role: 'Software Engineer',
    period: 'Jun 2020 – Dec 2022',
    bullets: [
      'Developed core REST API with Node.js, reducing latency by 40%.',
      'Implemented CI/CD pipelines with GitHub Actions and Docker.',
    ],
  },
  {
    logo: '🌐',
    company: 'WebAgency Co.',
    role: 'Frontend Developer',
    period: 'Mar 2018 – May 2020',
    bullets: [
      'Delivered 15+ client projects using React, improving conversion rates.',
      'Introduced component library that sped up UI dev by 35%.',
    ],
  },
];

export function Experience() {
  return (
    <S.Section id="experience">
      <S.Inner>
        <S.SectionLabel>Where I've worked</S.SectionLabel>
        <S.SectionTitle>Experience</S.SectionTitle>

        <S.Grid>
          {EXPERIENCES.map(exp => (
            <S.Card key={exp.company}>
              <S.CardImage>{exp.logo}</S.CardImage>
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
