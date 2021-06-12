import React from 'react';

import MainTemplate from './templates/MainTemplate'
import SinglePage from './SinglePage'

export default function Sections() {
  const homeItem = {
    text: 'Karran Lemos',
    link: 'top'
  }
  const pagesItems = [
    {
      text: 'Portfólio',
      link: '#portfolio'
    },
    {
      text: 'Sobre',
      link: '#about'
    },
    {
      text: 'Contato',
      link: '#contact'
    },
  ]

  return (
    <MainTemplate
      homeItem={homeItem}
      pagesItems={pagesItems}
    >
      <SinglePage />
    </MainTemplate>
  );
}