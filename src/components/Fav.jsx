import React from 'react';
import { useContext } from 'react';
import Icon from './Icon';
import Context from '../contexts/Context';

const Fav = () => {
  const { userLogin } = useContext(Context);
  return (
    <>
    {userLogin ?
      <button title='Añadir a favoritos' className='btn px-2 text-primary'>
        <Icon icon="favorite" />
      </button> : null
    }
    </>
  )
}

export default Fav;
