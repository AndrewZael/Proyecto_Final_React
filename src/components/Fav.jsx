import React, { useContext } from 'react';
import Icon from './Icon';
import Context from '../contexts/Context';
import { getDatabase, set, ref } from 'firebase/database';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import openToast from '../shared/OpenToast';

const Fav = ({ id, fav = false }) => {
  const { user, setUser, userLogin, publications, setInfoFeedBack } = useContext(Context);

  const favorite = () => {
    const publication = publications.find(p => p.publication_id === id);
    if(!Array.isArray(user.favorites)){
        user.favorites = [];
    }
    const favExists = user.favorites.some(f => f.publication_id === id);
    if(!favExists){
        user.favorites.unshift(publication);
        setInfoFeedBack(openToast(
          true, 
          'success', 
          '¡Operación exitosa!', 
          `La publicación de ${publications.find(p => p.
          publication_id === id)?.username} ha sido agregada a tus favoritos.`));
    }else{
        user.favorites = user.favorites.filter(f => f.publication_id !== id);
        setInfoFeedBack(openToast(
          true, 
          'success', 
          '¡Operación exitosa!', 
          `La publicación de ${publications.find(p => p.
          publication_id === id)?.username} ha sido removida de tus favoritos.`));
    }
    setUser(user);
    set(ref(getDatabase(), `users/${user.user_id}`), user).then(() => {
       // exito
    }).catch(error => {
      // error
    });
  };

  return (
    <>
    {userLogin ?
      <>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>{fav ? 'Remover de mis favoritos' : 'Añadir a mis favoritos'}</Tooltip>}
      >
        <button onClick={favorite} title='' className='btn-fav btn px-2'>
          <Icon icon="favorite" color={fav ? 'danger' : 'primary'} />
        </button>
      </OverlayTrigger>
      </> : null
    }
    </>
  )
}

export default Fav;
