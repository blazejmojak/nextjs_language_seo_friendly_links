import { NextRequest, NextResponse } from 'next/server';
import { languages, defaultLanguage } from './app/data/languageMap';

function setLanguageCookie(response: NextResponse, lang: string) {
  response.cookies.set('lang', lang, { path: '/', maxAge: 60 * 60 * 24 * 365 }); // Set cookie to expire in 1 year
}

function createPathnameAndSetCookie(lang: string, pathname: string, requestUrl: string, setCookie: boolean = true) {
  const newUrl = new URL(`/${lang}${pathname}`, requestUrl);

  const response = NextResponse.redirect(newUrl);

  if (setCookie) {
    setLanguageCookie(response, lang);
  }

  return response;
}



export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const { pathname } = nextUrl;

  // 1. Check if the URL is already in the correct language format (e.g., /en, /pl)
  if (languages.some((lang: string) => pathname.startsWith(`/${lang}`))) {
    const response = NextResponse.next();

    const lang = pathname.slice(1, 3) as string;

    setLanguageCookie(response, lang);

    return response;
  }

  // 2. Check if lang is in cookies
  const cookieLang = request.cookies.get('lang')?.value;

  if (cookieLang && languages.includes(cookieLang)) {

    const response = createPathnameAndSetCookie(cookieLang, pathname, request.url, false);

    return response;
  }

  // 3. Get the preferred language from the browser or set to default
  const acceptLanguage = request.headers.get('accept-language')?.split(',')[0].slice(0, 2);

  if (acceptLanguage && languages.includes(acceptLanguage.slice(0, 2))) {

    const browserLang = acceptLanguage.slice(0, 2);

    const response = createPathnameAndSetCookie(browserLang, pathname, request.url, true);

    return response;
  }

  // 4. Set to default language
  const lang = defaultLanguage;

  const response = createPathnameAndSetCookie(lang, pathname, request.url, true);

  return response;
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api|static).*)'], // Apply middleware to all routes except API and static files
};