import { CSSProperties } from "react"
import { BackgroundPositionType } from "../../commons/interfaces/portfolio"
import { styleCallbacks } from "./styles"

export const ThumbnailImage = ({
  image,
  show = true,
  style = null,
  alignImageModal = 'left',
}: {
  image: string
  show?: boolean
  style?: CSSProperties | null
  alignImageModal?: BackgroundPositionType
}) => {
  if (!show)
    return null

  const finalThumbnailStyle = {
    ...styleCallbacks.getImageThumbnail(image, alignImageModal),
    ...style
  }

  return <div style={finalThumbnailStyle} />
}