import React from 'react';
import Logo from './Logo';

export default function Footer() {

    return (
        <footer className="bg-beige-light flex flex-col pt-24 pb-20">
            <div className='flex justify-center py-6'><Logo width={239} height={34}/>
            </div>
            <div className="font-ivy flex flex-col font-thin uppercase text-footer text-center leading-moreabout tracking-footer pt-16 pb-40">
            <a href="https://www.instagram.com/graphic_witch/" className='pb-5'>Instagram</a>
            <a href="https://www.behance.net/wikaminska29b2" className='py-5'>Behance</a>
            <a href="https://pl.pinterest.com/graphic_witch/_created/" className='py-5'>Pinterest</a>
            </div>
            <span className='font-mont font-normal text-center text-description'>&copy;Wiktoria Kamińska</span>
        </footer>
    );
}
