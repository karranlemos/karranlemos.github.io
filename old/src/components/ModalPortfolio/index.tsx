import { ReactNode } from 'react'

import { Modal } from '../Modal'
import { styles } from './styles'
import { BackgroundPositionType, ILinks } from '../../commons/interfaces/portfolio'
import { CloseButton } from './CloseButton'
import { RelatedSiteButton } from './RelatedButtons/RelatedSiteButton'
import { RelatedCodeButton } from './RelatedButtons/RelatedCodeButton'
import { ThumbnailImage } from './ThumbnailImage'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

interface IOwnProps {
  open: boolean
  title: string
  image: string
  children: ReactNode
  links?: ILinks | null
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
  const isMobileMode = useSelector((state: RootState) => state.window.isMobileMode)

  const finalContentStyle = { ...styles.modalContent }
  if (isMobileMode)
    Object.assign(finalContentStyle, styles.modalContentMobile)

  return (
    <Modal
      open={open}
      onOverlayClick={onClose}
      style={finalContentStyle}
    >
      <ThumbnailImage
        image={image}
        show={!isMobileMode}
        alignImageModal={alignImageModal}
      />
      <div style={styles.contentPanel}>
        <header style={styles.header}>
          <div style={styles.headerTitle}>{title}</div>
          <CloseButton onClick={onClose} />
        </header>
        <ThumbnailImage
          image={image}
          show={isMobileMode}
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