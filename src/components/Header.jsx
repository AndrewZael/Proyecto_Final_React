import React, { useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import ItemMenu from './ItemMenu';
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from 'react';
import Context from '../contexts/Context';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

const Header = () => {

  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();
  const { 
    user, 
    setUser, 
    userLogin, 
    setUserLogin,
    setPublications,
    setFilteredList
  } = useContext(Context);
  const location = useLocation();

  // Cierra sesión
  const logout = () => {
    auth.signOut().then(() => {
       setUser({});
       setUserLogin(false);
       navigate('/');
    }).catch(() => {
       
    });
  };

  // Verifica si el usuario ha hecho login en la plataforma
  useEffect(() => {
     auth.onAuthStateChanged(currentUser => {
       if(currentUser){
          setUserLogin(true);
          onValue(ref(db, `users/${currentUser.uid}`), snapshot => {
            setUser(snapshot.val());
          });
       }else{
        location.pathname.includes('perfil') && navigate('/');
       }
    })
  }, [location, auth, navigate, setUser, setUserLogin]);

  // Actualiza la información de publicaciones
  useEffect(() => {
      onValue(ref(db, 'publications'), snapshot => {
         const publications = [];
         snapshot.forEach(child => {
           const publication = child.val();
           publication.key = child.key;
           publications.push(publication);
         });
        setPublications(publications);
        setFilteredList(publications);
      });
  }, []);

  return (
    <header className={`main-header row py-3 mx-0 justify-content-between align-items-center border-auxiliar position-sticky top-0 start-0 bg-secondary border-bottom`}>
      <nav className='navigation col-6'>
        <ul className='p-0 m-0 list-unstyled d-flex'>
            <li className='me-3 align-items-center d-none d-sm-flex'>
              <span className='bg-light p-3 px-5 rounded'></span>
            </li>
            <li><NavLink to='/' className='text-decoration-none text-light d-inline-block me-3 small'>
                HOME
                </NavLink>
            </li>
            <li><NavLink to='/publicaciones' className='text-decoration-none text-light d-inline-block small'>
                PUBLICACIONES
                </NavLink>
            </li>
        </ul>
      </nav>

      { !userLogin ? 
        <nav className='col-6 d-flex justify-content-end'>
          <Link to='/registro' className='btn btn-sm btn-outline-light rounded-pill px-3'>REGISTRATE</Link>
          <Link to='/login' className='btn btn-sm btn-primary rounded-pill px-3 ms-2'>INGRESA</Link>
        </nav>
        :
        <div className='col-6 d-flex text-light justify-content-end align-items-center'>
          <small className='d-none d-sm-inline'>¡Hola! <b>{ user.username }</b></small>
          <Dropdown>
            <Dropdown.Toggle variant="none" className='text-light'>
              <span className="material-icons-outlined">manage_accounts</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <ItemMenu label="Mi perfil" icon="person" to='perfil/mis-datos' />
              <ItemMenu label="Mis favoritos" icon="favorite" to='perfil/favoritos' />
              <ItemMenu label="Mis publicaciones" icon="article" to='perfil/mis-publicaciones' />
              <ItemMenu label="Nueva publicación" icon="post_add" to='perfil/nueva-publicacion' />
              <button onClick={logout} className='btn d-flex text-decoration-none px-3 py-2 text-nowrap text-gray null w-100'>
                <span className="material-icons-outlined me-2">logout</span> 
                <span>Salir</span>
              </button>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      }

    </header>
  )
}

export default Header;
