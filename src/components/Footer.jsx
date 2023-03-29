import React from 'react';
import instagram from '../assets/img/instagram.svg';
import facebook from '../assets/img/facebook.svg';
import linkedin from '../assets/img/linkedin.svg';

const Footer = () => {
  return (
    <footer className='bg-primary px-3 py-4'>
       <div className='row'>
            <div className='col-6 d-flex gap-3'>
                <div>
                    <span className='bg-light rounded-circle p-5 d-inline-block'>
                        LOGO
                    </span>
                </div>
                <nav>
                    <ul className='text-light'>
                        <li><a className='text-light text-decoration-none small'>HOME</a></li>
                        <li><a className='text-light text-decoration-none small'>PUBLICACIONES</a></li>
                        <li><a className='text-light text-decoration-none small'>SUSCRÍBETE</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className='text-light'>
                        <li><a className='text-light text-decoration-none small'>MI PERFIL</a></li>
                        <li><a className='text-light text-decoration-none small'>MIS FAVORITOS</a></li>
                        <li><a className='text-light text-decoration-none small'>MIS PUBLICACIONES</a></li>
                        <li><a className='text-light text-decoration-none small'>NUEVA PUBLICACIÓN</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className='text-light'>
                        <li><a className='text-light text-decoration-none small'>CONVIERTETE EN PUBLICADOR</a></li>
                    </ul>
                </nav>
            </div>
            <div className='col-6 d-flex flex-column align-items-end justify-content-between'>
                <nav className='d-flex gap-2'>
                    <a className='btn btn-sm px-3 rounded-pill btn-outline-light'>REGISTRATE</a>
                    <a className='btn btn-sm px-3 rounded-pill btn-outline-light'>INGRESA</a>
                    <a className='btn btn-sm px-3 rounded-pill btn-auxiliar text-light'>CONVIERTETE EN PRO</a>
                </nav>
                <nav className='d-flex gap-2'>
                    <a><img src={instagram} alt="Instagram" /></a>
                    <a><img src={facebook} alt="Facebook" /></a>
                    <a><img src={linkedin} alt="Linkedin" /></a>
                </nav>
            </div>
       </div>
       <nav className='d-flex justify-content-center gap-3'>
            <a className='text-light small'>Políticas de privacidad</a>
            <span className='text-light'>&bull;</span>
            <a className='text-light small'>Términos y condiciones</a>
       </nav>
    </footer>
  )
}

export default Footer;
