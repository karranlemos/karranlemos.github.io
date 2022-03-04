import React from 'react'
import { styles } from './styles'

export const Fallback = () => {
  return (
    <div style={styles.container}>
      <div style={styles.loading} />
    </div>
  )
}