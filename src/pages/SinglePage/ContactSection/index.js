import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../../../components/Section'
import Anchor from '../../../components/Tags/Anchor'
import styles from './styles'

export default function ContactSection({
  style: externalStyle={}
}) {
  const { t } = useTranslation()

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }
  
  return (
    <Section 
      style={finalStyle}
      title={t('pages.contact.title')}
      sectionAnchorId='contact'
    >
      <p>Entre em contato comigo através do email <Anchor link='mailto:karranlemos@gmail.com'>karranlemos@gmail.com</Anchor> ou pelo meu <Anchor link='https://www.linkedin.com/in/karranlemos/'>Linkedin</Anchor>.</p>
    </Section>
  )
}