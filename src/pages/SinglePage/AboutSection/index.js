import React from 'react';

import Section from '../../../components/Section'
import Anchor from '../../../components/Tags/Anchor'
import MultipleColumnsList from '../../../components/MultipleColumnsList'
import styles from './styles'

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
    </Section>
  )
}

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