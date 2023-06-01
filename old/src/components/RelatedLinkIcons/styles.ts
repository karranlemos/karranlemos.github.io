import { IStyle } from "../../commons/interfaces"

type TypeGetStyles = (options?: {
  imageIconsWidth?: number
}) => IStyle

export const getStyles: TypeGetStyles = ({ imageIconsWidth = 64, } = {}) => ({
  relatedLinkIcons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',

    margin: 50,
  },

  imageIconsAnchor: {
    outline: 'none',
    border: 'none',
    margin: '0 10px',
  },

  imageIcons: {
    width: 'auto',
    height: imageIconsWidth,
  },

  imageIconsHover: {
    filter: 'brightness(0.8)',
  },
})