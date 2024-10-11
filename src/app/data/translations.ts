

type Translation = {
    [key: string]: {
        [key: string]: {
            [key: string]: string
        }
    }
}


export const tr: Translation = {
    en: {
        home: {
            welcome: 'Welcome to the main page'
        },
        contact: {
            title: 'Contact us',
            description: 'Contact us using the form below.'
        },
        service: {
            title: 'Our services',
            description: 'We provide'
        }
    },
    pl: {
        home: {
            welcome: 'Witamy na stronie głównej'
        },
        contact: {
            title: 'Skontaktuj się z nami',
            description: 'Skontaktuj się z nami za pomocą formularza.'
        },
        service: {
            title: 'Nasze usługi',
            description: 'Oferujemy'
        }
    },
    de: {
        home: {
            welcome: 'Willkommen auf der Hauptseite'
        },
        contact: {
            title: 'Kontaktiere uns',
            description: 'Kontaktiere uns mit dem unten stehenden Formular.'
        },
        service: {
            title: 'Unsere Dienstleistungen',
            description: 'Wir bieten'       
        }
    }
}