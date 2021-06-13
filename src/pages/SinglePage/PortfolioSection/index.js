import React from 'react';

import Section from '../../../components/Section'
import styles from './styles'
import Portfolio from '../../../components/Portfolio'
import PortfolioItems from './portfolioItems'

export default function PortfolioSection({
  style: externalStyle={}
}) {

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }
  
  return (
    <Section 
      style={finalStyle}
      title='Portfólio'
      sectionAnchorId='portfolio'
    >
      <Portfolio>
        <PortfolioItems />
      </Portfolio>
    </Section>
  )
}