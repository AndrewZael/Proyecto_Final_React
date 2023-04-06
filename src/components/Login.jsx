import React from 'react';
import { NavLink } from 'react-router-dom';
import google from '../assets/img/google.svg';
import { getAuth, signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useContext } from 'react';
import Context from '../contexts/Context';
import { useState } from 'react';
import UserObj from '../shared/User';
import AlertMessage from './AlertMessage';
import Preload from './Preload';

const Login = ({ only = false }) => {
  
  const db = getDatabase();
  const { setUser, setUserLogin } = useContext(Context);
  const [errorForm, setErrorForm] = useState(false);
  const [preload, setPreload] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const auth = getAuth();

  const LoginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        const userData = getUserData(user);
        if(userData.user_id !== user.uid){
            setUser(UserObj(user));
            SaveUserDatabase(user);
        }else{
            setUser(userData);
        }

        setUserLogin(true);
    }).catch(err => {
        console.log(err);
    });
  }

  const LoginEmailPassword = (e) => {
    setErrorForm(false);
    setPreload(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword).then(credentials => {
        const userData = getUserData(credentials.user);
        if(userData.user_id !== credentials.user.uid){
            setUser(UserObj(credentials.user));
            SaveUserDatabase(credentials.user);
        }else{
            setUser(userData);
        }
        setUserLogin(true);
        setPreload(false);
    }).catch(error => {
        setErrorForm(true);
        setPreload(false);
    });
  }

  const getUserData = (user) => {
    onValue(ref(db, `users/${user.uid}`), snapshot => {
        return snapshot.val();
    });
  }

  const SaveUserDatabase = (user) => {
    set(ref(db, `users/${user.uid}`), UserObj(user));
  }

  return (
    <section title='Login' className={`py-3 px-4 rounded border bg-light position-relative w-100 ${only && 'shadow border-primary'}`}>
        <header className='text-center mb-4'>
            <span className='p-4 bg-secondary rounded-circle d-inline-block'></span>
            <span className='fw-bold d-block'>Ingresa con tu cuenta</span>
        </header>
        <form>
            <label htmlFor='email' className='mb-1 small'>Usuario o Email</label>
            <div className="input-group mb-3">
                <input type='email' id='email' className="form-control border" placeholder="mail@mail.com" aria-label="Email" autoComplete='email' required
                onKeyUp={e => setUserEmail(e.target.value)} />
            </div>
            <label htmlFor='password' className='mb-1 small'>Contraseña</label>
            <div className="input-group mb-3 flex-column">
                <input type='password' id='password' className="form-control border w-100" placeholder="*********" aria-label="Contraseña" autoComplete='current-password' required pattern='[a-zA-Z0-9]{6,}' onKeyUp={e => setUserPassword(e.target.value)} />
                <small className='text-gray text-small d-block mt-1'>Mínimo 6 caracteres y solo debe contener números y letras.</small>
            </div>

            {
                errorForm ? <AlertMessage icon='error' variant='danger' text="Correo o contraseña incorrecta " /> : null
            }

            <NavLink to='/login' className='btn link d-block small'>Recuperar contraseña</NavLink>
            <button onClick={e => LoginEmailPassword(e)} className='btn btn-auxiliar-2 rounded-pill w-100 py-2 my-2' disabled={preload}>
                { preload ? <Preload variant='light' size='sm' /> :  'INGRESAR' }
            </button>
            <span className='d-block my-2 text-center'>o</span>

            { !preload ?
                <button type='button' onClick={() => LoginGoogle()} className='btn w-100 mb-4'>
                    <img src={google} alt='Login con Google' className='me-2' />
                    Login con Google
                </button> : null
            }

            <footer className='p-2 border rounded text-center mb-2 bg-white'>
                ¿Nuevo en ******? <NavLink to='/registro' className='link'>Regístrate aquí</NavLink>
            </footer>
        </form>
    </section>
  )
}

export default Login;
