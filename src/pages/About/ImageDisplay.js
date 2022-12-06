import React from 'react';
import image from '../../static/img/aboutme2.jpg';

export default function ImageDisplay() {

    return (
        <div className="bg-beige-light border-b border-[#000] py-7">
            <div className='flex justify-center py-2'>
            <img className="w-72" src={image} alt="aboutme" />
            </div>
        </div>
    );
}
