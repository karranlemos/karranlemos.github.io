import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styles from './styles'
import MobileMenuButton from '../../../../components/MobileMenuButton'
import { scrollBehaviorAction } from '../../../../store/ducks/windowReducer/actions'

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
  }, [menuOpen])

  useEffect(() => {
    return () => dispatch(scrollBehaviorAction('smooth'))
  }, [])

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