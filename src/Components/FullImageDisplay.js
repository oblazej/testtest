import React from 'react';
import image from '../static/img/wall.jpg';

export default function FullImageDisplay() {

    return (
        <div className="bg-beige-light border-b border-[#000]">
            <div className='flex justify-center'>
            <img src={image} alt="aboutme" />
            </div>
        </div>
    );
}
