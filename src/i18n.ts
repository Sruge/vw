import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources as myResources } from './translations';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: myResources as unknown as Resource,
        fallbackLng: "de",
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupSessionStorage: 'i18nextLng',
            caches: ['localStorage', 'cookie'],
            excludeCacheFor: ['cimode'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;