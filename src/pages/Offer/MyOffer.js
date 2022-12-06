import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MyOffer() {

    const { t } = useTranslation();

    return (
        <div className='bg-beige-light border-b border-[#000] flex flex-col justify-center pb-20 py-16'>
        <div className='py-16 font-ivy font-thin uppercase text-offer text-center leading-offer tracking-offer'>
          <p>
            {t('offer.title.part1')}
          </p>
          <p>
            {t('offer.title.part2')}
          </p>
          <p>
            {t('offer.title.part3')}
          </p>
          </div>
          <p className='font-mont font-thin px-11 text-center text-description leading-offerdescription'>
            {t('offer.description1')}
          </p>
          <p className='font-mont font-thin px-11 text-center text-description leading-offerdescription'>
            {t('offer.description2')}
          </p>
          <div className='flex flex-col justify-center pt-12'>
          <p className='font-mont font-medium uppercase text-moreabout text-center leading-moreabout tracking-writeme mt-12'>
            <a>
              {t('offer.my_offer')}
            </a>
          </p>
          <div className='flex justify-center pb-5'>
            <div className='border-t-2 border-[#000] w-6 m-1.5'></div>
          </div>
          <p className='font-mont font-medium uppercase text-moreabout text-center leading-moreabout tracking-writeme mt-12 pt-5'>
            <a>
              {t('offer.form')}
            </a>
          </p>
          <div className='flex justify-center'>
            <div className='border-t-2 border-[#000] w-6 m-1.5'></div>
          </div>
          </div>
      </div>
    );
}
