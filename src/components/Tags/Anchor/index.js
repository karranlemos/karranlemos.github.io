import styles from './styles'

export default function Anchor({
  style: externalStyle,
  link,
  children,
}) {

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