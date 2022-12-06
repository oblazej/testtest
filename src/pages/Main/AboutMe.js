import React from 'react';
import image from '../../static/img/aboutme.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <div className='bg-beige-light pb-32 border-b border-[#000]'>
            <div className='flex justify-center'>
                <img className="w-[11rem] my-11 pt-20 grayscale-[50%] hover:grayscale-0 transition duration-500" src={image} alt="aboutme" />
            </div>
            <h1 className='font-ivy font-thin uppercase my-7 text-about pl-16'>{t('main.about_me.title')}</h1>
            <p className='font-mont font-light text-description pl-16 pr-[4.1rem] mb-11 tracking-description leading-description'>{t('main.about_me.description')}</p>
            <div className='flex justify-end pr-[4.1rem]'>
            <p className='font-mont font-medium uppercase text-descritpion text-right tracking-moreabout leading-moreabout pt-8 border-b-2 border-[#000] w-60 pb-4'>
                <Link to="about">
                    {t('main.about_me.more')}
                </Link>
            </p>
            </div>
        </div>
    );
}
