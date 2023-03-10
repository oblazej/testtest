import React from 'react';
import image from '../../static/img/4-min@3x.png';

export default function ImageDisplay() {

    return (
        // grayscale-[50%] powoduje schowanie menu z tylu 
        <div className="bg-beige-light border-b border-[#000] py-7 xl:py-14 xl:border-l xl:w-full xl:px-0 xl:flex-[2]">
            <img className="xl:pl-10 xl:pr-11" src={image} alt="product" />
        </div>
    );
}
