import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLanguage } from '../utils/cookies'

// view-design lang
import viewEnLocale from 'view-design/dist/locale/en-US'
import viewZhLocale from 'view-design/dist/locale/zh-CN'

// myself defined lang
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocale,
        ...viewEnLocale
    },
    zh: {
        ...zhLocale,
        ...viewZhLocale
    }
}

export const getLocale = () => {
    const cookieLanguage = getLanguage()
    if (cookieLanguage) {
        return cookieLanguage
    }
    const language = navigator.language.toLowerCase()
    const locales = Object.keys(messages)
    for(let locale of locales) {
        if(language.indexOf(locale) > -1) {
            return locale
        }
    }
    // Browser language does not exist, default Chinese.
    return 'zh'
}

const i18n = new VueI18n({
    locale: getLocale(),
    messages
})

export default i18n