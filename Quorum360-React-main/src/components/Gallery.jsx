import React from 'react';
import imagen1 from '../assets/image/image1.png';
import imagen2 from '../assets/image/image2.png';
import imagen3 from '../assets/image/image3.png';
import imagen4 from '../assets/image/image4.png';
import imagen5 from '../assets/image/image5.png';
import '../styles/Gallery.css';

function Gallery() {
    return (
        <section className="gallery">
            <div className='gallery-slider'>
                <div className='gallery-image'>
                    <img src={ imagen1 } alt='imagen1' className='gallery-image' />
                </div>
                <div className='gallery-image'>
                    <img src={ imagen2 } alt='imagen2' className='gallery-image' />
                </div>
                <div className='gallery-image'>
                    <img src={ imagen3 } alt='imagen3' className='gallery-image' />
                </div>
                <div className='gallery-image'>
                    <img src={ imagen4 } alt='imagen4' className='gallery-image' />
                </div>
                <div className='gallery-image'>
                    <img src={ imagen5 } alt='imagen5' className='gallery-image' />
                </div>
            </div>
        </section>
    );
}

export { Gallery };