import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <div className='bg-beige-light border-b border-[#000]'>
            <h1 className='font-ivy font-thin uppercase pb-8 pt-20 text-about pl-16'>{t('main.about_me.title')}</h1>
            <p className='font-mont font-light text-description tracking-description pl-16 pr-[4.1rem] mb-11'>{t('main.about_me.description')}</p>
        </div>
    );
}
