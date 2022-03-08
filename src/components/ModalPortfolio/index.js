import { useState } from 'react'

import Modal from '../Modal'
import styles from './styles'
import { colors } from '../../commons/colors'

import { EyeCrossedGray } from '../../resources/images/icons/EyeCrossedGray'
import { EyeGray } from '../../resources/images/icons/EyeGray'
import { MultiplicationSign } from '../../resources/images/icons/MultiplicationSign'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../store/hooks'

export default function ModalPortfolio({
  open,
  title,
  image,
  children,
  links = null,
  alignImageModal = null,
  alignImageModalMobile = null,
  onClose = () => { },
}) {
  const mobileMode = useAppSelector(state => state.window.mobileMode)

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
          <CloseButton
            onClick={onClose}
          />
        </header>
        <ThumbnailImage
          image={image}
          show={mobileMode}
          style={styles.mobileThumbnailImage}
          alignImageModal={alignImageModalMobile}
        />
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

const CloseButton = ({
  onClick=()=>{}
}) => {
  const [hover, setHover] = useState(false)

  const finalCloseButtonStyle = { ...styles.closeButton }
  if (hover)
    Object.assign(finalCloseButtonStyle, styles.closeButtonHover)

  const onMouseEnterHandler = () => {
    setHover(true)
  }

  const onMouseLeaveHandler = () => {
    setHover(false)
  }

  return (
    <div
      style={finalCloseButtonStyle}
      onClick={onClick}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <MultiplicationSign
        size={18}
      />
    </div>
  )
}

const ThumbnailImage = ({
  image,
  show = true,
  style = null,
  alignImageModal = 'left',
}) => {
  if (!show)
    return null

  const finalThumbnailStyle = {
    ...styles.getImageThumbnail(image, alignImageModal),
    ...style
  }

  return <div style={finalThumbnailStyle} />
}

const RelatedCodeButton = ({ codeData }) => {
  const { t } = useTranslation()
  
  if (!codeData)
    return null

  return (
    <RelatedIconButton
      link={codeData?.link}
      text={t('general.sourceCode')}
      privateLink={codeData.privateLink}
    />
  )
}

const RelatedSiteButton = ({ siteData }) => {
  const { t } = useTranslation()

  if (!siteData)
    return null

  return (
    <RelatedIconButton
      link={siteData?.link}
      text={t('general.site')}
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