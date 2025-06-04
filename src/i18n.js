import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";

// @ts-ignore
const getCurrentHost = import.meta.env.MODE === "development" ? "http://localhost:4000" : "LINK TO PROD";

i18n.use(i18nBackend).use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  backend: {
      loadPath: `${getCurrentHost}/lang/{{lng}}.json`,
    },
});

export default i18n;