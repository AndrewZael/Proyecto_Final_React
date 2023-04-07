import React from 'react';
import { useContext } from 'react';
import Icon from './Icon';
import Context from '../contexts/Context';
import { getDatabase, set, ref } from 'firebase/database';

const Fav = ({ id, fav = false }) => {
  const { user, setUser, userLogin, publications } = useContext(Context);

  const favorite = () => {
    const publication = publications.find(p => p.publication_id === id);
    if(!Array.isArray(user.favorites)){
        user.favorites = [];
    }
    const favExists = user.favorites.some(f => f.publication_id === id);
    if(!favExists){
        user.favorites.unshift(publication);
    }else{
        user.favorites = user.favorites.filter(f => f.publication_id !== id);
    }
    setUser(user);
    set(ref(getDatabase(), `users/${user.user_id}`), user).then(() => {
      // Exito
    }).catch(error => {
      // error
    });
  };

  return (
    <>
    {userLogin ?
      <button onClick={favorite} title={fav ? 'Remover de mis favoritos' : 'Añadir a mis favoritos'} className='btn-fav btn px-2'>
        <Icon icon="favorite" color={fav ? 'danger' : 'primary'} />
      </button> : null
    }
    </>
  )
}

export default Fav;
