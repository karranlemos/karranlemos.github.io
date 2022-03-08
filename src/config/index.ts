import { windowWatcherConfig } from './windowWatcherConfig'
import { dynamicGlobalStylesConfig } from './dynamicGlobalStylesConfig'
import './i18n'

export const config = () => {
  windowWatcherConfig()
  dynamicGlobalStylesConfig()
}