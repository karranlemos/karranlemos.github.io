import React from 'react';

import Section from '../../../components/Section'
import styles from './styles'
import Portfolio from '../../../components/Portfolio'
import PortfolioItems from './portfolioItems'
import { useTranslation } from 'react-i18next';

export default function PortfolioSection({
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
      title={t('pages.portfolio')}
      sectionAnchorId='portfolio'
    >
      <Portfolio>
        <PortfolioItems />
      </Portfolio>
    </Section>
  )
}