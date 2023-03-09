import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Personal() {
    const { t } = useTranslation();

    return (
        <div className='bg-beige-light border-b border-[#000] pb-28 xl:border-l xl:h-[100%] xl:py-28 xl:px-28'>
            <h1 className='font-ivy font-thin uppercase pb-10 pt-16 text-personal leading-personal pl-16'>{t('about_me.personal.title')}</h1>
            <p className='font-mont font-light text-description leading-description pl-16 pr-[4.1rem] mb-11'>{t('about_me.personal.description1')}</p>
            <p className='font-mont font-light text-description leading-description pl-16 pr-[4.1rem] mb-11'>{t('about_me.personal.description2')}</p>
            <div className='flex justify-end pr-[4.1rem]'>
            <p className='font-mont font-medium uppercase text-description text-right tracking-description pt-8 border-b-2 border-[#000] w-60 pb-4 xl:w-5/12'>
                <a>
                    {t('about_me.personal.start')}
                </a>
            </p>
            </div>
        </div>
    );
}
