import { CSSProperties } from 'react'
import { colors } from '../../commons/colors'
import { IStyle } from '../../commons/interfaces'

export const styles: IStyle = {
  modalContent: {
    display: 'flex',
    alignItems: 'stretch',
  },

  modalContentMobile: {
    maxHeight: '100vh',
  },

  mobileThumbnailImage: {
    height: 160,
    width: '100%',
  },

  contentPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.lightBlack,
    padding: 20,
  },

  headerTitle: {
    flex: 1,
    fontSize: 36,
    fontWeight: 'bold',
  },

  closeButton: {
    width: 40,
    height: 40,
    
    borderRadius: '50%',
    cursor: 'pointer',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeButtonHover: {
    backgroundColor: colors.lightestBlack,
  },

  content: {
    flex: 1,
    boxSizing: 'border-box',
    padding: '0px 20px',
    overflowY: 'auto',
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lighterBlack,
  },
}

export const styleCallbacks = {
  getRelatedIconButton: (privateLink: boolean) => {
    const finalRelatedIconButton = {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
  
      textDecoration: 'none',
      color: privateLink
        ? colors.darkGray
        : colors.white,
  
      padding: '20px 15px',
  
      cursor: privateLink
        ? 'default'
        : 'pointer',
    }

    if (privateLink)
      Object.assign(finalRelatedIconButton, {
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      })

    return finalRelatedIconButton
  },

  getImageThumbnail: (
    backgroundImage: string,
    alignImageModal: BackgroundPositionType = null
  ): CSSProperties => {
    if (alignImageModal === null)
      alignImageModal = 'left'

    return {
      position: 'relative',
      width: 300,
      background: `url(${backgroundImage}) no-repeat ${alignImageModal} / cover`,
    }
  },
}

export type BackgroundPositionType = 
  null
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'center'
  | 'left top'
  | 'left center'
  | 'left bottom'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'center top'
  | 'center center'
  | 'center bottom'