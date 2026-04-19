import styled, { keyframes } from 'styled-components';
import { theme } from '../../../styles/theme';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

export const Box = styled.div`
  flex: 0 0 380px;
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadow};
  animation: ${fadeUp} 0.7s 0.15s ease both;
  height: 240px;

  @media (max-width: 860px) {
    flex: 0 0 auto;
    width: 100%;
    max-width: 380px;
  }
`;

export const Bar = styled.div`
  background: ${theme.colors.bgSecondary};
  padding: 0.75rem 1rem;
  display: flex;
  gap: 6px;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const Dot = styled.span<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

export const Body = styled.div`
  padding: 1.25rem 1.5rem;
  font-family: ${theme.fonts.mono};
  font-size: 0.85rem;
  line-height: 2;
  color: ${theme.colors.textMuted};
`;

export const Line = styled.div``;

export const Prompt = styled.span`
  color: ${theme.colors.accent};
`;

export const Cmd = styled.span`
  color: ${theme.colors.text};
`;

export const Output = styled.span<OutputProps>`
  color: ${({ isGreen }) => isGreen ? "#3fb950" : theme.colors.textMuted};
`;

export const Cursor = styled.span`
  color: ${theme.colors.accent};
  animation: ${blink} 1.1s step-end infinite;
`;

export interface OutputProps {
  isGreen?: boolean
}
