import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Section = styled.section`
  padding: 6rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  color: ${theme.colors.textMuted};
  font-size: 1.05rem;
  max-width: 480px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.85rem 2rem;
  border: 1.5px solid ${theme.colors.border};
  border-radius: ${theme.radius.md};
  color: ${theme.colors.text};
  font-size: 0.95rem;
  font-weight: 600;
  background: ${theme.colors.bgCard};
  transition: border-color 0.2s, color 0.2s, transform 0.15s;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${theme.colors.accent};
    color: ${theme.colors.accent};
    transform: translateY(-3px);
  }
`;
