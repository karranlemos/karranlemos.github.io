import React, { useState, useLayoutEffect } from 'react';

import Section from '../../../components/Section'
import getStyles from './styles'

export default function TopSection({
  style: externalStyle={}
}) {
  const [windowSize, setWindowSize] = useState([])

  useLayoutEffect(() => {
    const resizeCallback = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', resizeCallback)
    resizeCallback()

    return () => window.removeEventListener('resize', resizeCallback)
  }, [])

  const styles = getStyles(...windowSize)

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