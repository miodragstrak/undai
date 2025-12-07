import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import sr from "./sr.json";

i18n
  .use(LanguageDetector)          // <-- automatic language detection
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sr: { translation: sr }
    },

    fallbackLng: "en",            // if detection fails
    interpolation: {
      escapeValue: false
    },

    detection: {
      // Detection order
      order: [
        "localStorage",           // <-- if user chose manually
        "navigator",              // <-- browser language
        "htmlTag",
        "path",
        "subdomain"
      ],

      // Where language should be saved
      caches: ["localStorage"],   // persist language
      lookupLocalStorage: "lang",
    }
  });

export default i18n;
