import React from 'react';
import logosvg from '../static/img/logo.svg';

export default function Logo({width, height}) {
  let x = 'w-48'
  return (
    <div className='xl:px-6 xl:py-6'>
    <div className={`w-small h-small xl:w-${width} xl:h-${height}`}>
    <img src={logosvg}>
    </img>
    </div>
    </div>
  );
}
