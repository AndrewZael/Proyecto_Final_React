import React, { useContext, useEffect } from 'react';
import Animation from '../components/Animation';
import Login from '../components/Login';
import Context from '../contexts/Context';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(Context);
  useEffect(() => {
     userLogin && navigate('/');
  }, [navigate, userLogin]);

  return (
    <>
    <Animation />
    <main className='mx-auto container min-vh-100 mb-5'>
       <div className='d-flex col-4 mx-auto min-vh-100 justify-content-center align-items-center'>
            <Login only={true} />
       </div>
    </main>
    </>
  )
}

export default LoginPage;
