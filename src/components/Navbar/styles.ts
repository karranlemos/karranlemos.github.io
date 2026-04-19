import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Nav = styled.nav<{ scrolled: boolean; menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s, box-shadow 0.3s, backdrop-filter 0.3s;
  ${({ scrolled }) =>
    scrolled &&
    css`
      background: rgba(13, 17, 23, 0.92);
      backdrop-filter: blur(10px);
      box-shadow: 0 1px 0 ${theme.colors.border};
    `}

  @media (max-width: 600px) {
    ${({ menuOpen }) => {
      if (!menuOpen)
        return null;

      return css`
        background: transparent;
        backdrop-filter: none;
        box-shadow: none;
      `;
    }}
  }
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

export const NavLinks = styled.ul<{ open: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    padding: 0.5rem 0;
    animation: ${fadeIn} 0.3s ease both;
  }
`;

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 0 1rem;
  color: ${theme.colors.textMuted};
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.text};
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 0.85rem 1.5rem;
    font-size: 1rem;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LangToggle = styled.button`
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${theme.colors.textMuted};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.md};
  padding: 0.2rem 0.55rem;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
  }
`;

export const Overlay = styled.div<{ open: boolean }>`
  display: none;

  @media (max-width: 600px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(12px);
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
    transition: opacity 0.2s ease;
    z-index: 99;
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
    margin-left: 8px;
  }
`;
