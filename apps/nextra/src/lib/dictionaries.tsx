// https://nextjs.org/docs/app/building-your-application/routing/internationalization

import 'server-only'

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  nl: () => import('../dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale as keyof typeof dictionaries]()
