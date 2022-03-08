import { FC, useState } from 'react'

import { ModalPortfolio } from '../ModalPortfolio'
import { styles, stylesCallbacks } from './styles'
import { BackgroundPositionType, ILinks } from '../../commons/interfaces/portfolio'

interface IPortfolioItem {
  image: string
  title: string
  links: ILinks
  alignImageModal?: BackgroundPositionType | null
  alignImageModalMobile?: BackgroundPositionType | null
  onClick?: () => void
}

export const Portfolio: FC = ({ children }) => (
  <div style={styles.portfolio}>
    {children}
  </div>
)

export const PortfolioItem: FC<IPortfolioItem> = ({
  image,
  title,
  links,
  children,
  alignImageModal = null,
  alignImageModalMobile = null,
  onClick: externalOnClick = () => null,
}) => {
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const finalItemStyle = stylesCallbacks.getItem(image)
  
  const finalOverlayStyle = { ...styles.overlay }
  if (hover)
    Object.assign(finalOverlayStyle, styles.overlayHover)

  const onMouseEnterhandler = () => setHover(true)

  const onMouseLeavehandler = () => setHover(false)

  const onClick = () => {
    setOpen(true)
    externalOnClick()
  }

  const onClose = () => setOpen(false)

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