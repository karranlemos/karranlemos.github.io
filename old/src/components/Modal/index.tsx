import React, { CSSProperties, ReactNode, useRef } from 'react'

import styles from './styles'

interface IOwnProps {
  open: boolean
  children: ReactNode
  style?: CSSProperties | null
  onOverlayClick?: () => void
}

export const Modal = ({
  open,
  children,
  style = null,
  onOverlayClick: onExternalOverlayClick = () => null
}: IOwnProps) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  const finalModalStyle = { ...styles.modal }
  if (open)
    Object.assign(finalModalStyle, styles.modalShow)

  const finalContentStyle = {
    ...styles.modalWindow,
    ...style,
  }

  const onOverlayClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== overlayRef.current)
      return

    onExternalOverlayClick()
  }

  return (
    <div
      ref={overlayRef}
      style={finalModalStyle}
      onClick={onOverlayClick}
    >
      <div style={finalContentStyle}>
        {children}
      </div>
    </div>
  )
}