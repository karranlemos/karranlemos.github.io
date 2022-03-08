import { updateIsMobileMode, updateWindowSize } from "../store/slices/windowSlice"
import { store } from "../store"

export const setWindowResizeKeeper = () => {
  const MAX_MOBILE_WIDTH = 700
  
  const resizeCallback = () => {
    store.dispatch(updateWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    }))

    const isMobileMode = window.innerWidth <= MAX_MOBILE_WIDTH
    store.dispatch(updateIsMobileMode(isMobileMode))
  }

  window.addEventListener('resize', resizeCallback)
  resizeCallback()
}