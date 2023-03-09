import React from 'react';
import AboutMe from './AboutMe';
import FullImageDisplay from '../../Components/FullImageDisplay';
import ImageDisplay from './ImageDisplay';
import Personal from './Personal';
import Insta from '../../Components/Insta';

export default function About() {

    return (
        <>
            <div className='xl:flex-col xl:flex'>
                <div className='xl:flex xl:flex-row xl:border-b xl:border-[#000] bg-beige-light'>
                    <div className='xl:w-[38.3%]'><AboutMe /></div>
                    <div className='xl:hidden'><ImageDisplay /></div>
                    <div className='hidden xl:block'><FullImageDisplay /></div>
                </div></div>
            <div className='xl:flex xl:flex-row xl:flex-row-reverse xl:px-0 xl:mx-0'><div className='xl:w-[61.75%]'><Personal /></div>
                <div className='xl:hidden'><FullImageDisplay /></div>
                <div className='hidden xl:block'><ImageDisplay /></div>
            </div>
            <Insta />
        </>
    );
}
