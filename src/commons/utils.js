/**
 * Common utils for the application.
 */

/**
 * Generates a string with the form: `max('vwValue'vw, vwValue*minWidth/100)`
 * @param {number} vwValue Multiplier to the VW value.
 * @param {number} minWidth Minimum width value.
 * @returns {string} String with the CSS max function.
 */
export const generateVwWithFloor = (vwValue, minWidth) => {
  return `max(${vwValue}vw, ${vwValue * minWidth / 100}px)`
}