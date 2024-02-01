import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

interface ITranslation {
    welcome_message: string;
    // Define other keys here
}

// Define your resources structure
interface Resources {
    en: {
        translation: ITranslation;
    };
    es: {
        translation: ITranslation;
    };
}

const resources: Resources = {
    en: {
        translation: {
            welcome_message: "Welcome to our application",
            // other key-value pairs for English
        },
    },
    es: {
        translation: {
            welcome_message: "Bienvenido a nuestra aplicación",
            // other key-value pairs for Spanish
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
