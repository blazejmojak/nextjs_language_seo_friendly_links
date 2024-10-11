import Contact from '@/app/components/pages/Contact';
import { tr } from '@/app/data/translations';
import { getLangFromCookieUtils } from '@/app/utils/getLangFromCookieUtils';
import { getMetadataUtils } from '@/app/utils/getMetadataUtils';
import React from 'react';

const pageName = 'contact';

const userLang = getLangFromCookieUtils();

const { title, description } = getMetadataUtils(userLang as keyof typeof tr, pageName);


export const metadata = {
    title: title,
    description: description,
};

  

const page: React.FC = () => {
    
    return (
        <Contact userLang={userLang} />
    );
};

export default page;