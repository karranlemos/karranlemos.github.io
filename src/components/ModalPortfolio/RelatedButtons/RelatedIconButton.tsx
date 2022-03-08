import { colors } from '../../../commons/colors'

import { EyeCrossedGray } from '../../../resources/images/icons/EyeCrossedGray'
import { EyeGray } from '../../../resources/images/icons/EyeGray'
import { stylesCallbacks } from './styles'

export const RelatedIconButton = ({
  link = null,
  text,
  privateLink
}: {
  link?: string | null
  text: string
  privateLink: boolean
}) => {
  const icon = privateLink
    ? <EyeCrossedGray fill={colors.darkGray} />
    : <EyeGray />

  return (
    <a
      href={link ?? undefined}
      style={stylesCallbacks.getRelatedIconButton(privateLink)}
      rel="noreferrer"
      target="_blank"
    >
      {icon}
      <div>{text}</div>
    </a>
  )
}