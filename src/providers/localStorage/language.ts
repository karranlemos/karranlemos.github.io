import { localStorageKeys } from '../../constants/localStorage';

export const getCurrentLanguage = () => {
  return localStorage.getItem(localStorageKeys.language);
};

export const updateCurrentLanguage = (newLanguage: 'en' | 'pt') => {
  localStorage.setItem(localStorageKeys.language, newLanguage);
};
