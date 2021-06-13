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
  scrollBehavior: 'smooth',
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
    case types.SCROLL_BEHAVIOR_CHANGED:
      return {
        ...state,
        scrollBehavior: action.payload,
      }
    default:
      return state
  }
}