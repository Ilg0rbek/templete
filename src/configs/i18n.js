import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from "i18next-xhr-backend"
import { baseURL } from "@utils"
const language = localStorage.getItem('language')

const currentLanguage = ['uz', 'ru', 'en'].includes(language) ? language : 'uz'

i18next
    .use(initReactI18next)
    .use(HttpApi)
    .init({
        lng: currentLanguage,
        fallbackLng: currentLanguage,
        debug: false,
        ns: ['main'],
        defaultNS: 'main',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: true,
            wait: true
        },
        backend: {
            loadPath: `${baseURL}/v1/system/translation?language={{lng}}`
        }
    })

export default i18next