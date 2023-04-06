import React, { useContext } from 'react';
import Card from '../components/Card';
import HeadProfile from '../components/HeadProfile';
import Context from '../contexts/Context';
import AlertMessage from '../components/AlertMessage';
import Icon from '../components/Icon';
import { Link } from 'react-router-dom';

const ProfileMyPosts = () => {
  const { user } = useContext(Context);
  return (
    <>
        <HeadProfile title='Mis publicaciones' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' />
        {
          user.publications?.length === 0 || user.publications === undefined ?
          <> 
          <AlertMessage icon='sentiment_dissatisfied' text='Aún no has creado ninguna publicación, empieza ya' variant='info' />
          <div className='d-flex justify-content-center my-4'>
            <Link to='/perfil/nueva-publicacion' className='btn btn-primary d-flex'>
              <Icon icon='add' color='light' />
              <span className='ms-2'>Crear publicación</span>
            </Link>
          </div>
          </> 
         :
        <div className='row mt-5 pt-5'>
            {
              user.publications?.map(publication => (
                <div key={publication.publication_id} className='col-12 col-sm-6 col-md-12 col-lg-6 mb-5 pb-4'>
                  <Card obj={publication} />
                </div>
              ))
            }
        </div>
        }
    </>
  )
}

export default ProfileMyPosts;
