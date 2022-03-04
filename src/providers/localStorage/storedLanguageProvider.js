const storedLanguageKey = 'storedLanguage'

export const getCurrentLanguage = () => {
  return localStorage.getItem(storedLanguageKey)
}

export const updateCurrentLanguage = (newLanguage) => {
  if (!['en', 'pt'].includes(newLanguage))
    throw new Error('Invalid language code')
    
  localStorage.setItem(storedLanguageKey, newLanguage)
}