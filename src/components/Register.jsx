import React, { useState, useContext } from 'react'
import GoogleButton from './GoogleButton';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, set, ref, } from 'firebase/database';
import userObj from '../shared/User';
import Context from '../contexts/Context';
import openToast from '../shared/OpenToast';
import Eye from './Eye';

const Register = ({ only }) => {

  const db = getDatabase();  
  const auth = getAuth();  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { setUser, setInfoFeedBack } = useContext(Context);

  const registerUser = async e => {
    e.preventDefault();
    try{
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        const currentUser = credentials.user;
        setUser(userObj(currentUser));
        set(ref(db, `users/${currentUser.uid}`), userObj(currentUser));
    }catch{
        setInfoFeedBack(openToast(
            'danger',
            '¡Ups! Lo sentimos',
            'No hemos podido completar tu registro, correo ya existe.'
        ));   
    }
  }
  
  return (
    <section title='Regitro' className={`py-3 px-4 rounded border bg-light position-relative w-100 ${only && 'shadow border-primary'}`}>
        <header className='text-center mb-4'>
            <span className='material-icons-outlined h1 mb-0'>add_reaction</span>
            <span className='fw-bold d-block'>Crea tu cuenta</span>
        </header>
        <form onSubmit={registerUser}>
            <label htmlFor='email' className='mb-1 small'>Email</label>
            <div className="input-group mb-3">
                <input type='email' onKeyUp={e => setEmail(e.target.value)} id='email' className="form-control border" placeholder="mail@mail.com" aria-label="Email" autoComplete='email' required />
            </div>
            <label htmlFor='password' className='mb-1 small'>Contraseña</label>
            <div className="input-group mb-3">
                <input type={passwordVisible ? 'text' : 'password'} onKeyUp={e => setPassword(e.target.value)} id='password' className="form-control border border-end-0" placeholder="*********" aria-label="Contraseña" autoComplete='current-password' 
                pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$' required />
                <Eye 
                    passwordVisible={passwordVisible} 
                    setPasswordVisible={setPasswordVisible}  />
                <small className='text-gray text-small d-block mt-1'>Mínimo 6 caracteres y solo debe contener números y letras.</small>
            </div>

            <button className='btn btn-auxiliar-2 rounded-pill w-100 py-2 my-2'>
                REGISTRATE
            </button>
            <span className='d-block my-2 text-center'>o</span>
        </form>

        <GoogleButton />

    </section>
  )
}

export default Register;
