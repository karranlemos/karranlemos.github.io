import { colors } from '../../../../commons/colors'
import { IStyle } from '../../../../commons/interfaces'

export const styles: IStyle = {
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.black,
    height: 140,
  },

  footerText: {
    textAlign: 'center',
  }
}