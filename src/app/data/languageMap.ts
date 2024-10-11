
export const languages = ['en', 'pl', 'de']

export const defaultLanguage = "en"

export const keyMapper = {
  kontakt: 'contact',
  contact: 'contact',
  contacten: 'contact',
  services: 'services',
  uslugi: 'services',
  service: 'services',

}

export const languageMap: { [key: string]: { [key: string]: string } } = {

  home: {
    en: 'home',
    pl: 'strona główna',
    de: 'home',
  },
  contact: {
    en: 'contact',
    pl: 'kontakt',
    de: 'contacten',
  },
  services: {
    en: 'services',
    pl: 'uslugi',
    de: 'service',
  }
}



