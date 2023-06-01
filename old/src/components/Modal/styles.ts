import { colors, getRgbaColor } from '../../commons/colors'
import { IStyle } from '../../commons/interfaces'

const blackOverlay = getRgbaColor(colors.black, 0.9)

const styles: IStyle = {
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
    backgroundColor: colors.lightBlack,
  },
}

export default styles