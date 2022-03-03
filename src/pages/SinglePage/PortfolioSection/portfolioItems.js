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
    t(translationKey)?.map((paragraph) => (
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
        {getTranslatedParagraphs('pages.portfolio.items.utrack')}
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
        <p>Manutenção e desenvolvimento de aplicativo web para criar trajetos e monitorar se veículos estão em suas rotas pré-definidas, perto de incidentes como desastres naturais, assaltos, etc, e permitir que o operador lide com esses alertas.</p>
        <p>Tecnologias utilizadas: React, Redux, Redux Saga, Node.js, Express.js, PostgreSQL e Flespi.</p>
        <p>*Imagem meramente ilustrativa.</p>
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
        <p>Manutenção de aplicativo de recebimento de alertas e mensagens para manter o usuário em segurança, informando-o se está em uma área perigosa, de desastres naturais. Também permite envio de mensagens diretas ou em massa.</p>
        <p>Tecnologias utilizadas: React Native, Redux, Node.js, Express.js e PostgreSQL.</p>
        <p>*Imagem meramente ilustrativa.</p>
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
        <p>Site criado para o Programa de Pós-Graduação em Engenharia Eletrônica (PEL) da Universidade do Estado do Rio de Janeiro (UERJ).</p>
        <p>Tecnologias utilizadas: HTML, CSS, JavaScript, WordPress, PHP e MySQL.</p>
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
        <p>Este mesmo site!</p>
        <p>Site criado para guardar meu portfólio e minhas informações de contato.</p>
        <p>Tecnologias utilizadas: React, Redux, HTML e CSS.</p>
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
        <p>Um website para o salão de beleza fictício Salão da Márcia.</p>
        <p>Tecnologias utilizadas: HTML, Sass, CSS, JavaScript, JQuery, Bootstrap, Node.js, Express.js, EJS, AJAX.</p>
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
        <p>Um aplicativo que lista os dados de um usuário do GitHub e de seus repositórios.</p>
        <p>Tecnologias utilizadas: CSS, JavaScript, Node.js, React, Express.js, AJAX.</p>
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
        <p>Um aplicativo para web que converte o texto fornecido como entrada para o formato escolhido, dentre eles: caixa alta, caixa baixa, capitalizado e espaçado. Ele está disponível tanto em português quanto em inglês.</p>
        <p>Tecnologias utilizadas: HTML, CSS, JavaScript, PHP e Apache.</p>
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
        <p>Um web app que substitui caracteres como letras, dígitos e pontuações em caracteres que se parecem com eles, mas têm códigos unicode diferentes.</p>
        <p>Neste projeto, foi usado o Webpack para converter os arquivos TypeScript em um único arquivo JavaScript.</p>
        <p>Tecnologias utilizadas: HTML, Sass, CSS, TypeScript, JavaScript, Webpack, Node.js, Express.js, EJS.</p>
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
        <p>Um protótipo de rede social.</p>
        <p>As postagens são carregadas em um "scroll infinito" e eles podem ser vistos em suas próprias páginas.</p>
        <p>Todos os formulários se comunicam de forma assíncrona com o servidor, que responde com um JSON contendo as informações relevantes. A senha do usuário é criptografada com o algoritmo BCrypt e ele pode se manter logado entre sessões por um hash salvo nos cookies do navegador.</p>
        <p>Tecnologias utilizadas: HTML, CSS, JavaScript, PHP, AJAX, Apache e MySQL.</p>
      </PortfolioItem>
      <PortfolioItem
        title='Message of the Day'
        image={messageOfTheDayImage}
        links={{
          code: {
            privateLink: false,
            link: 'https://github.com/karranlemos/message-of-the-day',
          },
          site: {
            privateLink: false,
            link: 'https://k-message-of-the-day.herokuapp.com/',
          },
        }}
      >
        <p>Um aplicativo que guarda uma mensagem personalizada do usuário. Perfeita para deixar na nova aba para se lembrar do objetivo do dia.</p>
        <p>Tecnologias utilizadas: HTML, CSS, JavaScript, MySQL, Node.js, Express.js, EJS, AJAX.</p>
      </PortfolioItem>
      <PortfolioItem
        title='Portfolio antigo'
        image={portfolioOldImage}
        links={{
          code: {
            privateLink: false,
            link: 'https://github.com/karranlemos/old-portfolio-basic-webstack',
          },
          site: {
            privateLink: true,
          },
        }}
        alignImageModal='center'
      >
        <p>Antigo portfólio pessoal, feito com tecnologias web padrão.</p>
        <p>Este site foi criado para guardar meu portfólio e minhas informações de contato. Ele foi criado para ser hospedado no Github, então o projeto não possui, no momento, um backend próprio.</p>
        <p>Tecnologias utilizadas: HTML, CSS, JavaScript e Sass.</p>
      </PortfolioItem>
    </>
  )
}