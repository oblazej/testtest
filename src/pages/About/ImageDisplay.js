import React from 'react';
import image from '../../static/img/aboutme2.jpg';

export default function ImageDisplay() {

    return (
        <div className="bg-beige-light border-b border-[#000] py-7 xl:h-[100%] xl:px-12">
            <div className='flex justify-center py-2'>
            <img className="w-72 xl:w-[39.5rem]" src={image} alt="aboutme" />
            </div>
        </div>
    );
}
