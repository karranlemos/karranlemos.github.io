import { styles } from './styles'

interface IOwnProps {
  title: string
}

export const SectionHeader = ({
  title
}: IOwnProps) => {
  if (!title)
    return null
  
  return (
    <header style={styles.header}>
      <h1 style={styles.text}>{title}</h1>
    </header>
  )
}