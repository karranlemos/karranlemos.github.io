import colors from '../../commons/colors'
import { commonException } from '../../commons/exceptions'
import { forbidSelection } from '../../commons/reusableStyles'

const styles = {
  modalContent: {
    display: 'flex',
    alignItems: 'stretch',
  },

  modalContentMobile: {
    maxHeight: '100vh',
  },

  getImageThumbnail: (backgroundImage, alignImageModal = null) => {
    if (alignImageModal === null)
      alignImageModal = 'left'

    if (!utils.validateBackgroundPosition(alignImageModal))
      throw commonException(
        'invalid-align-image-modal',
        `'${alignImageModal}' is not a valid value.`
      )

    return {
      position: 'relative',
      width: 300,
      background: `url(${backgroundImage}) no-repeat ${alignImageModal} / cover`,
    }
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
    outline: `2px solid ${colors.white}`,
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

  getRelatedIconButton: (privateLink) => {
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
      Object.assign(finalRelatedIconButton, forbidSelection)

    return finalRelatedIconButton
  }
}

const utils = {
  validateBackgroundPosition(backgroundPosition) {
    const possibleValues = [
      'left',
      'right',
      'top',
      'bottom',
      'center',
      'left top',
      'left center',
      'left bottom',
      'right top',
      'right center',
      'right bottom',
      'center top',
      'center center',
      'center bottom',
    ]

    if (possibleValues.includes(backgroundPosition))
      return true
    else
      return false
  }
}

export default styles