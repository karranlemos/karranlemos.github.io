import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styles from './styles'
import MobileMenuButton from '../../../../components/MobileMenuButton'
import { scrollBehaviorAction } from '../../../../store/ducks/windowReducer/actions'
import { useTranslation } from 'react-i18next'

export default function Header({
  homeItem = null,
  pagesItems = [],
}) {
  const mobileMode = useSelector(state => state.window.mobileMode)

  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const checkNavbarFixed = () => {
      const MIN_PINNED_NAVBAR = 50

      if (window.pageYOffset > MIN_PINNED_NAVBAR)
        setPinned(true)
      else
        setPinned(false)
    }

    checkNavbarFixed()
    window.addEventListener('scroll', checkNavbarFixed)
  }, [])

  if (mobileMode)
    return (
      <MobileMenu
        homeItem={homeItem}
        pagesItems={pagesItems}
        pinned={pinned}
      />
    )

  return (
    <DesktopMenu
      homeItem={homeItem}
      pagesItems={pagesItems}
      pinned={pinned}
    />
  )
}


const DesktopMenu = ({ homeItem, pagesItems, pinned }) => {
  const finalMainMenuStyle = { ...styles.mainMenu }
  if (pinned)
    Object.assign(finalMainMenuStyle, styles.mainMenuPinned)

  return (
    <header>
      <nav style={finalMainMenuStyle}>
        <div style={styles.innerMenu}>
          <HomeButton {...homeItem} />
          <SideButtons sideButtons={pagesItems} />
        </div>
      </nav>
    </header>
  )
}

const MobileMenu = ({ homeItem, pagesItems, pinned }) => {
  const dispatch = useDispatch()

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      dispatch(scrollBehaviorAction('auto'))
      return
    }

    setTimeout(() => {
      dispatch(scrollBehaviorAction('smooth'))
    }, 500)
  }, [menuOpen, dispatch])

  useEffect(() => {
    return () => dispatch(scrollBehaviorAction('smooth'))
  }, [dispatch])

  const finalMainMenuStyle = { ...styles.mainMenu }
  if (pinned || menuOpen)
    Object.assign(finalMainMenuStyle, styles.mainMenuPinned)

  const finalSideButtonsStyle = { ...styles.pagesItemsMobile }
  if (menuOpen)
    Object.assign(finalSideButtonsStyle, styles.pagesItemsMobileOpen)

  const onClickMenuButtonHandler = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
      <nav style={finalMainMenuStyle}>
        <div style={styles.innerMenu}>
          <HomeButton
            {...homeItem}
          />
          <MobileMenuButton
            size={20}
            style={styles.menuButton}
            onClick={onClickMenuButtonHandler}
          />
          <SideButtons
            sideButtons={pagesItems}
            style={finalSideButtonsStyle}
            menuButtonStyle={styles.menuButtonMobile}
            onClick={onClickMenuButtonHandler}
            externalStyleHover={styles.menuButtonAnchorHover}
          />
        </div>
      </nav>
    </header>
  )
}


const HomeButton = ({
  text,
  link,
  onClick=()=>{},
}) => {
  if (!text || !link)
    return <div></div>

  return (
    <MenuLinkButton
      text={text}
      link={link}
      onClick={onClick}
    />
  )
}

const SideButtons = ({
  sideButtons,
  style: externalStyle = null,
  menuButtonStyle = null,
  externalStyleHover = null,
  onClick = () => { },
}) => {
  const finalPagesItemsStyle = {
    ...styles.pagesItems,
    ...externalStyle
  }

  return (
    <div style={finalPagesItemsStyle}>
      {
        sideButtons.map(({ text, link }, index) => (
          <MenuLinkButton
            key={index}
            text={text}
            link={link}
            externalButtonStyle={menuButtonStyle}
            externalStyleHover={externalStyleHover}
            onClick={onClick}
          />
        ))
      }
      <LanguageButton externalButtonStyle={menuButtonStyle}/>
    </div>
  )
}

const MenuLinkButton = ({
  text,
  link,
  externalButtonStyle = null,
  externalAnchorStyle = null,
  externalStyleHover = null,
  onClick = () => { },
}) => {
  const [hover, setHover] = useState(false)

  const finalButtonStyle = {
    ...styles.menuButton,
    ...externalButtonStyle,
  }

  const finalAnchorStyle = {
    ...styles.menuButtonAnchor,
    ...externalAnchorStyle,
  }

  if (hover)
    Object.assign(finalAnchorStyle, externalStyleHover)

  const handleOnMouseEnter = () => {
    setHover(true)
  }

  const handleOnMouseLeave = () => {
    setHover(false)
  }

  return (
    <a
      href={link}
      style={finalAnchorStyle}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={onClick}
    >
      <div
        style={finalButtonStyle}
      >{text}</div>
    </a>
  )
}

export const LanguageButton = ({
  externalButtonStyle = null,
}) => {
  const { i18n } = useTranslation()

  const finalButtonStyle = {
    ...styles.menuButton,
    ...externalButtonStyle,
    minWidth: 'auto',
  }

  const finalAnchorStyle = styles.menuButtonAnchor

  const toggleLanguage = () => {
    if (i18n.language === 'pt')
      i18n.changeLanguage('en')
    else
      i18n.changeLanguage('pt')
  }

  return (
    <div style={finalAnchorStyle}>
      <div
        style={finalButtonStyle}
        onClick={toggleLanguage}
      >
        {i18n.language}
      </div>
    </div>
  )
}