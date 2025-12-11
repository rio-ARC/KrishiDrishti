import { useAppStore } from '../store/appStore.js';
import { translations } from '../data/mockData.js';

export const useTranslation = () => {
  const selectedLanguage = useAppStore(state => state.selectedLanguage);
  
  const t = (key) => {
    const lang = selectedLanguage || 'en';
    const translation = translations[lang];
    return translation?.[key] || key;
  };
  
  return { t };
};