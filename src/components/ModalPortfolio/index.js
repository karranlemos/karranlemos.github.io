import React from 'react'
import { useSelector } from 'react-redux'

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
  alignImageModal = null,
  onClose = () => { },
}) {
  const mobileMode = useSelector(state => state.window.mobileMode)

  const finalContentStyle = { ...styles.modalContent }
  if (mobileMode)
    Object.assign(finalContentStyle, styles.modalContentMobile)

  return (
    <Modal
      open={open}
      onOverlayClick={onClose}
      style={finalContentStyle}
    >
      <ThumbnailImage
        image={image}
        show={!mobileMode}
        alignImageModal={alignImageModal}
      />
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
        {/* <ThumbnailImage
          image={image}
          show={mobileMode}
          style={styles.mobileThumbnailImage}
        /> */}
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

const ThumbnailImage = ({ image, show = true, style = null, alignImageModal = 'left' }) => {
  if (!show)
    return null

  const finalThumbnailStyle = {
    ...styles.getImageThumbnail(image, alignImageModal),
    ...style
  }

  return <div style={finalThumbnailStyle} />
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
      rel="noreferrer"
      target="_blank"
    >
      {icon}
      <div>{text}</div>
    </a>
  )
}