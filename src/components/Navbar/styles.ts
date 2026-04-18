import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s, box-shadow 0.3s;
  ${({ $scrolled }) =>
    $scrolled &&
    css`
      background: rgba(13, 17, 23, 0.92);
      backdrop-filter: blur(10px);
      box-shadow: 0 1px 0 ${theme.colors.border};
    `}
`;

export const NavInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  font-family: ${theme.fonts.mono};
  font-size: 1.2rem;
  color: ${theme.colors.accent};
  font-weight: 700;

  &:hover {
    color: ${theme.colors.accentHover};
  }
`;

export const NavLinks = styled.ul<{ $open: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 600px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: ${theme.colors.bgSecondary};
    padding: 1.5rem;
    gap: 1.2rem;
    border-bottom: 1px solid ${theme.colors.border};
  }
`;

export const NavLink = styled.a`
  color: ${theme.colors.textMuted};
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.text};
  }
`;

export const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: ${theme.colors.textMuted};
    border-radius: 2px;
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;
