import colors, { getRgbaColor, } from '../../commons/colors'

const blackOverlayColor = getRgbaColor(colors.black, 0)

const styles = {
  portfolio: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gap: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },

  getItem: (backgroundImage) => ({
    position: 'relative',
        
    flex: '0 0 250px',
    height: 300,

    overflow: 'hidden',
    cursor: 'pointer',
    
    backgroundColor: colors.gray,
    color: 'transparent',

    background: `linear-gradient(to bottom, ${blackOverlayColor}, ${blackOverlayColor}), url(${backgroundImage}) no-repeat left`,
    backgroundSize: 'cover',
  }),
}

export default styles