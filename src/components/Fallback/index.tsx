import { styles } from './styles'

interface IOwnProps {
  showLoading ?: boolean
}

export const Fallback = ({
  showLoading = true,
}: IOwnProps) => {
  if (!showLoading)
    return <div style={styles.container} />

  return (
    <div style={styles.container}>
      <div style={styles.loading} />
    </div>
  )
}