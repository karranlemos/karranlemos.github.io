/**
 * Styles for Section.
 */

import colors, { getRgbaColor } from '../../../commons/colors'

import BackgroundImage from '../../../resources/images/backgrounds/home-section-bg.jpg'

const blackOverlayColor = getRgbaColor(colors.black, 0.9)

const styles = {
  section: {
    minHeight: '100vh',
    backgroundColor: colors.lighterBlack,
    background: `linear-gradient(to bottom, ${blackOverlayColor}, ${blackOverlayColor}), url(${BackgroundImage}) no-repeat center`,
    width: '100%',
  },
}

export default styles