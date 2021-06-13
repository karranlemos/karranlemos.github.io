import React from 'react'

import styles from './styles'

export default function Modal({
  open,
  children,
  style=null,
  onOverlayClick=()=>{}
}) {
  const finalModalStyle = { ...styles.modal }
  if (open)
    Object.assign(finalModalStyle, styles.modalShow)

  const finalContentStyle = {
    ...styles.modalWindow,
    ...style,
  }

  return (
    <div
      style={finalModalStyle}
      onClick={onOverlayClick}
    >
      <div style={finalContentStyle}>
        {children}
      </div>
    </div>
  )
}