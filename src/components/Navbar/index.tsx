import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

const NAV_LINKS = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');

  return (
    <>
      <S.Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
      <S.Nav scrolled={scrolled}>
        <S.NavInner>
          <S.Logo href="#home">{'<KL />'}</S.Logo>

          <S.NavRight>
            <S.NavLinks open={menuOpen}>
              {NAV_LINKS.map(link => (
                <S.NavLink key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {t(link.key)}
                </S.NavLink>
              ))}
            </S.NavLinks>

            <S.LangToggle onClick={toggleLang}>
              {i18n.language === 'en' ? 'EN' : 'PT'}
            </S.LangToggle>

            <S.Hamburger onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
              <span />
              <span />
              <span />
            </S.Hamburger>
          </S.NavRight>
        </S.NavInner>
      </S.Nav>
    </>
  );
}
