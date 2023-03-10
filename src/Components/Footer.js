import React from 'react';
import Logo from './Logo';
import {Link} from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bg-beige-light flex flex-col pt-24 pb-20 xl:flex-row xl:justify-between xl:pb-16 xl:pt-16 xl:items-center">
            <div className='flex xl:flex-1 justify-center py-6 xl:py-0'>
                <Link to="/">
                    <Logo width="48" height="small"/>
                </Link>
            </div>
            <div
                className="font-ivy flex flex-col xl:flex-[2] xl:flex-row xl:justify-around font-thin uppercase text-description text-center leading-moreabout tracking-footer pt-16 pb-40 xl:pt-0 xl:pb-0">
                <a href="https://www.instagram.com/graphic_witch/" target="_blank" className='pb-5 xl:py-0 xl:pl-[20%]'>Instagram</a>
                <a href="https://www.behance.net/wikaminska29b2" target="_blank" className='py-5 xl:py-0'>Behance</a>
                <a href="https://pl.pinterest.com/graphic_witch/" target="_blank" className='py-5 xl:py-0 xl:pr-[20%]'>Pinterest</a>
            </div>
            <span className='xl:flex-1 font-mont font-light text-center text-description'>&copy;Wiktoria Kamińska</span>
        </footer>
    );
}
