export const colors = {
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

export const getRgbaColor = (color: string, percentage: number = 1) => {
  if (getTypeRGB(color) === 'none')
    throw new Error('invalid-rgb-color')
  if (percentage < 0 || percentage > 1)
    throw new Error('percentage-not-within-range')

  const fullHexColor = convertToFullRGB(color)
  const hexBytePercentage = toHexNumber(255*percentage).padStart(2, '0')

  return `${fullHexColor}${hexBytePercentage}`
}

const convertToFullRGB = (rgb: string) => {
  switch (getTypeRGB(rgb)) {
    case 'full':
      return rgb
    case 'none':
      throw new Error('invalid-rgb-color')
    default:
      break
  }

  return '#' + rgb.split('').map(hex => hex+hex).join('')
}

const getTypeRGB = (color: string) => {
  if (/^#[0-9a-fA-F]{6}$/.test(color))
    return 'full'
  if (/^#[0-9a-fA-F]{3}$/.test(color))
    return 'half'
  
  return 'none'
}

const toHexNumber = (n: number) => {
  const HEX_CHARACTERS = '0123456789abcdef'
  
  if (n < 0)
    throw new Error('number-lesser-than-zero')

  if (n === 0)
    return '0'

  let hexNumber = ''
  while (n > 0) {
    hexNumber = HEX_CHARACTERS.charAt(n % 16) + hexNumber
    n = Math.floor(n / 16)
  }

  return hexNumber
}