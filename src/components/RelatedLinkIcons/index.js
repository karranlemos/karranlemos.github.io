import React, { useState } from 'react'

import styles from './styles'

export default function RelatedLinkIcons({ linkIconsInfo }) {
  return (
    <div style={styles.relatedLinkIcons}>
      {
        linkIconsInfo.map((linkIconInfo, index) => (
          <RelatedLinkIcon
            key={index}
            image={linkIconInfo.image}
            link={linkIconInfo.link}
            title={linkIconInfo.link || ''}
          />
        ))
      }
    </div>
  )
}

function RelatedLinkIcon({ image, link, title='' }) {
  const [imageHover, setImageHover] = useState(false)

  const onMouseEnterHandler = () => {
    setImageHover(true)
  }

  const onMouseLeaveHandler = () => {
    setImageHover(false)
  }

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
        style={imageHover
          ? styles.imageIconsHover
          : null
        }
      />
    </a>
  )
}