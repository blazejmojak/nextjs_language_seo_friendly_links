import React from 'react';
import { tr } from '@/app/data/translations';

const page: React.FC = () => {
    return (
        <div>
            <h1>{tr.pl.home.welcome}</h1>
            <p>To jest polska wersja naszej strony.</p>
        </div>
    );
};

export default page;