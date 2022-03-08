import { types } from './types'

interface IReducerState {
  scrollBehavior: 'auto' | 'smooth',
}

const initialState: IReducerState = {
  scrollBehavior: 'smooth',
}

export default function reducer(state = initialState, action: any): IReducerState {
  switch (action.type) {
    case types.SCROLL_BEHAVIOR_CHANGED:
      return {
        ...state,
        scrollBehavior: action.payload,
      }
    default:
      return state
  }
}