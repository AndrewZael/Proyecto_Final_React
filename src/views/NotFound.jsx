import React from 'react';
import Message from '../components/Message';
import notFound from '../assets/img/not-found.svg'

const NotFound = () => {
  return (
    <main className='row mx-0 min-vh-100'>
       <Message img={notFound}
        title='Página no encontrada' 
        subtitle='No hay nada en esta ubicación, <br />por favor vuelve para seguir navegando.' 
        textBtn='HOME' 
        link='/' />
    </main>
  )
}

export default NotFound;
