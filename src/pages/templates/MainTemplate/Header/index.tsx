import { useState, useEffect, CSSProperties } from 'react'

import { styles } from './styles'
import { MobileMenuButton } from '../../../../components/MobileMenuButton'
import { scrollBehaviorAction } from '../../../../store/ducks/windowReducer/actions'
import { LanguageButton } from './LanguageButton'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { IButtonData } from '../interfaces'

interface IOwnProps {
  homeItem: IButtonData
  pagesItems: IButtonData[]
}

export const Header = ({
  homeItem,
  pagesItems,
}: IOwnProps) => {
  const mobileMode = useAppSelector(state => state.window.mobileMode)

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


interface IDesktopMenu {
  homeItem: IButtonData
  pagesItems: IButtonData[]
  pinned: boolean
}

const DesktopMenu = ({ homeItem, pagesItems, pinned }: IDesktopMenu) => {
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

interface IMobileMenu {
  homeItem: IButtonData
  pagesItems: IButtonData[]
  pinned: boolean
}

const MobileMenu = ({ homeItem, pagesItems, pinned }: IMobileMenu) => {
  const dispatch = useAppDispatch()

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
    return () => {
      dispatch(scrollBehaviorAction('smooth'))
    }
  }, [])

  const finalMainMenuStyle = { ...styles.mainMenu }
  if (pinned || menuOpen)
    Object.assign(finalMainMenuStyle, styles.mainMenuPinned)

  const finalSideButtonsStyle = { ...styles.pagesItemsMobile }
  if (menuOpen)
    Object.assign(finalSideButtonsStyle, styles.pagesItemsMobileOpen)

  const onClickMenuButtonHandler = () => setMenuOpen(!menuOpen)

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

interface IHomeButton {
  text: string
  link: string
  onClick?: () => void
}

const HomeButton = ({
  text,
  link,
  onClick = () => null,
}: IHomeButton) => {
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

interface ISideButtons {
  sideButtons: IButtonData[]
  style?: CSSProperties | null
  menuButtonStyle?: CSSProperties | null
  externalStyleHover?: CSSProperties | null
  onClick?: () => void
}

const SideButtons = ({
  sideButtons,
  style: externalStyle = null,
  menuButtonStyle = null,
  externalStyleHover = null,
  onClick = () => null,
}: ISideButtons) => {
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

interface IMenuLinkButton {
  text: string
  link: string
  externalButtonStyle?: CSSProperties | null
  externalAnchorStyle?: CSSProperties | null
  externalStyleHover?: CSSProperties | null
  onClick?: () => void
}

const MenuLinkButton = ({
  text,
  link,
  externalButtonStyle = null,
  externalAnchorStyle = null,
  externalStyleHover = null,
  onClick = () => { },
}: IMenuLinkButton) => {
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