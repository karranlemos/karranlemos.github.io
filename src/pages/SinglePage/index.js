/**
 * SinglePage component for a single page site, with multiple sections.
 */

import React from 'react'

import TopSection from './TopSection'
import PortfolioSection from './PortfolioSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import styles from './styles'

export default function SinglePage() {
  return (
    <div style={styles.sections}>
      <TopSection />
      <PortfolioSection style={styles.sectionOdd} />        
      <AboutSection style={styles.sectionEven} />
      <ContactSection style={styles.sectionOdd} />
    </div>
  )
}