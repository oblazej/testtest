import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <div className='bg-beige-light xl:h-[100%]'>
            <h1 className='font-ivy font-thin uppercase pb-8 pt-20 xl:pl-24 text-about pl-16'>{t('main.about_me.title')}</h1>
            <p className='font-mont font-light text-description xl:px-24 tracking-description pl-16 pr-[4.1rem] mb-11'>{t('main.about_me.description')}</p>
        </div>
    );
}
