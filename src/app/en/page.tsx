import Service from '@/app/components/pages/Service';
import { tr } from '@/app/data/translations';
import { getLangFromCookieUtils } from '@/app/utils/getLangFromCookieUtils';
import React from 'react';

const userLang = getLangFromCookieUtils();
const { home } = tr[userLang as keyof typeof tr];

export const metadata = {
    title: home.title,
    description: home.description,
};



const page: React.FC = () => {

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>{home.welcome}</h1>
        </div>

    );
};

export default page;