import React from 'react';

import Section from '../../../components/Section'
import styles from './styles'

export default function TopSection({
  style: externalStyle={}
}) {

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }
  
  return (
    <Section style={finalStyle}>
      
    </Section>
  )
}