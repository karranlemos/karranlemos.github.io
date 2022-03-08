import React, { useState } from 'react'

import { ModalPortfolio } from '../ModalPortfolio'
import styles from './styles'

export default function Portfolio({ children }) {
  return (
    <div style={styles.portfolio}>
      {children}
    </div>
  )
}

export function PortfolioItem({
  image,
  title,
  links,
  children,
  alignImageModal = null,
  alignImageModalMobile = null,
  onClick: externalOnClick=()=>{},
}) {
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const finalItemStyle = styles.getItem(image)
  
  const finalOverlayStyle = { ...styles.overlay }
  if (hover)
    Object.assign(finalOverlayStyle, styles.overlayHover)

  const onMouseEnterhandler = () => {
    setHover(true)
  }

  const onMouseLeavehandler = () => {
    setHover(false)
  }

  const onClick = () => {
    setOpen(true)

    externalOnClick()
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div
        style={finalItemStyle}
        onClick={onClick}
        title={title}
        onMouseEnter={onMouseEnterhandler}
        onMouseLeave={onMouseLeavehandler}
      >
        <div style={finalOverlayStyle} />
      </div>
      <ModalPortfolio
        open={open}
        title={title}
        image={image}
        links={links}
        onClose={onClose}
        alignImageModal={alignImageModal}
        alignImageModalMobile={alignImageModalMobile}
      >
        {children}
      </ModalPortfolio>
    </>
  )
}