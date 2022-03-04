import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import yaml from 'js-yaml'
import * as storedLanguageProvider from "../../providers/localStorage/storedLanguageProvider";

const storedLanguage = storedLanguageProvider.getCurrentLanguage()

const isPortuguese = ['pt-BR', 'pt-PT', 'pt'].includes(
  storedLanguage ?? navigator.language
)

const defaultLanguage = isPortuguese ? 'pt' : 'en'

export default i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: defaultLanguage,
    returnObjects: true,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.yml',
      parse: (data) => yaml.load(data),
    },
    react: {
      wait: true,
      useSuspense: false,
    }
  })