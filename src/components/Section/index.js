import React from 'react'

import styles from './styles'
import SectionHeader from './SectionHeader'

export default function Section({
  children=null,
  style: externalStyle={},
  title=null,
}) {

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }
  
  return (
    <section style={finalStyle}>
      <div style={styles.container}>
        <SectionHeader
          title={title}
        />
        {children}
      </div>
    </section>
  )
}