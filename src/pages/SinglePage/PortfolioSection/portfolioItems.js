import React from 'react'

import { PortfolioItem } from '../../../components/Portfolio'

import confusablesImage from '../../../resources/images/portfolio/confusables.png'
import fakeSocialNetworkImage from '../../../resources/images/portfolio/fake-social-network.png'
import githubListerImage from '../../../resources/images/portfolio/github-lister.png'
import messageOfTheDayImage from '../../../resources/images/portfolio/message-of-the-day.png'
import pelImage from '../../../resources/images/portfolio/pel.png'
import portfolioImage from '../../../resources/images/portfolio/portfolio.png'
import portfolioOldImage from '../../../resources/images/portfolio/portfolio-old.png'
import salaoDaMarciaImage from '../../../resources/images/portfolio/salao-da-marcia.png'
import securityMassNotificationImage from '../../../resources/images/portfolio/security-mass-notification.png'
import textConverterImage from '../../../resources/images/portfolio/text-converter.png'
import utrackImage from '../../../resources/images/portfolio/utrack.png'
import utransferImage from '../../../resources/images/portfolio/utransfer.png'
import { useTranslation } from 'react-i18next'

export const PortfolioItems = () => {
  const { t } = useTranslation()

  const getTranslatedParagraphs = (translationKey) => (
    t(translationKey)?.map?.((paragraph) => (
      <p>{paragraph}</p>
    )) ?? null
  )

  return (
    <>
      <PortfolioItem
        title='Utrack'
        image={utrackImage}
        links={{
          code: {
            privateLink: true,
          },
          site: {
            privateLink: false,
            link: 'https://play.google.com/store/apps/details?id=br.com.grupounicad.utrack',
          },
        }}
        alignImageModal='center'
      >
        {getTranslatedParagraphs('pages.portfolio.items.utrack.body')}
      </PortfolioItem>
      <PortfolioItem
        title='Utransfer'
        image={utransferImage}
        links={{
          code: {
            privateLink: true,
          },
          site: {
            privateLink: false,
            link: 'https://utransfer-v2.grupounicad.com.br/',
          },
        }}
        alignImageModal='center'
      >
        {getTranslatedParagraphs('pages.portfolio.items.utransfer.body')}
      </PortfolioItem>
      <PortfolioItem
        title='Security Mass Notification'
        image={securityMassNotificationImage}
        links={{
          code: {
            privateLink: true,
          },
          site: {
            privateLink: false,
            link: 'https://play.google.com/store/apps/details?id=br.com.grupounicad.umessenger',
          },
        }}
        alignImageModal='center'
      >
        {getTranslatedParagraphs('pages.portfolio.items.smn.body')}
      </PortfolioItem>
      <PortfolioItem
        title='PEL'
        image={pelImage}
        links={{
          code: {
            privateLink: true,
          },
          site: {
            privateLink: false,
            link: 'https://www.pel.uerj.br/',
          },
        }}
        alignImageModalMobile='left top'
      >
        {getTranslatedParagraphs('pages.portfolio.items.pel.body')}
      </PortfolioItem>
      <PortfolioItem
        title='Portfolio'
        image={portfolioImage}
        links={{
          code: {
            privateLink: false,
            link: 'https://github.com/karranlemos/karranlemos.github.io',
          },
          site: {
            privateLink: true,
          },
        }}
      >
        {getTranslatedParagraphs('pages.portfolio.items.portfolio.body')}
      </PortfolioItem>
      <PortfolioItem
        title='Salão da Márcia'
        image={salaoDaMarciaImage}
        links={{
          code: {
            privateLink: false,
            link: 'https://github.com/karranlemos/sal-o-m-rcia',
          },
          site: {
            privateLink: false,
            link: 'https://k-salao-da-marcia.herokuapp.com/',
          },
        }}
        alignImageModalMobile='left top'
      >
        {getTranslatedParagraphs('pages.portfolio.items.marciasSaloon.body')}
      </PortfolioItem>
      <PortfolioItem
        title='Github Lister'
        image={githubListerImage}
        links={{
          code: {
            privateLink: false,
            link: 'https://github.com/karranlemos/Github-Lister',
          },
          site: {
            privateLink: false,
            link: 'https://k-github-lister.herokuapp.com/',
          },
        }}
      >
        {getTranslatedParagraphs('pages.portfolio.items.githubLister.body')}
      </PortfolioItem>
      <PortfolioItem
        title='Text Converter'
        image={textConverterImage}
        links={{
          code: {
            privateLink: false,
            link: 'https://github.com/karranlemos/TextConverter/',
          },
          site: {
            privateLink: false,
            link: 'https://k-text-converter.herokuapp.com/',
          },
        }}
        alignImageModalMobile='left top'
      >
        {getTranslatedParagraphs('pages.portfolio.items.textConverter.body')}
      </PortfolioItem>
      <PortfolioItem
        title='Confusables'
        image={confusablesImage}
        links={{
          code: {
            privateLink: false,
            link: 'https://github.com/karranlemos/Confusables',
          },
          site: {
            privateLink: false,
            link: 'https://k-confusables.herokuapp.com/',
          },
        }}
        alignImageModalMobile='left top'
      >
        {getTranslatedParagraphs('pages.portfolio.items.confusables.body')}
      </PortfolioItem>
      <PortfolioItem
        title='Fake Social Network'
        image={fakeSocialNetworkImage}
        links={{
          code: {
            privateLink: false,
            link: 'https://github.com/karranlemos/fake-social-network',
          },
          site: {
            privateLink: false,
            link: 'https://k-fake-social-network.herokuapp.com/',
          },
        }}
      >
        {getTranslatedParagraphs('pages.portfolio.items.fakebook.body')}
      </PortfolioItem>
    </>
  )
}