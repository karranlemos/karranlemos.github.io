import colors from '../../../../commons/colors'

const NAVBAR_HEIGHT_TOP = 100
const NAVBAR_HEIGHT_PINNED = 80
const PAGES_WIDTH = 1200

const styles = {
  mainMenu: {
    position: 'fixed',
    zIndex: '1000',

    display: 'flex',
    justifyContent: 'center',
    
    height: NAVBAR_HEIGHT_TOP,
    width: '100%',
    
    backgroundColor: 'transparent',
    fontFamily: `'Cairo', Tahoma, sans-serif`,
    fontSize: '18px',

    transition: 'background-color 1s, height 0.5s',
  },

  mainMenuPinned: {
    backgroundColor: colors.black,
    height: NAVBAR_HEIGHT_PINNED,
  },

  innerMenu: {
    display: 'flex',
    justifyContent: 'space-between',

    maxWidth: PAGES_WIDTH,
    width: '100%',
  },

  homeButton: {

  },

  pagesItems: {
    margin: 0,
    padding: 0,
    
    listStyleType: 'none',
    color: colors.fullWhite,

    display: 'flex',
    justifyContent: 'center',
  },

  menuButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: colors.fullWhite,

    /* padding: 0px 20px, */
    boxSizing: 'border-box',
    cursor: 'pointer',

    transition: 'padding 1s',

    boxSizing: 'border-box',
    minWidth: '75px',
  },

  menuButtonAnchor: {
    textDecoration: 'none',
    color: 'inherit',

    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0px 20px',

    outlineWidth: 0,
  }
}

export default styles