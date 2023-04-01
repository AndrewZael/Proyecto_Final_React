import React from 'react';
import Instagram from '../components/icons-svg/Instagram';
import Facebook from '../components/icons-svg/Facebook';
import Linkedin from '../components/icons-svg/Linkedin';

const Footer = () => {
  return (
    <footer className='bg-primary px-3 py-4'>
       <div className='row mx-0'>
            <div className='col-12 col-lg-8 col-xl-6 row mx-0 mb-4'>
                <div className='col-12 col-sm-6 col-md-3 mb-3 mb-md-0'>
                    <span className='bg-light d-flex justify-content-center align-items-center rounded-circle d-inline-block' 
                    style={{ width: '150px', height: '150px' }}>
                        LOGO
                    </span>
                </div>
                <nav className='col-12 col-sm-6 col-md-3 mb-3 mb-md-0'>
                    <ul className='text-light'>
                        <li><a href='https://www.google.com/' className='text-light text-decoration-none small'>HOME</a></li>
                        <li><a href='https://www.google.com/' className='text-light text-decoration-none small'>PUBLICACIONES</a></li>
                    </ul>
                </nav>
                <nav className='col-12 col-sm-6 col-md-3 mb-3 mb-md-0'>
                    <ul className='text-light'>
                        <li><a href='https://www.google.com/' className='text-light text-decoration-none small'>MI PERFIL</a></li>
                        <li><a href='https://www.google.com/' className='text-light text-decoration-none small'>MIS FAVORITOS</a></li>
                        <li><a href='https://www.google.com/' className='text-light text-decoration-none small'>MIS PUBLICACIONES</a></li>
                        <li><a href='https://www.google.com/' className='text-light text-decoration-none small'>NUEVA PUBLICACIÓN</a></li>
                    </ul>
                </nav>
                <nav className='col-12 col-sm-6 col-md-3 mb-3 mb-md-0'>
                    <ul className='text-light'>
                        <li><a href='https://www.google.com/' className='text-light text-decoration-none small'>CONVIERTETE EN PUBLICADOR</a></li>
                    </ul>
                </nav>
            </div>
            <div className='col-12 col-lg-4 col-xl-6 d-flex flex-column flex-sm-row flex-xl-column align-items-center align-items-xl-end justify-content-between mb-4'>
                <nav className='d-flex flex-column flex-sm-row flex-lg-column flex-xl-row gap-2 mb-4 mb-sm-0'>
                    <a href='https://www.google.com/' className='btn btn-sm px-3 rounded-pill btn-outline-light'>REGISTRATE</a>
                    <a href='https://www.google.com/' className='btn btn-sm px-3 rounded-pill btn-outline-light'>INGRESA</a>
                    <a href='https://www.google.com/' className='btn btn-sm px-3 rounded-pill btn-auxiliar text-light'>CONVIERTETE EN PRO</a>
                </nav>
                <nav className='d-flex gap-2 mb-4 mb-sm-0'>
                    <a href='https://www.google.com/'><Instagram color="#fcfcfc" size={32} /></a>
                    <a href='https://www.google.com/'><Facebook color="#fcfcfc" size={32} /></a>
                    <a href='https://www.google.com/'><Linkedin color="#fcfcfc" size={32} /></a>
                </nav>
            </div>
       </div>
       <nav className='d-flex justify-content-center gap-3'>
            <a href='https://www.google.com/' className='text-light small'>Políticas de privacidad</a>
            <span className='text-light'>&bull;</span>
            <a href='https://www.google.com/' className='text-light small'>Términos y condiciones</a>
       </nav>
    </footer>
  )
}

export default Footer;
