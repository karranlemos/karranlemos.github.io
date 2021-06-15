import React from 'react';

import Section from '../../../components/Section'
import Anchor from '../../../components/Tags/Anchor'
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
      sectionAnchorId='contact'
    >
      <p>Entre em contato comigo através do email: <Anchor link='mailto:karranlemos@gmail.com'>karranlemos@gmail.com</Anchor> ou pelo <Anchor link='https://www.linkedin.com/in/karranlemos/'>Linkedin</Anchor>.</p>
    </Section>
  )
}