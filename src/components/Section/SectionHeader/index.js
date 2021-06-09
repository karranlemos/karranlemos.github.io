import styles from './styles'

export default function SectionHeader({ title }) {
  if (!title)
    return null
  
  return (
    <header style={styles.header}>
      <h1 style={styles.text}>{title}</h1>
    </header>
  )
}