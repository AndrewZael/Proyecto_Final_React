import React from 'react';
import Animation from '../components/Animation';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <>
    <Animation />
    <main className='mx-auto container min-vh-100'>
       <div className='d-flex col-4 mx-auto min-vh-100 justify-content-center align-items-center'>
            <Login />
       </div>
    </main>
    </>
  )
}

export default LoginPage;
