import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './config';
import English from './languages/english';
import Hindi from './languages/hindi';
import Bengali from './languages/bengali';
import Gujarati from './languages/gujarati';
import Kannada from './languages/kannada';
import Marathi from './languages/marathi';
import Telugu from './languages/telugu';
import Punjabi from './languages/punjabi';

const resources = {
  english: { translation: English },
  hindi: { translation: Hindi },
  bengali: { translation: Bengali },
  gujarati: { translation: Gujarati },
  kannada: { translation: Kannada },
  marathi: { translation: Marathi },
  telugu: { translation: Telugu },
  punjabi: { translation: Punjabi },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
