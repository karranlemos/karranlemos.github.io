import { useState } from "react"
import { getStyles } from "./styles"

interface IOwnProps {
  link: string
  image: string
  title: string
  size?: number
}

export const RelatedLinkIcon = ({
  image,
  link,
  title,
  size = 40
}: IOwnProps) => {
  const styles = getStyles({ imageIconsWidth: size })

  const [imageHover, setImageHover] = useState(false)

  const onMouseEnterHandler = () => setImageHover(true)
  const onMouseLeaveHandler = () => setImageHover(false)

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