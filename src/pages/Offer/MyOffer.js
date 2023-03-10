import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MyOffer() {

    const { t } = useTranslation();

    return (
        <div className='bg-beige-light border-b border-[#000] flex flex-col justify-center pb-20 py-16'>
        <div className='py-16 font-ivy font-thin uppercase text-offer text-center leading-offer tracking-offer xl:text-offerbig xl:leading-titlebig xl:tracking-offerbig'>
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
          <div className='flex-col items-center'>
          <p className='font-mont font-thin px-11 text-center text-description leading-offerdescription xl:px-[20%]'>
            {t('offer.description1')}
          </p>
          <p className='font-mont font-thin px-11 text-center text-description leading-offerdescription xl:px-[37%]'>
            {t('offer.description2')}
          </p>
          </div>
          <div className='flex flex-col justify-center pt-12 xl:flex-row xl:justify-around xl:px-[35%]'>
          <div className='flex flex-col justify-center'>
          <p className='font-mont font-medium uppercase text-moreabout text-center leading-moreabout tracking-writeme mt-12'>
            <a href={t('offer.link_offer')} target="_blank">
              {t('offer.my_offer')}
            </a>
          </p>
            <div className='flex flex-row justify-center pb-5 xl:pb-0'>
              <div className='h-full w-6 hover:w-20'>
                <div className='border-t-2 border-[#000] w-full m-1.5'></div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center'>
          <p className='font-mont flex-row font-medium uppercase text-moreabout text-center leading-moreabout tracking-writeme mt-12 pt-5 xl:pt-0'>
            <a href={t('offer.link_form')} target="_blank">
              {t('offer.form')}
            </a>
          </p>
            <div className='flex flex-row justify-center'>
              <div className='h-full w-6 hover:w-20'>
                <div className='border-t-2 border-[#000] w-full m-1.5'></div>
              </div>
            </div>

          </div>
          </div>
      </div>
    );
}
