import { IStyle } from "../../commons/interfaces"

type TypeGetStyles = (options: {
  size: number
}) => IStyle

export const getStyles: TypeGetStyles = ({ size }) => ({
  menuButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },

  menuButtonImage: {
    maxWidth: size,
    height: 'auto',
    objectFit: 'cover',
  }
})