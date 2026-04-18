import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterEl = styled.footer`
  border-top: 1px solid ${theme.colors.border};
  padding: 1.75rem 2rem;
  text-align: center;
  font-family: ${theme.fonts.mono};
  font-size: 0.82rem;
  color: ${theme.colors.textDim};
`;
