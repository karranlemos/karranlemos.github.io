import { types } from './types'

export const windowSizeChangedAction = (width: number, height: number) => ({
  type: types.WINDOW_SIZE_CHANGED,
  payload: {
    width,
    height,
  }
})

export const mobileModeChangedAction = (mobileMode: boolean) => ({
  type: types.MOBILE_MODE_CHANGED,
  payload: mobileMode
})

export const scrollBehaviorAction = (scrollBehavior: 'auto' | 'smooth') => ({
  type: types.SCROLL_BEHAVIOR_CHANGED,
  payload: scrollBehavior
})