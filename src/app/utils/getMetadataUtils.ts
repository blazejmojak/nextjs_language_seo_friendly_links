import { tr } from '@/app/data/translations';

type TranslationsType = typeof tr;
type LanguageKeys = keyof TranslationsType;
type PageNames = keyof TranslationsType[LanguageKeys];
type PageContent = {
  title: string;
  description: string;
};

export const getMetadataUtils = (userLang: LanguageKeys, pageName: PageNames): PageContent => {
    
  const pageData = tr[userLang][pageName];
  if ('title' in pageData && 'description' in pageData) {
    const { title, description } = pageData;
    return { title, description };
  }
  throw new Error(`Page data for ${pageName} does not contain title and description`);
};