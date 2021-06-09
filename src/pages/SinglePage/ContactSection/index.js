import React from 'react';

import Section from '../../../components/Section'
import styles from './styles'

export default function ContactSection({
  style: externalStyle={}
}) {

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }
  
  return (
    <Section 
      style={finalStyle}
      title='Contato'
    >
      
    </Section>
  )
}