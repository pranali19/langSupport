import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";

import commonDe from "./locales/de/common.json";
import commonEn from "./locales/en/common.json";
import commonHi from "./locales/hi/common.json";

const options = {
  order: ["cookie", "htmlTag", "querystring", "navigator"],
  caches: ["cookie"],
  lookupQuerystring: "lang",
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources: {
      de: { translation: commonDe },
      en: { translation: commonEn },
      hi: { translation: commonHi },
    },
    defaultNs: ["translation"],
    fallbackLng: "hi",
    supportedLngs: ["de", "en", "hi"],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    backend: {
      loadPath: "/locales/{{lng}}/common.json",
    },
    react: { useSuspense: false },
  });
