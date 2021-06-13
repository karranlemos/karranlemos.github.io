import React from 'react'
import { useSelector } from 'react-redux'

import Section from '../../../components/Section'
import getStyles from './styles'

export default function TopSection({
  style: externalStyle={}
}) {
  const windowSize = useSelector(state => state.window.windowSize)

  const styles = getStyles({
    windowHeight: windowSize.height,
    windowWidth: windowSize.width,
  })

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }
  
  return (
    <Section style={finalStyle} containerStyle={styles.sectionContainerStyle}>
      <header style={styles.header}>
        <h1 style={styles.title}>Karran Lemos</h1>
        <div style={styles.subtitleContainer}>
          <span style={styles.subtitleLines} />
          <span style={styles.subtitle}>desenvolvedor fullstack</span>
          <span style={styles.subtitleLines} />
        </div>
      </header>
    </Section>
  )
}