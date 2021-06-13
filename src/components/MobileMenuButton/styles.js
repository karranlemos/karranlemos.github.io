const getStyles = ({ size }) => ({
  menuButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },

  menuButtonImage: {
    maxWidth: size,
    height: 'auto',
    objectFit: 'cover',
  }
})

export default getStyles