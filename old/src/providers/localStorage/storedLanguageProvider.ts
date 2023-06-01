const storedLanguageKey = 'storedLanguage'

export const getCurrentLanguage = () => {
  return localStorage.getItem(storedLanguageKey)
}

export const updateCurrentLanguage = (newLanguage: 'en' | 'pt') => {
  localStorage.setItem(storedLanguageKey, newLanguage)
}