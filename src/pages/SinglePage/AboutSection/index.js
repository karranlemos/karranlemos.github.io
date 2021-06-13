import React from 'react';

import Section from '../../../components/Section'
import Anchor from '../../../components/Tags/Anchor'
import MultipleColumnsList from '../../../components/MultipleColumnsList'
import RelatedLinkIcons from '../../../components/RelatedLinkIcons'
import styles from './styles'

import GithubLogo from '../../../resources/images/general/GithubLogo.png'
import LinkedinLogo from '../../../resources/images/general/LinkedinLogo.png'

export default function AboutSection({
  style: externalStyle={}
}) {

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }
  
  return (
    <Section 
      style={finalStyle}
      title='Sobre'
      sectionAnchorId='about'
    >
      <p>Meu nome é Karran Lemos. Eu sou um desenvolvedor fullstack e estudante de ciência da computação.</p>
      <p>As tecnologias e metodologias que conheço incluem:</p>

      <MultipleColumnsList columnsInfo={columnsInfo} />

      <p><Anchor link="/resources/files/pdfs/Currículo - Karran Lemos.pdf">Veja meu currículo</Anchor> para mais informações.</p>

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

const columnsInfo = [
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
      'MySQL',
      'PHP',
      'Apache',
      'Laravel',
      'WordPress',
      'Python',
    ],
  },
  {
    title: 'Outras',
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