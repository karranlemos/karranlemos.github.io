import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 6rem 2rem 4rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 860px) {
    min-height: unset;
    flex-direction: column;
    text-align: center;
    gap: 2.5rem;
  }
`;

export const Content = styled.div`
  flex: 1;
  animation: ${fadeUp} 0.7s ease both;
`;

export const Greeting = styled.p`
  font-family: ${theme.fonts.mono};
  color: ${theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const Name = styled.h1`
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 800;
  color: ${theme.colors.text};
  line-height: 1.1;
  margin-bottom: 1.2rem;
  letter-spacing: -1.5px;
`;

export const Subtitle = styled.p`
  font-size: 1.15rem;
  color: ${theme.colors.textMuted};
  max-width: 480px;
  margin-bottom: 2rem;
  line-height: 1.75;
`;

export const Highlight = styled.span`
  color: ${theme.colors.accent};
  font-weight: 600;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 860px) {
    justify-content: center;
  }
`;

export const ResumeButton = styled.button`
  padding: 0.75rem 1.75rem;
  background: ${theme.colors.accent};
  color: ${theme.colors.bg};
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: ${theme.radius.md};
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: ${theme.colors.accentHover};
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled.a`
  padding: 0.75rem 1.75rem;
  border: 1.5px solid ${theme.colors.border};
  color: ${theme.colors.text};
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: ${theme.radius.md};
  transition: border-color 0.2s, transform 0.15s;
  display: inline-flex;
  align-items: center;

  &:hover {
    border-color: ${theme.colors.accent};
    color: ${theme.colors.accent};
    transform: translateY(-2px);
  }
`;

