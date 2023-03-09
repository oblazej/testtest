import React from 'react';
import Logo from './Logo';

export default function Footer() {

    return (
        <footer className="bg-beige-light flex flex-col pt-24 pb-20 xl:flex-row xl:justify-between xl:px-20 xl:pb-16 xl:pt-16 xl:items-center">
            <div className='flex justify-center py-6 xl:py-0'><Logo width="mid" height="mid"/>
            </div>
            <div className="font-ivy flex flex-col xl:flex-row xl:justify-around font-thin uppercase text-footer text-center leading-moreabout tracking-footer pt-16 pb-40 xl:pt-0 xl:pb-0 xl:w-1/2">
            <a href="https://www.instagram.com/graphic_witch/" className='pb-5 xl:py-0'>Instagram</a>
            <a href="https://www.behance.net/wikaminska29b2" className='py-5 xl:py-0'>Behance</a>
            <a href="https://pl.pinterest.com/graphic_witch/" className='py-5 xl:py-0'>Pinterest</a>
            </div>
            <span className='font-mont font-light text-center text-description'>&copy;Wiktoria Kamińska</span>
        </footer>
    );
}
