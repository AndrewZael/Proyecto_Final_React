import React, { useEffect, useContext } from 'react';
import Animation from '../components/Animation';
import Register from '../components/Register';
import { useNavigate } from 'react-router-dom';
import Context from '../contexts/Context';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(Context);
  useEffect(() => {
     userLogin && navigate('/');
  }, [navigate, userLogin]);
  return (
    <>
    <Animation />
    <main className='mx-auto container min-vh-100 mb-5'>
       <div className='d-flex col-12 col-md-7 col-lg-5 col-xl-4 mx-auto min-vh-100 justify-content-center align-items-center'>
            <Register only={true} />
       </div>
    </main>
    </>
  )
}

export default RegisterPage;
