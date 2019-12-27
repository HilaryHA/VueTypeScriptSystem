/**
 * @description [有关Cookie的操作] 建议存放不重要的数据（因为本地Cookie有可能被他人分析，然后进行Cookie欺骗）
 * @author Hilary
 * @date 2019/11/12
 */
import Cookie from 'js-cookie'

// 国际化语言
const languageKey = 'language'
export const getLanguage = () => Cookie.get('language')
export const setLanguage = (language: string) => Cookie.set(languageKey, language)
