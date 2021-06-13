import React from 'react';

import Section from '../../../components/Section'
import styles from './styles'
import Portfolio, { PortfolioItem, } from '../../../components/Portfolio'
import portfolioItems from './portfolioItems'

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
        {
          portfolioItems.map(({ title, image }) => (
            <PortfolioItem
              title={title}
              image={image}
            />
          ))
        }
      </Portfolio>
    </Section>
  )
}