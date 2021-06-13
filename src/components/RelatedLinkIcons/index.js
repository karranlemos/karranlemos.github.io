import React, { useState } from 'react'

import getStyles from './styles'

export default function RelatedLinkIcons({
  linkIconsInfo = [],
  size = 40,
  style: externalStyle = null
}) {
  const styles = getStyles({})

  const finalContainerStyle = {
    ...styles.relatedLinkIcons,
    ...externalStyle,
  }

  return (
    <div style={finalContainerStyle}>
      {
        linkIconsInfo.map((linkIconInfo, index) => (
          <RelatedLinkIcon
            key={index}
            image={linkIconInfo.image}
            link={linkIconInfo.link}
            title={linkIconInfo.link || ''}
            size={size}
          />
        ))
      }
    </div>
  )
}

function RelatedLinkIcon({ image, link, title = '', size = 40 }) {
  const styles = getStyles({ imageIconsWidth: size })

  const [imageHover, setImageHover] = useState(false)

  const onMouseEnterHandler = () => {
    setImageHover(true)
  }

  const onMouseLeaveHandler = () => {
    setImageHover(false)
  }

  const finalImageStyle = { ...styles.imageIcons }
  if (imageHover)
    Object.assign(finalImageStyle, styles.imageIconsHover)

  return (
    <a
      href={link}
      title={title}
      style={styles.imageIconsAnchor}

      rel='noreferrer'
      target='_blank'

      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <img
        src={image}
        alt={title}
        style={finalImageStyle}
      />
    </a>
  )
}