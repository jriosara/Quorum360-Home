import React from "react";
import logofooter  from '../assets/image/Q360.png';
import facebook from '../assets/iconos/facebook.png';
import instagram from '../assets/iconos/instagram.png';
import esc from '../assets/iconos/gorjeo.png';
import linkedin from '../assets/iconos/linkedin.png';
import youtube from '../assets/iconos/youtube.png';
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="container">
            <div className="footer-wrapper">
                <section className="footer-top">
                    <div className="footer-headline">
                        <h2>Subcribirse a nuestro Newsletter</h2>
                        <p>Manténgase al día con nuestras noticias y artículos.</p>
                    </div>
                    <div className="footer-subscribe">
                        <input className="input" type="email" spellCheck="false" placeholder="Correo electrónico"/>
                        <button className="bt" type="submit">Subscribirse</button>
                    </div>
                </section>

                <div className="footer-columns">
                    <section className="footer-logo">
                        <img src={logofooter} alt="Logo" />
                        <p></p>
                    </section>

                    <section>
                        <h3 className="title">Casos de Uso</h3>
                        <ul>
                            <li>
                                <Link to="/" title="Inicio">Ley 676</Link>
                            </li>
                            <li>
                                <Link to="/about" title="Acerca de">Codigo de Convivencia</Link>
                            </li>
                            <li>
                                <Link to="/services" title="Servicios">Propiedad Horizontal</Link>
                            </li>
                            <li>
                                <Link to="/contact" title="Contacto">Medio Ambiente</Link>
                            </li>
                            <li>
                                <Link to="/contact" title="Contacto">Normas de buenas convivencias</Link>
                            </li>
                        </ul>
                    </section>

                    <section>
                    <h3 className="title">Comunidad</h3>
                        <ul>
                            <li>
                                <Link to="/" title="Inicio">Blog</Link>
                            </li>
                            <li>
                                <Link to="/about" title="Acerca de">Encuesta</Link>
                            </li>
                            <li>
                                <Link to="/services" title="Servicios">Foro</Link>
                            </li>
                            <li>
                                <Link to="/contact" title="Contacto">Soporte</Link>
                            </li>
                        </ul>
                    </section>

                    <section>
                    <h3 className="title">Servicios</h3>
                        <ul>
                            <li>
                                <Link to="/" title="Inicio">Contratistas</Link>
                            </li>
                            <li>
                                <Link to="/about" title="Acerca de">Consultoria</Link>
                            </li>
                            <li>
                                <Link to="/services" title="Servicios">Cotiza con nosotros</Link>
                            </li>
                        </ul>
                    </section>
                </div>

                <hr />
            </div>

            <div className="social-bottom">
                <div className="social-links">
                    <ul>
                        <li>
                            <Link to="/" title="Facebook" target="_blank" rel="noopener noreferrer">
                            <img src= {facebook} alt="Facebook" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" title="Instagram" target="_blank" rel="noopener noreferrer">
                            <img src= {instagram} alt="Instagram" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" title="Esc" target="_blank" rel="noopener noreferrer">
                            <img src= {esc} alt="Exc" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <img src= {linkedin} alt="LinkedIn" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" title="YouTube" target="_blank" rel="noopener noreferrer">
                            <img src= {youtube} alt="YouTube" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-wrapper">
                    <small>
                    © Quorum360, Inc. {new Date().getFullYear()}. Todos los derechos reservados.
                    </small>
                </div>
            </div>
        </footer>
    );
}

export { Footer };