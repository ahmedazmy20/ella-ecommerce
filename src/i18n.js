import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

function loadLocaleMessages() {
  const locales = [{ en: en }, { ar: ar }];
  const messages = {};
  locales.forEach((lang) => {
    const key = Object.keys(lang)[0];
    messages[key] = lang[key];
  });
  return messages;
}
const savedLang = localStorage.getItem("lang") || "en";
export default createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});
