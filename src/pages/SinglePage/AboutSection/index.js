import React from 'react';

import Section from '../../../components/Section'
import styles from './styles'

export default function AboutSection({
  style: externalStyle={}
}) {

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }
  
  return (
    <Section 
      style={finalStyle}
      title='Sobre'
    >
      
    </Section>
  )
}