import React, { useRef } from 'react'

import styles from './styles'

export default function Modal({
  open,
  children,
  style=null,
  onOverlayClick: onExternalOverlayClick=()=>{}
}) {
  const overlayRef = useRef(null)

  const finalModalStyle = { ...styles.modal }
  if (open)
    Object.assign(finalModalStyle, styles.modalShow)

  const finalContentStyle = {
    ...styles.modalWindow,
    ...style,
  }

  const setOverlayRef = (newOverlayRef) => {
    overlayRef.current = newOverlayRef
  }

  const onOverlayClick = (e) => {
    if (e.target !== overlayRef.current)
      return

    onExternalOverlayClick()
  }

  return (
    <div
      ref={setOverlayRef}
      style={finalModalStyle}
      onClick={onOverlayClick}
    >
      <div style={finalContentStyle}>
        {children}
      </div>
    </div>
  )
}