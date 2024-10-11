import React from 'react';
import { tr } from '@/app/data/translations';

const page: React.FC = () => {
    return (
        <div>
            <h1>{tr.en.home.welcome}</h1>
            <p>This is a simple page created with React and TypeScript.</p>
        </div>
    );
};

export default page;