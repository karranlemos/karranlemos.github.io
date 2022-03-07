import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Section from '../../../components/Section'
import { Anchor } from '../../../components/Tags/Anchor'
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
      <Trans
        i18nKey='pages.contact.content'
        t={t}
        components={{
          emailLink: <Anchor link='mailto:karranlemos@gmail.com' />,
          linkedinLink: <Anchor link='https://www.linkedin.com/in/karranlemos/' />
        }}
      />
    </Section>
  )
}