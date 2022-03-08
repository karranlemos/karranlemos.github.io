import { CSSProperties } from 'react'
import { RelatedLinkIcon } from './RelatedLinkIcon'

import { getStyles } from './styles'

interface IRelatedLinkIcons {
  linkIconsInfo: {
    title: string
    link: string
    image: string
  }[]
  size?: number
  style?: CSSProperties | null
}

export const RelatedLinkIcons = ({
  linkIconsInfo = [],
  size = 40,
  style: externalStyle = null
}: IRelatedLinkIcons) => {
  const styles = getStyles()

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
            title={linkIconInfo.link}
            size={size}
          />
        ))
      }
    </div>
  )
}