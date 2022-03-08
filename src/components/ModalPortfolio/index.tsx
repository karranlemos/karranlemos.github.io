import { CSSProperties, ReactNode, useState } from 'react'

import { Modal } from '../Modal'
import { styles, styleCallbacks, BackgroundPositionType } from './styles'
import { colors } from '../../commons/colors'

import { EyeCrossedGray } from '../../resources/images/icons/EyeCrossedGray'
import { EyeGray } from '../../resources/images/icons/EyeGray'
import { MultiplicationSign } from '../../resources/images/icons/MultiplicationSign'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../store/hooks'

interface ILink {
  privateLink: boolean
  link?: string
}

interface IOwnProps {
  open: boolean
  title: string
  image: string
  children: ReactNode
  links?: null | {
    code: ILink
    site: ILink
  }
  alignImageModal?: BackgroundPositionType | null
  alignImageModalMobile?: BackgroundPositionType | null
  onClose?: () => void
}

export const ModalPortfolio = ({
  open,
  title,
  image,
  children,
  links = null,
  alignImageModal = null,
  alignImageModalMobile = null,
  onClose = () => null,
}: IOwnProps) => {
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

  const onMouseEnterHandler = () => setHover(true)
  const onMouseLeaveHandler = () => setHover(false)

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
}: {
  image: string
  show?: boolean
  style?: CSSProperties | null
  alignImageModal?: BackgroundPositionType
}) => {
  if (!show)
    return null

  const finalThumbnailStyle = {
    ...styleCallbacks.getImageThumbnail(image, alignImageModal),
    ...style
  }

  return <div style={finalThumbnailStyle} />
}

const RelatedCodeButton = ({
  codeData = null
}: {
  codeData?: ILink | null
}) => {
  const { t } = useTranslation()
  
  if (!codeData)
    return null

  return (
    <RelatedIconButton
      link={codeData.link}
      text={t('general.sourceCode')}
      privateLink={codeData.privateLink}
    />
  )
}

const RelatedSiteButton = ({
  siteData
}: {
  siteData?: ILink | null
}) => {
  const { t } = useTranslation()

  if (!siteData)
    return null

  return (
    <RelatedIconButton
      link={siteData.link}
      text={t('general.site')}
      privateLink={siteData.privateLink}
    />
  )
}

const RelatedIconButton = ({
  link = null,
  text,
  privateLink
}: {
  link?: string | null
  text: string
  privateLink: boolean
}) => {
  const icon = privateLink
    ? <EyeCrossedGray fill={colors.darkGray} />
    : <EyeGray />

  return (
    <a
      href={link ?? undefined}
      style={styleCallbacks.getRelatedIconButton(privateLink)}
      rel="noreferrer"
      target="_blank"
    >
      {icon}
      <div>{text}</div>
    </a>
  )
}