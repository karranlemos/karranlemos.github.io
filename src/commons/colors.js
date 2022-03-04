import { commonException } from './exceptions'

const colors = {
  black:  '#0d0d0d',
  lightBlack:  '#151515',
  lighterBlack:  '#1b1b1b',
  lightestBlack:  '#262626',
  fullBlack:  '#000',
  
  gray:  '#b6b6b6',
  darkGray: '#555',
  
  white:  '#dfdfdf',
  fullWhite:  '#fff',
  
  purple:  '#7272dd',
}

export default colors

export const getRgbaColor = (color, percentage=1) => {
  if (utils.getTypeRGB(color) === 'none')
    throw commonException('invalid-rgb-color')
  if (percentage < 0 || percentage > 1)
    throw commonException('percentage-not-within-range')

  const fullHexColor = utils.convertToFullRGB(color)
  const hexBytePercentage = utils.toHexNumber(255*percentage).padStart(2, '0')

  return `${fullHexColor}${hexBytePercentage}`
}


const utils = {
  convertToFullRGB(rgb) {
    switch (utils.getTypeRGB(rgb)) {
      case 'full':
        return rgb
      case 'none':
        throw commonException('invalid-rgb-color')
      default:
        break
    }

    return '#' + rgb.split('').map(hex => hex+hex).join('')
  },

  getTypeRGB(color) {
    if (/^#[0-9a-fA-F]{6}$/.test(color))
      return 'full'
    if (/^#[0-9a-fA-F]{3}$/.test(color))
      return 'half'
    
    return 'none'
  },

  toHexNumber(number) {
    const HEX_CHARACTERS = '0123456789abcdef'
    
    if (number < 0)
      throw commonException('number-lesser-than-zero')

    if (number === 0)
      return '0'

    let hexNumber = ''
    while (number > 0) {
      hexNumber = HEX_CHARACTERS.charAt(number % 16) + hexNumber
      number = Math.floor(number / 16)
    }

    return hexNumber
  },
}