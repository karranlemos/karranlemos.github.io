import colors from '../../commons/colors'

import closeButton from '../../resources/images/icons/Multiplication_Sign-white.svg'

const styles = {
  modalContent: {
    display: 'flex',
    alignItems: 'stretch',
  },

  getImageThumbnail: (backgroundImage) => ({
    position: 'relative',
    width: 300,
    background: `url(${backgroundImage}) no-repeat left / cover`,
  }),

  contentPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.lighterBlack,
    padding: 20,
  },

  headerTitle: {
    flex: 1,
    fontSize: 36,
    fontWeight: 'bold',
  },

  closeButton: {
    background: `url(${closeButton}) no-repeat center / 20px`,
    width: 40,
    height: 40,
    cursor: 'pointer',
  },

  content: {
    flex: 1,
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lighterBlack,
  },

  getRelatedIconButton: (privateLink) => ({
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
  }),
}

export default styles