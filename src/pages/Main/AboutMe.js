import React from 'react';
import image from '../../static/img/aboutme.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function AboutMe() {
    const { t } = useTranslation();
//grayscale-[50%] hover:grayscale-0 transition duration-500
    return (
        <div className='bg-beige-light pb-32 xl:pb-0 border-b border-[#000] xl:flex'>
            <div className='flex justify-center xl:w-[55%] xl:px-11'>
                <img className="w-[11rem] my-11 pt-20 xl:my-11 xl:pt-10 xl:pb-10 xl:w-[22rem] xl:h-[34rem]" src={image} alt="aboutme" />
            </div>
            <div className='xl:w-5/6 xl:border-[#000] xl:border-l xl:px-44 xl:py-12'>
            <h1 className='font-ivy font-thin uppercase my-7 text-about pl-16'>{t('main.about_me.title')}</h1>
            <p className='font-mont font-light text-description pl-16 pr-[4.1rem] mb-11 xl:mb-0 tracking-description leading-description'>{t('main.about_me.description')}</p>
            <div className='flex justify-end pr-[4.1rem]'>
            <p className='font-mont font-medium uppercase text-description text-right tracking-moreabout leading-moreabout pt-8 border-b-2 border-[#000] w-60 pb-4 xl:w-5/12'>
                <Link to="about">
                    {t('main.about_me.more')}
                </Link>
            </p>
            </div>
            </div>
        </div>
    );
}
