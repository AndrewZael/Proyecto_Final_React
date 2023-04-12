import React, { useContext } from 'react';
import Instagram from '../components/icons-svg/Instagram';
import Facebook from '../components/icons-svg/Facebook';
import Linkedin from '../components/icons-svg/Linkedin';
import Context from '../contexts/Context';
import { Link, NavLink } from 'react-router-dom';
import Imagotipo from './Imagotipo';

const Footer = () => {
  const { userLogin } = useContext(Context);   
  return (
    <footer className='bg-primary px-3 py-4'>
       <div className='row mx-0'>
            <div className='col-12 col-lg-8 col-xl-6 row mx-0 mb-4'>
                <div className='col-12 col-sm-6 col-md-3 mb-3 mb-md-0 d-flex align-items-center'>
                    <Imagotipo color='#FCFCFC' w={100} />
                </div>
                <nav className='navigation col-12 col-sm-6 col-md-3 mb-3 mb-md-0'>
                    <ul className='text-light'>
                        <li><NavLink to='/' className='text-light small'>
                            HOME</NavLink></li>
                        <li><NavLink to='/publicaciones' className='text-light small'>PUBLICACIONES</NavLink></li>
                    </ul>
                </nav>
                {
                    userLogin ? 
                    <nav className='navigation col-12 col-sm-6 col-md-3 mb-3 mb-md-0'>
                        <ul className='text-light'>
                            <li><NavLink to='/perfil/mis-datos' className='text-light text-decoration-none small'>MI PERFIL</NavLink></li>
                            <li><NavLink to='/perfil/favoritos' className='text-light text-decoration-none small'>
                                MIS FAVORITOS</NavLink></li>
                            <li><NavLink to='/perfil/mis-publicaciones' className='text-light text-decoration-none small'>
                                MIS PUBLICACIONES</NavLink></li>
                            <li><NavLink to='/perfil/nueva-publicacion' className='text-light text-decoration-none small'>
                                NUEVA PUBLICACIÓN</NavLink></li>
                        </ul>
                    </nav> : null
                }
                <nav className='col-12 col-sm-6 col-md-3 mb-3 mb-md-0'>
                    <ul className='text-light'>
                        <li><a href='https://www.google.com/' className='text-light text-decoration-none small'>CONVIERTETE EN PUBLICADOR</a></li>
                    </ul>
                </nav>
            </div>
            <div className='col-12 col-lg-4 col-xl-6 d-flex flex-column flex-sm-row flex-xl-column align-items-center align-items-xl-end justify-content-between mb-4'>
                <nav className='d-flex flex-column flex-sm-row flex-lg-column flex-xl-row gap-2 mb-4 mb-sm-0'>
                    {
                        !userLogin ? 
                        <>
                            <Link to='/registro' className='btn btn-sm px-3 rounded-pill btn-outline-light'>REGISTRATE</Link>
                            <Link to='/login' className='btn btn-sm px-3 rounded-pill btn-outline-light'>INGRESA</Link>
                        </> : null
                    }
                    {
                        userLogin ? 
                        <a href='https://www.google.com/' className='btn btn-sm px-3 rounded-pill btn-auxiliar text-light'>CONVIERTETE EN PRO</a> : null
                    }
                </nav>
                <nav className='d-flex gap-2 mb-4 mb-sm-0'>
                    <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='link-icon'><Instagram color="#fcfcfc" size={32} /></a>
                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' className='link-icon'><Facebook color="#fcfcfc" size={32} /></a>
                    <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' className='link-icon'><Linkedin color="#fcfcfc" size={32} /></a>
                </nav>
            </div>
       </div>
       <nav className='navigation d-flex justify-content-center gap-3'>
            <NavLink to='/politicas-de-privacidad' className='text-light small'>Políticas de privacidad</NavLink>
            <span className='text-light'>&bull;</span>
            <NavLink to='/terminos-y-condiciones' className='text-light small'>Términos y condiciones</NavLink>
       </nav>
    </footer>
  )
}

export default Footer;
