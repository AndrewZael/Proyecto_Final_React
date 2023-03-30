import React from 'react';
import { NavLink } from 'react-router-dom'
import ItemMenu from './ItemMenu';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {

  const [head, setHead] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY >= 65 ? setHead(true) : setHead(false);
    });
  });

  return (
    <header className={`main-header row mx-0 justify-content-between align-items-center border-auxiliar position-sticky top-0 start-0 ${head && 'bg-secondary border-bottom'}`}>
      <nav className='col-6'>
        <ul className='p-0 m-0 list-unstyled d-flex'>
            <li className='me-3 d-flex align-items-center'>
              <span className='bg-light p-3 px-5 rounded'></span>
            </li>
            <li><NavLink to='/' className='text-decoration-none text-light py-4 d-inline-block me-3 small'>
                HOME
                </NavLink>
            </li>
            <li><NavLink to='/publicaciones' className='text-decoration-none text-light py-4 d-inline-block small'>
                PUBLICACIONES
                </NavLink>
            </li>
            <li><NavLink to='/detail/1' className='text-decoration-none text-light py-4 d-inline-block small ms-3'>
                DETALLE
                </NavLink>
            </li>
        </ul>
      </nav>
      <nav className='col-6 d-flex justify-content-end d-none'>
        <button className='btn btn-sm btn-outline-light rounded-pill px-3'>REGISTRATE</button>
        <button className='btn btn-sm btn-primary rounded-pill px-3 ms-2'>INGRESA</button>
      </nav>

      <div className='col-6 d-flex text-light justify-content-end align-items-center'>
        <small>¡Hola! <b>Pedro Perez</b></small>
        <Dropdown>
          <Dropdown.Toggle variant="none" className='text-light'>
            <span className="material-icons-outlined">manage_accounts</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <ItemMenu label="Mi perfil" icon="person" />
            <ItemMenu label="Mis favoritos" icon="favorite" />
            <ItemMenu label="Mis publicaciones" icon="article" />
            <ItemMenu label="Nueva publicación" icon="post_add" />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header;
