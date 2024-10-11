import { cookies } from 'next/headers';
import { defaultLanguage } from '../data/languageMap';



export const getLangFromCookieUtils = (): string => {
    const cookieStore = cookies();
    const lang = cookieStore.get('lang')?.value || defaultLanguage;

    return lang;
}  