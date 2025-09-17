

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Для загрузки переводов из JSON
import LanguageDetector from 'i18next-browser-languagedetector'; // Для автоопределения языка

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true, // Только для разработки
    interpolation: {
      escapeValue: false, // Не экранировать HTML
    },
    backend: {
      // этот вариант одинаково работает как при локал и при сборке 
      loadPath:
        import.meta.env.MODE === 'development'
          ? '/locales/{{lng}}/translation.json'
          : '/static/locales/{{lng}}/translation.json'
      // loadPath: '/static/locales/{{lng}}/translation.json', // при сборке
      // loadPath: '/locales/{{lng}}/translation.json', // Путь при разработке 
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;