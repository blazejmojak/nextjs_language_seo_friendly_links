This is a [Next.js](https://nextjs.org) project with multilangual approach with friendly SEO e.g. /en/contact and /pl/kontakt

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to use
1. **data.languageMap.ts** - add new language to the languages array
2. **create keyMapper** - e.g. services | usługi - key is 'services'
3. **add to language map object** - e.g. services: {'en': 'services' etc.}

4. **create new page** - e.g. app/de/service/page.tsx; app/en/services/page.tsx; app/pl/uslugi/page.tsx

5. **create a page component** - app/components/pages/Service.tsx


