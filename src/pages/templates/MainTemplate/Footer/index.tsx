import { useTranslation } from 'react-i18next'

import { styles } from './styles'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer style={styles.footer}>
      <div
        style={styles.footerText}
      >
        ©2022 Karran Lemos. {t('general.allRightsReserved')}
      </div>
    </footer>
  )
}