/**
 * Reducer responsible for storing window state and mode
 */

export const types = {
  WINDOW_SIZE_CHANGED: 'WINDOW_SIZE_CHANGED',
  MOBILE_MODE_CHANGED: 'MOBILE_MODE_CHANGED',
}

const initialState = {
  windowSize: {
    width: null,
    height: null,
  },
  mobileMode: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.WINDOW_SIZE_CHANGED:
      return {
        ...state,
        windowSize: action.payload,
      }
    case types.MOBILE_MODE_CHANGED:
      return {
        ...state,
        mobileMode: action.payload,
      }
    default:
      return state
  }
}

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