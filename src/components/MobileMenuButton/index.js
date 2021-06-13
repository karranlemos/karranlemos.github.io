import getStyles from './styles'

import MenuButtonImage from '../../resources/images/icons/Hamburger-white.svg'

export default function MobileMenuButton({
  size=20,
  style: externalStyle=null,
  onClick=()=>{},
}) {
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
        src={MenuButtonImage}
        alt="Menu"
        style={styles.menuButtonImage}
      />
    </div>
  )
}