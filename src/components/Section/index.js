import React from 'react'

import styles from './styles'
import SectionHeader from './SectionHeader'

export default function Section({
  children=null,
  style: externalStyle={},
  title=null,
  sectionAnchorId=null,
  containerStyle=true
}) {

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }

  const finalContainerStyle = {
    ...styles.container,
    ...containerStyle
  }
  
  return (
    <section style={finalStyle}>
      <SectionAnchor id={sectionAnchorId} />
      <div style={finalContainerStyle}>
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