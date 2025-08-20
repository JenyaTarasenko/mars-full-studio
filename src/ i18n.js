

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
      loadPath: '/locales/{{lng}}/translation.json', // Путь к файлам
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;