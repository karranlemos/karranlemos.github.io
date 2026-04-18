import { useState, useEffect } from 'react';
import * as S from './styles';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <S.Nav $scrolled={scrolled}>
      <S.NavInner>
        <S.Logo href="#home">{'<JD />'}</S.Logo>

        <S.Hamburger onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </S.Hamburger>

        <S.NavLinks $open={menuOpen}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <S.NavLink href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </S.NavLink>
            </li>
          ))}
        </S.NavLinks>
      </S.NavInner>
    </S.Nav>
  );
}
