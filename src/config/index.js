import windowWatcherConfig from './windowWatcherConfig'
import dynamicGlobalStylesConfig from './dynamicGlobalStylesConfig'
import { configTranslations } from './i18n'

const config = () => {
  windowWatcherConfig()
  dynamicGlobalStylesConfig()
  configTranslations()
}

export default config