import React from 'react';
import { useTranslation } from 'react-i18next';
import AboutMe from './AboutMe';
import Products from './Products';
import ImageDisplay from './ImageDisplay';
import Insta from '../../Components/Insta';
import { Link } from 'react-router-dom';

export default function Main() {
  const { t } = useTranslation();

  return (
    <>
    <div className='bg-beige-light border-b border-[#000] flex py-16 flex-col justify-center'>
      <div className='pt-9'>
        <p className='font-ivy font-thin uppercase text-2xl text-center leading-title tracking-title'>
          {t('main.title.part1')}
        </p>
        <p className='font-ivy font-thin uppercase text-2xl text-center leading-title tracking-title'>
          {t('main.title.part2')}
        </p>
        <p className='font-ivy font-thin uppercase text-2xl text-center leading-title tracking-title'>
          {t('main.title.part3')}
        </p>
        <p className='font-mont font-medium uppercase text-work text-center tracking-writeme mt-12 leading-writeme'>
          <Link to="offer">
            {t('main.write_me')}
          </Link>
        </p>
        <div className='flex justify-center'>
          <div className='border-t-2 border-[#000] w-9 my-1.5'></div>
        </div>
      </div>
    </div>
      <ImageDisplay />
      <AboutMe />
      <Products />
      <Insta />
    </>
  );
}