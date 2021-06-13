/**
 * Styles for Section.
 */

import colors, { getRgbaColor } from '../../../commons/colors'
import * as utils from '../../../commons/utils'

import BackgroundImage from '../../../resources/images/backgrounds/home-section-bg.jpg'

const blackOverlayColor = getRgbaColor(colors.black, 0.9)

const styles = {
  section: {
    backgroundColor: colors.lighterBlack,
    background: `linear-gradient(to bottom, ${blackOverlayColor}, ${blackOverlayColor}), url(${BackgroundImage}) no-repeat center`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',

    transition: 'background-image 1s',
  },

  header: {
    fontFamily: "'Cairo', Tahoma, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: colors.white,
    fontSize: utils.generateVwWithFloor(5.8, 1200),
    margin: `${utils.generateVwWithFloor(0.2, 1200)} 0`,

    fontFamily: "'Cairo', Tahoma, sans-serif",
    lineHeight: 1,
    fontWeight: 'bold',

    textAlign: 'center',
  },

  subtitleContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },

  subtitleLines: {
    flex: 1,
    height: utils.generateVwWithFloor(0.4, 1200),
    marginTop: utils.generateVwWithFloor(0.2, 1200),
    backgroundColor: colors.white,
  },

  subtitle: {
    textAlign: 'center',

    color: colors.white,
    fontSize: utils.generateVwWithFloor(1.8, 1200),
    margin: `0 ${utils.generateVwWithFloor(0.5, 1200)}`,

    fontFamily: "'Cairo', Tahoma, sans-serif",
    lineHeight: 1,
    fontWeight: 'bold',
  },

  sectionContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    maxWidth: '100%',
    maxHeight: '100%',
    minHeight: '100vh',
  },
}

console.log(styles.subtitle)

export default styles