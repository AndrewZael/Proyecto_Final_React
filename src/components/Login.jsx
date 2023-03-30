import React from 'react';
import { NavLink } from 'react-router-dom';
import google from '../assets/img/google.svg';

const Login = () => {
  return (
    <section title='Login' className='p-3 rounded border bg-light'>
        <header className='text-center mb-4'>
            <span className='p-4 bg-secondary rounded-circle d-inline-block'></span>
            <span className='fw-bold d-block'>Ingresa con tu cuenta</span>
        </header>
        <form>
            <label htmlFor='email' className='mb-1 small'>Usuario o Email</label>
            <div className="input-group mb-3">
                <input type='email' id='email' className="form-control border" placeholder="mail@mail.com" aria-label="Email" autoComplete='email' />
            </div>
            <label htmlFor='password' className='mb-1 small'>Contraseña</label>
            <div className="input-group mb-3">
                <input type='password' id='password' className="form-control border" placeholder="*********" aria-label="Contraseña" autoComplete='current-password' />
            </div>

            <NavLink to='/login' className='btn link d-block small'>Recuperar contraseña</NavLink>
            <button type='button' className='btn btn-auxiliar-2 rounded-pill w-100 py-2 my-2'>
                INGRESAR
            </button>
            <span className='d-block my-2 text-center'>o</span>
            <button className='btn w-100 mb-4'>
                <img src={google} alt='Login con Google' className='me-2' />
                Login con Google
            </button>
            <footer className='p-2 border rounded text-center mb-2'>
                ¿Nuevo en ******? <NavLink to='/' className='link'>Regístrate aquí</NavLink>
            </footer>
        </form>
    </section>
  )
}

export default Login;
