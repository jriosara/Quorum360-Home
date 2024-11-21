import React from 'react';
import logo  from '../assets/image/Q360.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                    <img src= {logo} alt='Quorum360 logo' />
            </div>
            
            <nav className='header-nav'>
                <ul className='nav-links'>
                    <li>
                        <Link className='items' to='/'>Inicio</Link>  
                    </li>
                    <li>
                        <Link className='items' to='/'>Quienes somos</Link>
                    </li>
                    <li>
                        <Link className='items' to='/'>Comunidad</Link>
                    </li>
                    <li>
                        <Link className='items' to='/'>Servicios</Link>
                    </li>
                    <li>
                        <Link className='items' to='/'>Soporte</Link>
                    </li>
                    <li>
                        <Link className='items' to='/'>Contactanos</Link>
                    </li>
                </ul>
            </nav>

            <div className='auth-buttons'>
                    <button className='login'>Iniciar sesión</button>
                    <button className='signup'>Registro</button>
            </div>
        </header>
    );
}

export { Header };