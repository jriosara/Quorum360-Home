import React from 'react';
import '../styles/HeroSection.css';
import quorum360  from '../assets/image/q360_beige.png';

function HeroSection() {
    return (
        <section className='hero'>
            <img src= { quorum360 } alt='Quorum360 beige' className='hero-logo' />
        </section>
    );
}

export { HeroSection };