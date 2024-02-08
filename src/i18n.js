import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"

import {Ar} from "./local/ar"
import {En} from "./local/en"
const resources = {
  en: { translation: En },
  ar: { translation: Ar },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    debug: true ,
    fallbackLang: "en" ,
    resources,
    lng: "en",
    // interpolation: { escapeValue: false },
    // react:{useSuspense:false}
  });

  export default i18n;