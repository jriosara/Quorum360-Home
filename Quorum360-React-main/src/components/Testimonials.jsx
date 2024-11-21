import React from 'react';
import test1 from '../assets/image/test1.png';
import test2 from '../assets/image/test2.png';
import test3 from '../assets/image/test3.png';
import test4 from '../assets/image/test4.png';
import test5 from '../assets/image/test5.png';
import test6 from '../assets/image/test6.png';
import '../styles/Testimonials.css';

function Testimonials() {
    return (
        <section className="testimonials">
            <h2>Nuestros Testimonios</h2>
            <p>Esto es lo que nuestros clientes tienen que decir sobre nosotros</p>
            <div className="testimonial-grid">
                {[
                    {
                        img: test1,
                        name: 'Juan Martínez',
                        profession: 'Administrador de Propiedad Horizontal',
                        feedback: 'Con Quorum360, mi trabajo ha mejorado notablemente. El sistema me permite llevar el control de todos los procesos administrativos de manera clara y eficiente. Puedo gestionar los pagos y reportes en tiempo real, lo que me ahorra mucho tiempo y evita errores. Definitivamente lo recomiendo a otros administradores.'
                    },
                    {
                        img: test2,
                        name: 'María Fernanda Ruiz',
                        profession: 'Propietaria en Copropiedad',
                        feedback: 'Quorum360 me ha permitido estar más involucrada en la gestión de mi edificio. Antes era difícil estar al tanto de las reuniones y decisiones importantes, pero ahora todo está organizado y accesible desde la plataforma. Además, los pagos y consultas los hago fácilmente desde mi celular.'
                    },
                    {
                        img: test3,
                        name: 'Andrés Pérez',
                        profession: 'Ingeniero de Sistemas',
                        feedback: 'Como ingeniero de sistemas, puedo decir que Quorum360 tiene una infraestructura sólida y bien diseñada. Es confiable, segura y fácil de integrar con otros sistemas que usamos en la copropiedad. Me ha impresionado su nivel de soporte técnico y las actualizaciones continuas.'
                    },
                    {
                        img: test4,
                        name: 'Paula López',
                        profession: 'Gerente de Proyectos Inmobiliarios',
                        feedback: 'Quorum360 ha sido clave en varios proyectos que gestiono. Nos permite coordinar mejor con las administraciones de las propiedades, y el manejo de la información es impecable. Es un software que definitivamente agiliza los procesos y mejora la comunicación entre las partes.'
                    },
                    {
                        img: test5,
                        name: 'Carlos Gómez',
                        profession: 'Abogado',
                        feedback: 'Desde el punto de vista legal, Quorum360 ha sido una herramienta invaluable. Facilita la gestión documental y permite un registro claro de las decisiones en las asambleas, lo que es fundamental para evitar disputas. Además, cumple con todas las normativas vigentes.'
                    },
                    {
                        img: test6,
                        name: 'Laura González',
                        profession: 'Contadora Publica',
                        feedback: 'Para la contabilidad de las copropiedades, Quorum360 es la herramienta ideal. Me encanta cómo simplifica la generación de estados financieros y facilita la conciliación de cuentas. Además, la interfaz es muy intuitiva, lo que hace que el trabajo sea más rápido y preciso.'
                    }
                ].map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.img} alt={`${testimonial.name}`} className='testimonial-img' />
                        <div className='content'>
                            <blockquote className='name'>{testimonial.name}</blockquote>
                            <h5 className='profession'>{testimonial.profession}</h5>
                            <small className='description'>{testimonial.feedback}</small>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export { Testimonials };