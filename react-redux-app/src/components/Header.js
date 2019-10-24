import React, { useState } from 'react';
import Feeling from './Feeling';
import roseSelfie from './img/roseSelfie.jpg';

function Header() {
    const [feeling, setFeeling] = useState('neutral');

    return (
        <div className='header'>
            <h1>Rose Landroche</h1>
            <img src={roseSelfie} alt='Selfie of Rose' />
            <h2>Lambda Student <br /> studying Full Stack Web Development</h2>
            <Feeling feeling={feeling} setFeeling={setFeeling} />
        </div>
    )
}

export default Header;