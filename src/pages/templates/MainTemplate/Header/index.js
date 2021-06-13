import React, { useState, useEffect, useLayoutEffect } from 'react'

import styles from './styles'
import MobileMenuButton from '../../../../components/MobileMenuButton'

const MAX_MOBILE_WIDTH = 700

export default function Header({
  homeItem = null,
  pagesItems = [],
}) {
  const [pinned, setPinned] = useState(false)
  const [mobileMode, setMobileMode] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  })

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

  useLayoutEffect(() => {
    const resizeCallback = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', resizeCallback)
    resizeCallback()

    return () => window.removeEventListener('resize', resizeCallback)
  }, [])

  useLayoutEffect(() => {
    if (windowSize.width <= MAX_MOBILE_WIDTH)
      setMobileMode(true)
    else
      setMobileMode(false)
  }, [windowSize])

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
  const [menuOpen, setMenuOpen] = useState(false)

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
          <HomeButton {...homeItem} />
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
          />
        </div>
      </nav>
    </header>
  )
}


const HomeButton = ({ text, link }) => {
  if (!text || !link)
    return <div></div>

  return (
    <MenuLinkButton
      text={text}
      link={link}
    />
  )
}

const SideButtons = ({
  sideButtons,
  style: externalStyle = null,
  menuButtonStyle = null,
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
            onClick={onClick}
          />
        ))
      }
    </div>
  )
}

const MenuLinkButton = ({
  text,
  link,
  externalButtonStyle = null,
  externalAnchorStyle = null,
  onClick = () => { },
}) => {
  const finalButtonStyle = {
    ...styles.menuButton,
    ...externalButtonStyle,
  }

  const finalAnchorStyle = {
    ...styles.menuButtonAnchor,
    ...externalAnchorStyle,
  }

  return (
    <div
      style={finalButtonStyle}
      onClick={onClick}
    >
      <a
        href={link}
        style={finalAnchorStyle}
      >{text}</a>
    </div>
  )
}