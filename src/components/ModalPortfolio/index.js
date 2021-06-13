import React from 'react'

import Modal from '../Modal'
import styles from './styles'
import colors from '../../commons/colors'

import EyeCrossedGray from '../../resources/images/icons/EyeCrossedGray'
import EyeGray from '../../resources/images/icons/EyeGray'

export default function ModalPortfolio({
  open,
  title,
  image,
  children,
  links = null,
  onClose = () => { },
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
          <div
            style={styles.closeButton}
            onClick={onClose}
          />
        </header>
        <div style={styles.content}>
          {children}
        </div>
        <footer
          style={styles.footer}
        >
          <RelatedCodeButton codeData={links?.code} />
          <RelatedSiteButton siteData={links?.site} />
        </footer>
      </div>
    </Modal>
  )
}

const RelatedCodeButton = ({ codeData }) => {
  if (!codeData)
    return null

  return (
    <RelatedIconButton
      link={codeData?.link}
      text='Código'
      privateLink={codeData.privateLink}
    />
  )
}

const RelatedSiteButton = ({ siteData }) => {
  if (!siteData)
    return null

  return (
    <RelatedIconButton
      link={siteData?.link}
      text='Site'
      privateLink={siteData.privateLink}
    />
  )
}

const RelatedIconButton = ({ link, text, privateLink }) => {
  const icon = privateLink
    ? <EyeCrossedGray fill={colors.darkGray} />
    : <EyeGray />

  return (
    <a
      href={link}
      style={styles.getRelatedIconButton(privateLink)}
    >
      {icon}
      <div>{text}</div>
    </a>
  )
}