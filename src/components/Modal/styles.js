import colors, { getRgbaColor } from '../../commons/colors'

import closeIcon from '../../resources/images/icons/Multiplication_Sign-white.svg'

const blackOverlay = getRgbaColor(colors.black, 0.9)

const styles = {
  modal: {
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'fixed',

    backgroundColor: blackOverlay,

    zIndex: 100000,
    top: '0',
    left: '0',
    right: '0',
    height: '100vh',
  },

  modalShow: {
    display: 'flex',
  },

  modalWindow: {
    position: 'relative',

    maxWidth: 800,
    maxHeight: 400,
    width: '100%',
    height: '100%',
    backgroundColor: colors.lighterBlack,
  },

  modalCloseButton: {
    position: 'absolute',
    right: 0,
    zIndex: 1,

    backgroundImage: `url(${closeIcon}`,
    backgroundSize: 20,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    width: 75,
    height: 75,

    cursor: 'pointer',
  },
}

export default styles