import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LocalStorageService from '../services/local-storage-service';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const _resourceFiles = {
  en: {
    translations: require('./locales/en.json')
  },
  ar: {
    translations: require('./locales/ar.json')
  }
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    resources: _resourceFiles,
    lng: new LocalStorageService().getCurrentLanguage(), // default language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    ns: ['translations'], // namespace
    defaultNS: 'translations', // default namespace
    interpolation: {
      escapeValue: false
    }
  });

i18n.languages = ['en', 'ar'];
export default i18n;

// For more details and reference ==> chek this article from www.freecodecamp.org
// https://www.freecodecamp.org/news/how-to-add-localization-to-your-react-app/#:~:text=The%20way%20it%20works%20is,values%20for%20each%20desired%20language.