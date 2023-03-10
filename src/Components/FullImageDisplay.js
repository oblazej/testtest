import React from 'react';
import image from '../static/img/wall.jpg';

export default function FullImageDisplay() {
    return (
        <div className="bg-beige-light border-[#000] py-7 xl:py-14 xl:border-l xl:w-full xl:px-0 xl:flex-[2] xl:h-full xl:flex xl:items-center">
            <img className="xl:pl-10 xl:pr-11" src={image} alt="aboutme" />
        </div>
    );
}
