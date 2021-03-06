import React from 'react';
import Feeling from './Feeling';
import roseSelfie from './img/roseSelfie.jpg';
import Quote from './Quote';

function Header() {
    return (
        <div className='header'>
            <h1>Rose Landroche</h1>
            <img src={roseSelfie} alt='Selfie of Rose' />
            <h2>Lambda Student <br /> studying Full Stack Web Development</h2>
            <Feeling />
            <Quote />
        </div>
    )
}

export default Header;