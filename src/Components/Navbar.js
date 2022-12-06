import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import MenuButton from '../pages/Main/MenuButton';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { t } = useTranslation();

    return (
        <nav className="bg-beige-light py-6 px-6 flex flex-row justify-between sticky top-0">
            <Link to="/">
                <Logo width={152} height={21} />
            </Link>
            <button id="toggle" onClick={() => {
                document.getElementById("nav").classList.toggle("-right-full");
                document.getElementById("nav").classList.toggle("-right-0");
            }}>
                <MenuButton />
            </button>
            <ul id="nav" className="fixed top-12 bottom-0 -right-full w-full bg-beige-light font-ivy font-thin uppercase text-2xl text-center leading-title tracking-insta flex flex-col justify-center pb-24 transition-all">
                {/* todo: font and padding adjustments */}
                <li className="py-11">
                    <Link to="offer" onClick={() => {
                        document.getElementById("nav").classList.toggle("-right-full");
                        document.getElementById("nav").classList.toggle("-right-0");
                    }}>
                        {t('all.navbar1')}
                    </Link>
                </li>
                <li className="py-11">
                    <Link to="about" onClick={() => {
                        document.getElementById("nav").classList.toggle("-right-full");
                        document.getElementById("nav").classList.toggle("-right-0");
                    }}>
                        {t('all.navbar2')}
                    </Link>
                </li>
                <li className="py-11">
                    <a href="#">{t('all.navbar3')}</a>
                </li>
            </ul>
        </nav>
    );
}
