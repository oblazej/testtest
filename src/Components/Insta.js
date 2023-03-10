import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Insta() {
    const { t } = useTranslation();
    const images = ["product1", "product2", "product3"]

    return (
        <div className="bg-beige border-b border-[#000] pt-10">
            <div className='py-24'>
            <div className="font-ivy font-thin uppercase text-insta text-center leading-moreabout tracking-insta">
            <h2>{t('all.insta1')}</h2>
            <h2>{t('all.insta2')}</h2>
            </div>
            <p className='font-mont font-light text-center text-xl pt-8 tracking-graphic leading-moreabout'><a href="https://www.instagram.com/graphic_witch/" target="_blank">@graphic_witch</a></p>
            </div>
            <div className='flex justify-between mb-24'>
            {images.map(item => <img className="w-1/3 xl:w-1/6" src={require('../static/img/products/' + item + '.png')} key={item}/>)}
            </div>
        </div>
    );
}
