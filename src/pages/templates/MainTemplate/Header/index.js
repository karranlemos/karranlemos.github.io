import React, { useState, useEffect } from 'react'

import styles from './styles'

export default function Header({
  homeItem=null,
  pagesItems=[],
}) {
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

const SideButtons = ({ sideButtons }) => {
  return (
    <div style={styles.pagesItems}>
      {
        sideButtons.map(({ text, link }, index) => (
          <MenuLinkButton
            key={index}
            text={text}
            link={link}
          />
        ))
      }
    </div>
  )
}

const MenuLinkButton = ({
  text,
  link,
  externalButtonStyle=null,
  externalAnchorStyle=null,
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
    <div style={finalButtonStyle}>
      <a
        href={link}
        style={finalAnchorStyle}
      >{text}</a>
    </div>
  )
}