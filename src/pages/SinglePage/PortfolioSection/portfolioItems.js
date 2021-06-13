import confusablesImage from '../../../resources/images/portfolio/confusables.png'
import fakeSocialNetworkImage from '../../../resources/images/portfolio/fake-social-network.png'
import githubListerImage from '../../../resources/images/portfolio/github-lister.png'
import messageOfTheDayImage from '../../../resources/images/portfolio/message-of-the-day.png'
import pelImage from '../../../resources/images/portfolio/pel.png'
import portfolioImage from '../../../resources/images/portfolio/portfolio.png'
import salaoDaMarciaImage from '../../../resources/images/portfolio/salao-da-marcia.png'
import securityMassNotificationImage from '../../../resources/images/portfolio/security-mass-notification.png'
import textConverterImage from '../../../resources/images/portfolio/text-converter.png'
import utrackImage from '../../../resources/images/portfolio/utrack.png'
import utransferImage from '../../../resources/images/portfolio/utransfer.png'

const portfolioItems = [
  {
    title: 'Utrack',
    image: utrackImage,
    links: {
      code: {
        privateLink: true,
      },
      site: {
        privateLink: false,
        link: 'https://play.google.com/store/apps/details?id=br.com.grupounicad.utrack',
      },
    },
  },
  {
    title: 'Utransfer',
    image: utransferImage,
    links: {
      code: {
        privateLink: true,
      },
      site: {
        privateLink: false,
        link: 'https://utransfer-v2.grupounicad.com.br/',
      },
    },
  },
  {
    title: 'Security Mass Notification',
    image: securityMassNotificationImage,
    links: {
      code: {
        privateLink: true,
      },
      site: {
        privateLink: false,
        link: 'https://play.google.com/store/apps/details?id=br.com.grupounicad.umessenger',
      },
    },
  },
  {
    title: 'PEL - Programa de Pós-Graduação em Engenharia Eletrônica',
    image: pelImage,
    links: {
      code: {
        privateLink: true,
      },
      site: {
        privateLink: false,
        link: 'https://www.pel.uerj.br/',
      },
    },
  },
  {
    title: 'Salão da Márcia',
    image: salaoDaMarciaImage,
    links: {
      code: {
        privateLink: false,
        link: 'https://github.com/karranlemos/sal-o-m-rcia',
      },
      site: {
        privateLink: false,
        link: 'https://k-salao-da-marcia.herokuapp.com/',
      },
    },
  },
  {
    title: 'Github Lister',
    image: githubListerImage,
    links: {
      code: {
        privateLink: false,
        link: 'https://github.com/karranlemos/Github-Lister',
      },
      site: {
        privateLink: false,
        link: 'https://k-github-lister.herokuapp.com/',
      },
    },
  },
  {
    title: 'Text Converter',
    image: textConverterImage,
    links: {
      code: {
        privateLink: false,
        link: 'https://github.com/karranlemos/TextConverter/',
      },
      site: {
        privateLink: false,
        link: 'https://k-text-converter.herokuapp.com/',
      },
    },
  },
  {
    title: 'Confusables',
    image: confusablesImage,
    links: {
      code: {
        privateLink: false,
        link: 'https://github.com/karranlemos/Confusables',
      },
      site: {
        privateLink: false,
        link: 'https://k-confusables.herokuapp.com/',
      },
    },
  },
  {
    title: 'Fake Social Network',
    image: fakeSocialNetworkImage,
    links: {
      code: {
        privateLink: false,
        link: 'https://github.com/karranlemos/fake-social-network',
      },
      site: {
        privateLink: false,
        link: 'https://k-fake-social-network.herokuapp.com/',
      },
    },
  },
  {
    title: 'Message of the Day',
    image: messageOfTheDayImage,
    links: {
      code: {
        privateLink: false,
        link: 'https://github.com/karranlemos/message-of-the-day',
      },
      site: {
        privateLink: false,
        link: 'https://k-message-of-the-day.herokuapp.com/',
      },
    },
  },
  {
    title: 'Portfolio',
    image: portfolioImage,
    links: {
      code: {
        privateLink: false,
        link: 'https://github.com/karranlemos/karranlemos.github.io',
      },
      site: {
        privateLink: false,
        link: 'https://karranlemos.github.io/',
      },
    },
  },
]

export default portfolioItems