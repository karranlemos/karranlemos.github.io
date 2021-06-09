import React from 'react';

import styles from './styles'

export default function Section({
  style: externalStyle={}
}) {

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }
  
  return (
    <section style={finalStyle}>
      
    </section>
  )
}