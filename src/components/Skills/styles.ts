import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Section = styled.section`
  padding: 6rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SectionLabel = styled.p`
  font-family: ${theme.fonts.mono};
  color: ${theme.colors.accent};
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${theme.colors.text};
  margin-bottom: 3rem;
  letter-spacing: -0.5px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  padding: 1.75rem;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`;

export const CardIcon = styled.div`
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
  user-select: none;
`;

export const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Item = styled.li`
  font-size: 0.9rem;
  color: ${theme.colors.textMuted};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '▸';
    color: ${theme.colors.accent};
    font-size: 0.75rem;
    flex-shrink: 0;
  }
`;
