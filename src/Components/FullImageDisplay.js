import React from 'react';
import image from '../static/img/wall.jpg';

export default function FullImageDisplay() {

    return (
        <div className="bg-beige-light border-b border-[#000] xl:h-[100%] xl:p-12 xl:border-b-0">
            <div className='flex justify-center'>
            <img src={image} alt="aboutme" />
            </div>
        </div>
    );
}
