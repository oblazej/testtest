import React from 'react';
import {useTranslation} from 'react-i18next';
import AboutMe from './AboutMe';
import Products from './Products';
import ImageDisplay from './ImageDisplay';
import Insta from '../../Components/Insta';
import {Link} from 'react-router-dom';
import Rose from '../Offer/Rose';

export default function Main() {
    const {t} = useTranslation();
    const hoverWidth = 120;
    const handleClickScroll = () => {
        const element = document.getElementById('AboutMe');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleHover = (option) => {
        option === "in" ? (this.hoverWidth += 60) : (this.hoverWidth -= 60);
    }

    return (
        <>
            <div className='xl:flex xl:flex-row'>
                <div
                    className='bg-beige-light border-b border-[#000] flex py-16 flex-col justify-center xl:w-full xl:px-0 xl:flex-1 xl:min-w-[560px]'>
                    <div className='pt-9 px-12'>
                        <p className='font-ivy font-thin uppercase text-2xl text-center leading-title tracking-title xl:text-titlebig xl:leading-titlebig'>
                            {t('main.title.part1')}
                        </p>
                        <p className='font-ivy font-thin uppercase text-2xl text-center leading-title tracking-title xl:text-titlebig xl:leading-titlebig'>
                            {t('main.title.part2')}
                        </p>
                        <p className='font-ivy font-thin uppercase text-2xl text-center leading-title tracking-title xl:text-titlebig xl:leading-titlebig'>
                            {t('main.title.part3')}
                        </p>
                        <p className='font-mont font-medium uppercase text-work text-center tracking-writeme mt-12 leading-writeme xl:text-moreaboutbig'>
                            <Link to="offer">
                                {t('main.write_me')}
                            </Link>
                        </p>
                        <div className='flex justify-center w-9 xl:w-28 xl:hover:w-44 m-auto'>
                            <div className='border-t-2 border-[#000] w-full my-1.5 xl:my-6 '></div>
                        </div>
                    </div>
                </div>
                <ImageDisplay/>
                <div className='bg-red-900 absolute left-0 top-10 w-[20px] h-[40px]' onClick={handleClickScroll}></div>
            </div>

            <div id="AboutMe">
                <Rose/>
            </div>
            <AboutMe/>
            <Products/>
            <Insta/>
        </>
    );
}