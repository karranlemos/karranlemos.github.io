import { useMemo } from "react";
import { useTranslation } from "react-i18next"
import {
  BR as IconBR,
  US as IconUS,
} from "country-flag-icons/react/1x1";

import { styles } from "./styles";
import parentStyles from '../styles'

export const LanguageButton = ({
  externalButtonStyle = null,
}) => {
  const { i18n } = useTranslation()

  const finalButtonStyle = {
    ...parentStyles.menuButton,
    ...externalButtonStyle,
    minWidth: 'auto',
  }

  const finalAnchorStyle = parentStyles.menuButtonAnchor

  const toggleLanguage = () => {
    if (i18n.language === 'pt')
      i18n.changeLanguage('en')
    else
      i18n.changeLanguage('pt')
  }

  const currentLanguageIcon = useMemo(() => {
    switch (i18n.language) {
      case 'pt':
        return <IconBR title='Português' style={styles.roundedFlag} />
      case 'en':
      default:
        return <IconUS title='English' style={styles.roundedFlag} />
    }
  }, [i18n.language])

  return (
    <div style={finalAnchorStyle}>
      <div
        style={finalButtonStyle}
        onClick={toggleLanguage}
      >
        {currentLanguageIcon}
      </div>
    </div>
  )
}