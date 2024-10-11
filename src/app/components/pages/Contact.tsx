import React from 'react'
import { tr } from '@/app/data/translations'


type Props = {
    userLang: string;
}



const Contact = ({ userLang }: Props) => {
    const { contact } = tr[userLang as keyof typeof tr];
    
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>{contact.title}</h1>
            <p>{contact.description}</p>
        </div>

    )
}

export default Contact