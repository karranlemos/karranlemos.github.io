import store from '../store'
import {
  windowSizeChangedAction,
  mobileModeChangedAction,
} from '../store/ducks/windowReducer/actions'

const MAX_MOBILE_WIDTH = 700

const windowWatcherConfig = () => {
  const resizeCallback = () => {
    const currentState = store.getState()

    if (currentState.window.width === window.innerWidth && currentState.window.height === window.innerHeight)
      return  

    store.dispatch(windowSizeChangedAction(window.innerWidth, window.innerHeight))

    const newMobileMode = (window.innerWidth <= MAX_MOBILE_WIDTH)

    if (currentState.window.mobileMode === newMobileMode)
      return
    
    store.dispatch(mobileModeChangedAction(newMobileMode))
  }

  window.addEventListener('resize', resizeCallback)
  resizeCallback()
}

export default windowWatcherConfig