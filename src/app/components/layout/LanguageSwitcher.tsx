'use client';

import { keyMapper, languages } from '@/app/data/languageMap';
import { languageMap } from '@/app/data/languageMap';


import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const switchLanguage = (lang: string) => {
    const [language, ...restPath] = pathname.split('/').filter(Boolean);  

    if (restPath.length === 0) {
      const newPath = `/${lang}`;
      router.push(newPath);
      router.refresh();
      return;
    }

    const restPathString = restPath.join('/');
    // const oldPath = `/${language}/${restPath.join('/')}`;

    const key = keyMapper[restPathString as keyof typeof keyMapper];
    const newPath = `/${lang}/${languageMap[key][lang]}`;
    

    router.push(newPath);
    router.refresh();





    // const pathSegments = pathname.split('/');
    // console.log('path name: ', pathSegments);
    // const currentLanguage = pathSegments[1];
    // console.log('current language: ', currentLanguage);
    // const currentPath = pathSegments[2] && pathSegments[2].length > 0 ? pathSegments[2] : null;
    // console.log('current path: ', currentPath);


    // const currentPath = pathSegments[2] && pathSegments[2].length > 0 ? pathSegments[2] : '';

    // const newKey = keyMapper[currentPath as keyof typeof keyMapper];
    // console.log(newKey);

    // const newPath = `/${lang}/${languageMap[newKey][lang]}`;
    // console.log(newPath);
    
    // const currentPath = pathname.replace(/^\/(en|pl|de)/, '') as keyof LanguageMap;
    // const newPath = languageMap[currentPath]?.[lang] || `/${lang}${currentPath}`;

    // router.push(newPath);
    // router.refresh();
  };

  return (
    <div>
      {languages.map(lang => (
        <button key={lang} className='mx-8' onClick={() => switchLanguage(lang)}>
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;