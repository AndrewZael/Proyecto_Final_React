import React from 'react';
import Animation from '../components/Animation';
import Register from '../components/Register';

const RegisterPage = () => {
  return (
    <>
    <Animation />
    <main className='mx-auto container min-vh-100'>
       <div className='d-flex col-4 mx-auto min-vh-100 justify-content-center align-items-center'>
            <Register only={true} />
       </div>
    </main>
    </>
  )
}

export default RegisterPage;
