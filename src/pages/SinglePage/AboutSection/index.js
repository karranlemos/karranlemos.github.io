import React, { useMemo, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Section from '../../../components/Section'
import Anchor from '../../../components/Tags/Anchor'
import MultipleColumnsList from '../../../components/MultipleColumnsList'
import RelatedLinkIcons from '../../../components/RelatedLinkIcons'
import styles from './styles'

import GithubLogo from '../../../resources/images/general/GithubLogo.png'
import LinkedinLogo from '../../../resources/images/general/LinkedinLogo.png'
import { useEffect } from 'react';

export default function AboutSection({
  style: externalStyle={}
}) {
  const { t, i18n } = useTranslation()

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }

  const columnsInfo = useColumnsInfo()

  const paragraphsStart = useMemo(() => {
    const paragraphsArray = t('pages.about.contentStartArray', { returnObjects: true })
    const paragraphs = paragraphsArray?.map?.((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))

    return paragraphs ?? null
  }, [i18n.language])

  const paragraphsEnd = useMemo(() => {
    return (
      <Trans
        i18nKey='pages.about.contentEnd'
        t={t}
        components={[
          <Anchor link={t('files.curriculum')} />
        ]}
      />
    )
  }, [i18n.language])
  
  return (
    <Section 
      style={finalStyle}
      title={t('pages.about.title')}
      sectionAnchorId='about'
    >
      {paragraphsStart}

      <MultipleColumnsList columnsInfo={columnsInfo} />

      {paragraphsEnd}

      <RelatedLinkIcons
        linkIconsInfo={linkIconsInfo}
        size={64}
      />
    </Section>
  )
}

const linkIconsInfo = [
  {
    title: 'Github',
    link: 'https://github.com/karranlemos/',
    image: GithubLogo,
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/karranlemos/',
    image: LinkedinLogo,
  }
]

export const useColumnsInfo = () => {
  const { t, i18n } = useTranslation()

  const [othersTitle, setOthersTitle] = useState(() => t('pages.about.otherTechnologies'))

  useEffect(() => {
    setOthersTitle(() => t('pages.about.otherTechnologies'))
  }, [i18n.language, t])

  return [
    {
      title: 'Frontend',
      items: [
        'HTML',
        'CSS',
        'Sass',
        'JavaScript',
        'React',
        'React Native',
        'React Native Paper',
        'TypeScript',
        'Bootstrap',
        'JQuery',
        'AJAX',
      ],
    },
    {
      title:'Backend',
      items: [
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'TypeScript',
        'MySQL',
        'PHP',
        'Apache',
        'Laravel',
        'WordPress',
        'Python',
      ],
    },
    {
      title: othersTitle,
      items: [
        'Git / Git Flow',
        'Docker',
        'Swagger',
        'Linux',
        'MQTT',
        'PM2',
        'Flespi',
        'Google Maps',
        'NPM / Yarn',
        'WebSocket / Socket.io',
        'Redux / Redux Saga',
        'Scrum / Kanban',
        'SSH / SFTP',
      ],
    },
  ]
}