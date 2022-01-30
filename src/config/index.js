import windowWatcherConfig from './windowWatcherConfig'
import dynamicGlobalStylesConfig from './dynamicGlobalStylesConfig'
import './i18n'

const config = () => {
  windowWatcherConfig()
  dynamicGlobalStylesConfig()
}

export default config