import React from 'react';

import styles from './styles'
import SectionHeader from './SectionHeader'

export default function Section({
  style: externalStyle={},
  title,
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
      </div>
    </section>
  )
}