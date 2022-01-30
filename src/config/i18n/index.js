import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

export const configTranslations = () => {
  const defaultLanguage = ['pt-BR', 'pt-PT', 'pt'].includes(navigator.language)
    ? 'pt'
    : 'en'

  i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false
    }
  });
}