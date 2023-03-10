import React from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

export default function Personal() {
    const { t } = useTranslation();

    return (
        <div className='bg-beige-light xl:border-b border-[#000] pb-28 xl:border-l xl:h-[100%] xl:py-28 xl:px-28'>
            <h1 className='font-ivy font-thin uppercase pb-10 pt-16 text-personal leading-personal pl-16'>{t('about_me.personal.title')}</h1>
            <p className='font-mont font-light text-description leading-description pl-16 pr-[4.1rem] mb-11'>{t('about_me.personal.description1')}</p>
            <p className='font-mont font-light text-description leading-description pl-16 pr-[4.1rem] mb-11'>{t('about_me.personal.description2')}</p>
            <div className='xl:px-12 xl:pb-12 flex justify-end pr-[4.1rem]'>
                <p className='font-mont font-medium uppercase text-description text-right tracking-moreabout leading-moreabout pt-8 '>
                    <Link to="about">
                        {t('about_me.personal.start')}
                    </Link>
                    <div className='flex justify-end w-40 xl:w-80 xl:hover:w-36 m-auto mr-0'>
                        <div className='border-t-2 border-[#000] w-full my-1.5 xl:my-6 '></div>
                    </div>
                </p>

            </div>
        </div>
    );
}
