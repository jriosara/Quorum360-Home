// src/pages/Home.js
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';

function Home() {
    return (
        <main>
            <HeroSection />
            <Gallery />
            <Testimonials />
        </main>
    );
}

export { Home };