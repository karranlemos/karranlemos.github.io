/**
 * Module responsible for providing the colors to be used in the app
 * and auxiliary functions.
 */

const colors = {
  black:  '#0d0d0d',
  lightBlack:  '#151515',
  lighterBlack:  '#1b1b1b',
  fullBlack:  '#000',
  
  gray:  '#b6b6b6',
  darkGray: '#555555',
  
  white:  '#dfdfdf',
  fullWhite:  '#fff',
  
  purple:  '#7272dd',
}

export default colors


/**
 * Generates an RGBA string out of an RGB string.
 * @param {string} color RGB string.
 * @param {number} percentage Percentage ranging from 0 to 1. Default=1
 * @returns {string} RGBA string value.
 * @throws {string}
 *   - 'invalid-rgb-color': When color is not a valid RGB color.
 *   - 'percentage-not-within-range': When percentage is not within 0 and 1.
 */
export const getRgbaColor = (color, percentage=1) => {
  if (utils.getTypeRGB(color) === 'none')
    throw 'invalid-rgb-color'
  if (percentage < 0 || percentage > 1)
    throw 'percentage-not-within-range'

  const fullHexColor = utils.convertToFullRGB(color)
  const hexBytePercentage = utils.toHexNumber(255*percentage).padStart(2, '0')

  return `${fullHexColor}${hexBytePercentage}`
}


const utils = {
  /**
   * Converts a half-sized hex string into a full-sized hex string.
   * @param {string} rgb RGB hex string.
   * @returns {string} Full RGB hex string.
   * @throws {string}
   *   - 'invalid-rgb-color': When color is not a valid RGB color.
   */
  convertToFullRGB(rgb) {
    switch (utils.getTypeRGB(rgb)) {
      case 'full':
        return rgb
      case 'none':
        throw 'invalid-rgb-color'
    }

    return `#${rgb.charAt(1)}${rgb.charAt(1)}${rgb.charAt(2)}${rgb.charAt(2)}${rgb.charAt(3)}${rgb.charAt(3)}`
  },

  /**
   * @param {string} color String to be tested.
   * @returns {'full'|'half'|'none'}
   *   - 'full' if color is a full RGB string (i.e. #123456).
   *   - 'half' if color is a half-sized RGB string (i.e. #123).
   *   - 'none' if color is not an RGB string.
   */
  getTypeRGB(color) {
    if (/^\#[0-9a-fA-F]{6}$/.test(color))
      return 'full'
    if (/^\#[0-9a-fA-F]{3}$/.test(color))
      return 'half'
    
    return 'none'
  },

  /**
   * Converts a number into an hex value.
   * @param {number} number Number to be converted. Must be non-negative.
   * @returns {string} Hex string.
   * @throws {string}
   *   - 'number-lesser-than-zero': When number is less than zero.
   */
  toHexNumber(number) {
    const HEX_CHARACTERS = '0123456789abcdef'
    
    if (number < 0)
      throw 'number-lesser-than-zero'

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