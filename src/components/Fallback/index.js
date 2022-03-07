import React from 'react'
import { styles } from './styles'

export const Fallback = ({
  showLoading = true,
}) => {
  if (!showLoading)
    return <div style={styles.container} />

  return (
    <div style={styles.container}>
      <div style={styles.loading} />
    </div>
  )
}