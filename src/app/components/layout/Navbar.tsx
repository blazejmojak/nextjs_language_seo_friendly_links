import React from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { languageMap } from '@/app/data/languageMap';

interface NavbarProps {
    language: string;
}

const Navbar: React.FC<NavbarProps> = ({ language }) => {
    return (
        <nav className="navbar mb-8">
            <div className="navbar-brand">
                <Link href={`/${language}`}>MyApp</Link>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item">
                <Link href={`/${language}/${languageMap.services[language]}/`}>Services</Link>
                </li>
                <li className="navbar-item mb-8">
                    <Link href={`/${language}/${languageMap.contact[language]}/`}>Contact</Link>
                </li>
                <LanguageSwitcher />
            </ul>
        </nav>
    );
};

export default Navbar;