import React from 'react'
import { useSelector } from 'react-redux'

import Section from '../../../components/Section'
import getStyles from './styles'
import RelatedLinkIcons from '../../../components/RelatedLinkIcons'

import GithubLogo from '../../../resources/images/general/GithubLogo.png'
import LinkedinLogo from '../../../resources/images/general/LinkedinLogo.png'
import ResumeIcon from '../../../resources/images/general/resume.svg'
import { useTranslation } from 'react-i18next'

export default function TopSection({
  style: externalStyle={}
}) {
  const { t } = useTranslation()
  const windowSize = useSelector(state => state.window.windowSize)
  const linkIconsInfo = useLinkIconsInfo()

  const styles = getStyles({
    windowHeight: windowSize.height,
    windowWidth: windowSize.width,
  })

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }
  
  return (
    <Section style={finalStyle} containerStyle={styles.sectionContainerStyle}>
      <header style={styles.header}>
        <h1 style={styles.title}>Karran Lemos</h1>
        <div style={styles.subtitleContainer}>
          <span style={styles.subtitleLines} />
          <span style={styles.subtitle}>{t('pages.home.fullstackDeveloper')}</span>
          <span style={styles.subtitleLines} />
        </div>
      </header>
      <RelatedLinkIcons
        linkIconsInfo={linkIconsInfo}
        style={styles.relatedIcons}
        size={48}
      />
    </Section>
  )
}

const useLinkIconsInfo = () => {
  const { t, i18n } = useTranslation()

  return [
    {
      title: 'Github',
      link: 'https://github.com/karranlemos/',
      image: GithubLogo,
    },
    {
      title: 'Linkedin',
      link: 'https://www.linkedin.com/in/karranlemos/',
      image: LinkedinLogo,
    },
    {
      title: t('general.curriculum'),
      link: t('files.curriculum'),
      image: ResumeIcon,
    },
  ]
}