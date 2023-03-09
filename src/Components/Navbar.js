import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import MenuButton from '../pages/Main/MenuButton';
import { Link } from 'react-router-dom';
import i18n from '../i18n';

export default function Navbar() {
    const { t } = useTranslation();
    const [currentLang, setCurrentLang] = useState("");

    useEffect(() => {
        setCurrentLang(i18n.language);
    }, [t]);


    const changeLanguage = () => {
        let lng = currentLang === "pl" ? "en" : "pl";
        i18n.changeLanguage(lng);
        setCurrentLang(lng);
    }

    return (
        <nav className="bg-beige-light py-6 px-6 flex flex-row justify-between sticky top-0 xl:border-b xl:border-[#000] xl:py-0 xl:px-0">
            <Link to="/" className="xl:w-[62%] xl:flex xl:justify-center">
                <Logo width="big" height="big"/>
            </Link>
            <button className="xl:hidden" id="toggle" onClick={() => {
                document.getElementById("nav").classList.toggle("-right-full");
                document.getElementById("nav").classList.toggle("-right-0");
            }}>
                <MenuButton />
            </button>
            <ul id="nav" className="fixed top-12 bottom-0 -right-full w-full bg-beige-light font-ivy font-thin uppercase text-2xl text-center leading-title tracking-insta flex flex-col justify-center pb-24 xl:pb-0 transition-all xl:static xl:flex-row xl:justify-end">
                <li className="py-11 xl:py-6 xl:border-l xl:px-2 xl:border-r xl:border-[#000] xl:w-1/3 hover:line-through">
                    <Link to="offer" onClick={() => {
                        document.getElementById("nav").classList.toggle("-right-full");
                        document.getElementById("nav").classList.toggle("-right-0");
                    }}>
                        {t('all.navbar1')}
                    </Link>
                </li>
                <li className="py-11 xl:py-6 xl:px-2 border-r xl:border-[#000] xl:w-1/3 hover:line-through">
                    <Link to="about" onClick={() => {
                        document.getElementById("nav").classList.toggle("-right-full");
                        document.getElementById("nav").classList.toggle("-right-0");
                    }}>
                        {t('all.navbar2')}
                    </Link>
                </li>
                <li className="py-11 xl:py-6 xl:px-2 xl:w-1/3 hover:line-through">
                    <a href="#" onClick={() => {
                        changeLanguage()
                        document.getElementById("nav").classList.toggle("-right-full");
                        document.getElementById("nav").classList.toggle("-right-0");
                    }}>{t('all.navbar3')}</a>
                </li>
            </ul>
        </nav>
    );
}
