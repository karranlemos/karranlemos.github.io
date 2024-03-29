import { IStyle } from '../../commons/interfaces'
import { colors } from '../../commons/colors'

export const styles: IStyle = {
  section: {
    minHeight: 400,
    backgroundColor: colors.lighterBlack,
    width: '100%',
  },

  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: 50,
    boxSizing: 'border-box',
  },

  hashAnchor: {
    display: 'hidden',
    position: 'relative',
    top: -80,
  }
}