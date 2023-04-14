import React from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useContext } from 'react';
import Context from '../contexts/Context';
import { useState } from 'react';
import userObj from '../shared/User';
import AlertMessage from './AlertMessage';
import Preload from './Preload';
import GoogleButton from './GoogleButton';
import Eye from './Eye';

const Login = ({ only = false }) => {
  
  const db = getDatabase();
  const { setUser, setUserLogin } = useContext(Context);
  const [errorForm, setErrorForm] = useState(false);
  const [preload, setPreload] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const auth = getAuth();

  const LoginEmailPassword = (e) => {
    setErrorForm(false);
    setPreload(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword).then(credentials => {
        getUserData(credentials.user).then(userData => {
            if(userData.user_id !== credentials.user.uid){
                setUser(userObj(credentials.user));
                SaveUserDatabase(credentials.user);
            }else{
                setUser(userData);
            }
        }).catch(error => {

        });
        setUserLogin(true);

    }).catch(error => {
        setErrorForm(true);
    }).finally(() => {
        setPreload(false);
    });
  }

  const getUserData = (user) => {
    return  new Promise((resolve, reject) => {
        onValue(ref(db, `users/${user.uid}`), snapshot => {
            resolve(snapshot.val());
       }, error => {
            reject(error);
          }
       )
    })
  }

  const SaveUserDatabase = (user) => {
    set(ref(db, `users/${user.uid}`), userObj(user));
  }

  return (
    <section title='Login' className={`py-3 px-4 rounded border bg-light position-relative w-100 ${only && 'shadow border-primary'}`}>
        <header className='text-center mb-4'>
            <span className='material-icons-outlined h1 mb-0'>face</span>
            <span className='fw-bold d-block'>Ingresa con tu cuenta</span>
        </header>
        <form>
            <label htmlFor='email' className='mb-1 small'>Email</label>
            <div className="input-group mb-3">
                <input type='email' id='email' className="form-control border" placeholder="mail@mail.com" aria-label="Email" autoComplete='email' required
                onKeyUp={e => setUserEmail(e.target.value)} />
            </div>
            <label htmlFor='password' className='mb-1 small'>Contraseña</label>
            <div className="input-group mb-3">
                <input type={passwordVisible ? 'text' : 'password'} id='password' className="form-control border border-end-0" placeholder="*********" aria-label="Contraseña" autoComplete='current-password' required pattern='[a-zA-Z0-9]{6,}' onKeyUp={e => setUserPassword(e.target.value)} />
                <Eye 
                    passwordVisible={passwordVisible} 
                    setPasswordVisible={setPasswordVisible}  />
            </div>

            {
                errorForm ? <AlertMessage icon='error' variant='danger' text="Correo o contraseña incorrecta " /> : null
            }

            <NavLink className='btn link d-block small'>Recuperar contraseña</NavLink>
            <button onClick={e => LoginEmailPassword(e)} className='btn btn-auxiliar-2 rounded-pill w-100 py-2 my-2' disabled={preload}>
                { preload ? <Preload variant='light' size='sm' /> :  'INGRESAR' }
            </button>
            <span className='d-block my-2 text-center'>o</span>

            { !preload ?
                <GoogleButton /> : null
            }

            <footer className='p-2 border rounded text-center mb-2 bg-white'>
                ¿Nuevo en <b>CommUnity</b>? <NavLink to='/registro' className='link'>Regístrate aquí</NavLink>
            </footer>
        </form>
    </section>
  )
}

export default Login;
