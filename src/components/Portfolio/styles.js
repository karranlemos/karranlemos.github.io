import { colors, getRgbaColor, } from '../../commons/colors'

import eyeYellow from '../../resources/images/icons/eye-yellow.svg'

const blackOverlayColor = getRgbaColor(colors.black, 0.8)

const styles = {
  portfolio: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gap: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },

  getItem: (backgroundImage) => ({
    position: 'relative',
        
    flex: '0 0 250px',
    height: 300,

    overflow: 'hidden',
    cursor: 'pointer',
    
    backgroundColor: colors.gray,
    color: 'transparent',

    background: `url(${backgroundImage}) no-repeat left / cover`,
  }),

  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    background: `url(${eyeYellow}) no-repeat center / 72px, linear-gradient(${blackOverlayColor}, ${blackOverlayColor})`,
    opacity: 0,
    transition: 'opacity 0.4s',
  },

  overlayHover: {
    opacity: 1,
  },
}

export default styles