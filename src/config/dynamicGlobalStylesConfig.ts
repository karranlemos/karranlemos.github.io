import { store } from '../store'

export const dynamicGlobalStylesConfig = () => {
  const callback = () => {
    const currentState = store.getState()
    const scrollBehavior = currentState.window.scrollBehavior

    const htmlTag = document.getElementsByTagName('html')[0]
    htmlTag.style.scrollBehavior = scrollBehavior
  }

  store.subscribe(callback)
  callback()
}