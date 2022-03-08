import { getStyles } from './styles'

import MenuButtonImage from '../../resources/images/icons/Hamburger-white.svg'
import { CSSProperties } from 'react'

interface IOwnProps {
  size: number
  style?: CSSProperties | null
  onClick?: () => void
}

export const MobileMenuButton = ({
  size=20,
  style: externalStyle = null,
  onClick = () => null,
}: IOwnProps) => {
  const styles = getStyles({ size })

  const finalContainerStyle = {
    ...styles.menuButton,
    ...externalStyle,
  }

  return (
    <div
      style={finalContainerStyle}
      onClick={onClick}
    >
      <img
        alt='Menu'
        src={MenuButtonImage}
        style={styles.menuButtonImage}
      />
    </div>
  )
}