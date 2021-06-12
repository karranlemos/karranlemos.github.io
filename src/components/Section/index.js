import React from 'react'

import styles from './styles'
import SectionHeader from './SectionHeader'

export default function Section({
  children=null,
  style: externalStyle={},
  title=null,
  sectionAnchorId=null
}) {

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }
  
  return (
    <section style={finalStyle}>
      <SectionAnchor id={sectionAnchorId} />
      <div style={styles.container}>
        <SectionHeader
          title={title}
        />
        {children}
      </div>
    </section>
  )
}

function SectionAnchor({ id }) {
  
  if (!id)
    return null

  return (
    <div
      id={id}
      style={styles.hashAnchor}
    ></div>
  )
}