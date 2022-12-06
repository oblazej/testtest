import React from 'react';
import image from '../../static/img/4-min@3x.png';

export default function ImageDisplay() {

    return (
        // grayscale-[50%] powoduje schowanie menu z tylu 
        <div className="bg-beige-light border-b border-[#000] py-7 grayscale-[50%] hover:grayscale-0 transition duration-500">
            <img src={image} alt="product" />
        </div>
    );
}
