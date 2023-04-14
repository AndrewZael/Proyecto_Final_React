import React, { useContext } from 'react';
import google from '../assets/img/google.svg';
import UserObj from '../shared/User';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase, ref, set, onValue } from "firebase/database";
import Context from '../contexts/Context';
import { useNavigate } from 'react-router-dom';

const GoogleButton = () => {
    const navigate = useNavigate();
    const { setUser, setUserLogin } = useContext(Context);
    const db = getDatabase();
    const auth = getAuth();
    const LoginGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            getUserData(user).then(userData => {
                if(userData.user_id === user.uid){
                    console.log('usuario existe');
                    setUser(userData);
                }else{
                    console.log('Usuario nuevo');
                    setUser(UserObj(user));
                    SaveUserDatabase(user);
                }
                setUserLogin(true);
                navigate('/');             
            }).catch(() => {
                
            });

        }).catch(err => {
            console.log(err);
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
        set(ref(db, `users/${user.uid}`), UserObj(user));
    }
 
  return (
    <button type='button' onClick={() => LoginGoogle()} className='btn w-100 mb-4'>
        <img src={google} alt='Login con Google' className='me-2' />
        Login con Google
    </button>
  )
}

export default GoogleButton;
