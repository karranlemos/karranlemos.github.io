import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Section = styled.section`
  padding: 6rem 2rem;
  background: ${theme.colors.bgSecondary};
`;

export const Inner = styled.div`
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

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  aspect-ratio: 10 / 8;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: ${theme.colors.accent};
    transform: translateY(-4px);
  }

  @media (max-width: 700px) {
    aspect-ratio: 10 / 5;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 140px;
  background: linear-gradient(135deg, #1c2128 0%, #2d333b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.border};
  font-size: 3rem;
  color: ${theme.colors.textDim};
  user-select: none;
`;

export const CardBody = styled.div`
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Title = styled.h3`
  font-size: 1.05rem;
  line-height: 1.4;
  height: calc(1.05rem * 1.4 * 2);
  font-weight: 700;
  color: ${theme.colors.text};
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Subtitle = styled.p`
  font-size: 0.85rem;
  line-height: 1.4;
  height: calc(0.85rem * 1.4 * 2);
  color: ${theme.colors.accent};
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Period = styled.p`
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  color: ${theme.colors.textDim};
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Item = styled.li`
  font-size: 0.88rem;
  color: ${theme.colors.textMuted};
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  line-height: 1.5;

  &::before {
    content: '▸';
    color: ${theme.colors.accent};
    font-size: 0.75rem;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;
