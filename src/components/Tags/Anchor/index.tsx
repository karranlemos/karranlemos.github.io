import { CSSProperties, ReactNode } from 'react'
import { styles } from './styles'

interface IOwnProps {
  link: string
  style?: CSSProperties | null
  children?: ReactNode | null
}

export const Anchor = ({
  link,
  style: externalStyle = null,
  children = null,
}: IOwnProps) => {

  const finalStyle = {
    ...styles.anchor,
    ...externalStyle,
  }

  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      style={finalStyle}
    >{children}</a>
  )
}