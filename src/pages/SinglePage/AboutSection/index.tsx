import { CSSProperties, useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Section } from '../../../components/Section'
import { Anchor } from '../../../components/Tags/Anchor'
import { MultipleColumnsList } from '../../../components/MultipleColumnsList'
import { RelatedLinkIcons } from '../../../components/RelatedLinkIcons'
import { styles } from './styles'

import GithubLogo from '../../../resources/images/general/GithubLogo.png'
import LinkedinLogo from '../../../resources/images/general/LinkedinLogo.png'

interface IOwnProps {
  style: CSSProperties
}

export const AboutSection = ({
  style: externalStyle={}
}: IOwnProps) => {
  const { t, i18n } = useTranslation()

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }

  const columnsInfo = useColumnsInfo()

  const paragraphsStart = useMemo(() => {
    const paragraphsArray =
      t('pages.about.contentStartArray', { returnObjects: true }) as string[]

    const paragraphs = paragraphsArray.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))

    return paragraphs
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

const useColumnsInfo = () => {
  const { t } = useTranslation()

  const misc = useMemo(() => {
    return t('pages.about.misc')
  }, [t])

  return [
    {
      title: 'Languages',
      items: [
        'TypeScript',
        'JavaScript',
        'C#',
        'SQL',
        'HTML',
        'CSS',
        'Sass',
        'Python',
      ],
    },
    {
      title:'Frameworks',
      items: [
        '.NET',
        'React',
        'Express.js',
        'React Native',
      ],
    },
    {
      title: misc,
      items: [
        'Git',
        'Docker',
        'Material UI',
        'Swagger',
        'Redux',
        'Linux',
        'Scrum',
        'Kanban',
      ],
    },
  ]
}