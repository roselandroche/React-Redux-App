import React, { useState } from 'react';

function Header() {
    const [feeling, setFeeling] = useState('neutral');

    return (
        <div className='header'>
            <h1>Rose Landroche</h1>
            <h2>Lambda Student <br /> studying Full Stack Web Development</h2>
            <h2>Today I feel {feeling}</h2>
        </div>
    )
}

export default Header;