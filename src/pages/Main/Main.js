import React from 'react';
import { useTranslation } from 'react-i18next';
import AboutMe from './AboutMe';
import Products from './Products';
import ImageDisplay from './ImageDisplay';
import Insta from '../../Components/Insta';
import { Link } from 'react-router-dom';
import Rose from '../Offer/Rose';

export default function Main() {
  const { t } = useTranslation();

  return (
    <>
    <div className='xl:flex xl:flex-row'>
    <div className='bg-beige-light border-b border-[#000] flex py-16 xl:px-12 flex-col justify-center xl:w-full'>
      <div className='pt-9'>
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
        <div className='flex justify-center'>
          <div className='border-t-2 border-[#000] w-9 my-1.5 xl:my-6 xl:w-28'></div>
        </div>
      </div>
    </div>
      <ImageDisplay />
      </div>
      <Rose />
      <AboutMe />
      <Products />
      <Insta />
    </>
  );
}