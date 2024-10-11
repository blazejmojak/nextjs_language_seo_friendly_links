import Contact from '@/app/components/pages/Contact';
import { tr } from '@/app/data/translations';
import { getLangFromCookieUtils } from '@/app/utils/getLangFromCookieUtils';
import React from 'react';

const userLang = getLangFromCookieUtils();
const { contact } = tr[userLang as keyof typeof tr];

export const metadata = {
    title: contact.title,
    description: contact.description,
};

  

const page: React.FC = () => {
    
    return (
        <Contact userLang={userLang} />
    );
};

export default page;