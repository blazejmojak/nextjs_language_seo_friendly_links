import Service from '@/app/components/pages/Service';
import { tr } from '@/app/data/translations';
import { getLangFromCookieUtils } from '@/app/utils/getLangFromCookieUtils';
import React from 'react';

const userLang = getLangFromCookieUtils();
const { service } = tr[userLang as keyof typeof tr];

export const metadata = {
    title: service.title,
    description: service.description,
};

  

const page: React.FC = () => {
    
    return (
        <Service userLang={userLang} />
    );
};

export default page;