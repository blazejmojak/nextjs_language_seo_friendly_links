import React from 'react'
import { tr } from '@/app/data/translations'


type Props = {
    userLang: string;
}



const Service = ({ userLang }: Props) => {
    const { service } = tr[userLang as keyof typeof tr];
    
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
        </div>

    )
}

export default Service