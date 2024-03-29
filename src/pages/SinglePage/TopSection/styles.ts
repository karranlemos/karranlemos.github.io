import { colors, getRgbaColor } from '../../../commons/colors'
import { IStyle } from '../../../commons/interfaces'

import BackgroundImage from '../../../resources/images/backgrounds/home-section-bg.jpg'

type TypeGetStyles = (options?: {
  windowWidth?: number
  windowHeight?: number
}) => IStyle

const blackOverlayColor = getRgbaColor(colors.black, 0.9)

const getStyles: TypeGetStyles = ({windowWidth = 0, windowHeight = 0} = {}) => {
  const maxVwWindowWidth = (vwValue: number, floorFontSize: number) => {
    const vwFontSize = vwValue * windowWidth / 100
    return Math.max(vwFontSize, floorFontSize)
  }

  return {
    section: {
      position: 'relative',
      backgroundColor: colors.lighterBlack,
      background: `linear-gradient(
        to bottom,
        ${blackOverlayColor},
        ${blackOverlayColor}),
        url(${BackgroundImage})
        no-repeat center`,
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
      fontSize: `${maxVwWindowWidth(5.8, 40)}px`,
      margin: `${maxVwWindowWidth(0.2, 2.4)}px 0`,
  
      fontFamily: "'Cairo', Tahoma, sans-serif",
      lineHeight: 1,
      fontWeight: 'bold',
  
      textAlign: 'center',
    },
  
    subtitleContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  
    subtitleLines: {
      flex: 1,
      height: `${maxVwWindowWidth(0.4, 4.8)}px`,
      marginTop: `${maxVwWindowWidth(0.2, 2.4)}px`,
      backgroundColor: colors.white,
      display: windowWidth >= 1000
        ? 'block'
        : 'none'
    },
  
    subtitle: {
      textAlign: 'center',
  
      color: colors.white,
      fontSize: `${maxVwWindowWidth(1.8, 21.6)}px`,
      margin: `0 ${maxVwWindowWidth(0.5, 6)}px`,
  
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
      minHeight: `${windowHeight}px`,
    },

    relatedIcons: {
      position: 'absolute',
      margin: 0,
      bottom: 30,
    },
  }
}

export default getStyles