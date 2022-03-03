import React from 'react';

import MainTemplate from './templates/MainTemplate'
import SinglePage from './SinglePage'
import { useTranslation } from 'react-i18next';

export default function Sections() {
  const { t } = useTranslation()

  const homeItem = {
    text: 'Karran Lemos',
    link: '#top'
  }
  const pagesItems = [
    {
      text: t('pages.portfolio.title'),
      link: '#portfolio'
    },
    {
      text: t('pages.about.title'),
      link: '#about'
    },
    {
      text: t('pages.contact.title'),
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