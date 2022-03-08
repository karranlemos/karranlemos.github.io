import { useState } from 'react'

const MAX_MOBILE_WIDTH = 700

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const isMobileMode = window.innerWidth <= MAX_MOBILE_WIDTH

  const resizeCallback = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  window.addEventListener('resize', resizeCallback)

  return {
    width,
    height,
    isMobileMode,
  }
}