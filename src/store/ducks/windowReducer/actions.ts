import { types } from './types'

export const scrollBehaviorAction = (scrollBehavior: 'auto' | 'smooth') => ({
  type: types.SCROLL_BEHAVIOR_CHANGED,
  payload: scrollBehavior
})