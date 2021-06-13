/**
 * Reducer responsible for storing window state and mode
 */

import types from './types'

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