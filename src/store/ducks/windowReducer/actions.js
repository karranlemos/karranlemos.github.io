/**
 * Actions for the windowsActions reducer.
 */

export const windowSizeChangedAction = (width, height) => ({
  type: types.WINDOW_SIZE_CHANGED,
  payload: {
    width,
    height,
  }
})

export const mobileModeChangedAction = (mobileMode) => ({
  type: types.MOBILE_MODE_CHANGED,
  payload: mobileMode
})