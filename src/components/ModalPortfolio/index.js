import React from 'react'

import Modal from '../Modal'
import styles from './styles'

import EyeCrossedGray from '../../resources/images/icons/EyeCrossedGray'
import EyeGray from '../../resources/images/icons/EyeGray'

export default function ModalPortfolio({
  open,
  title,
  image,
  children,
  onClose=()=>{}
}) {
  const finalThumbnailStyle = styles.getImageThumbnail(image)

  return (
    <Modal
      open={open}
      onOverlayClick={onClose}
      style={styles.modalContent}
    >
      <div style={finalThumbnailStyle} />
      <div style={styles.contentPanel}>
        <header
          style={styles.header}
        >
          <div style={styles.headerTitle}>{title}</div>
          <div style={styles.closeButton} />
        </header>
        <div style={styles.content}>

        </div>
        <footer
          style={styles.footer}
        >
          <RelatedIconButton
            link=''
            text='Hey'
            privateLink
          />
          <RelatedIconButton
            link=''
            text='Hey'
            privateLink={false}
          />
        </footer>
      </div>
    </Modal>
  )
}

const RelatedIconButton = ({ link, text, privateLink }) => {
  const finalIconStyle = {
    ...styles.relatedIconButtonIcon,
  }

  const icon = privateLink
    ? <EyeCrossedGray />
    : <EyeGray />

  return (
    <a
      href={link}
      style={styles.relatedIconButton}
    >
      {icon}
      <div>{text}</div>
    </a>
  )
}