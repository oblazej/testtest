import React from 'react';
import AboutMe from './AboutMe';
import FullImageDisplay from '../../Components/FullImageDisplay';
import ImageDisplay from './ImageDisplay';
import Personal from './Personal';
import Insta from '../../Components/Insta';

export default function About() {

    return (
        <>
            <AboutMe />
            <ImageDisplay />
            <Personal />
            <FullImageDisplay />
            <Insta />
        </>
    );
}
