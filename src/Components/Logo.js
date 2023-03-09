import React from 'react';
import logosvg from '../static/img/logo.svg';

export default function Logo() {
  return (
    <div className='xl:px-6 xl:py-6'>
    <div className={`w-small h-small xl:w-big xl:h-big`}>
    <img src={logosvg}>
    </img>
    </div>
    </div>
  );
}
