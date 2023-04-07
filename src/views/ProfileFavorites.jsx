import React, { useContext } from 'react';
import Card from '../components/Card';
import HeadProfile from '../components/HeadProfile';
import Context from '../contexts/Context';
import AlertMessage from '../components/AlertMessage';

const ProfileFavorites = () => {
  const { user } = useContext(Context);
  return (
    <>
        <HeadProfile title='Mis favoritos' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' />
       {
         user.favorites?.length === 0 || user.favorites === undefined ? 
         <AlertMessage icon='sentiment_dissatisfied' text='No has agregado favoritos a tu lista' variant='info' /> 
         :
        <div className='row mt-5 pt-5'>
            {
              user.favorites?.map(fav => (
                <div key={fav.publication_id} className='col-12 col-sm-6 col-md-12 col-lg-6 mb-5 pb-4'>
                  <Card obj={fav} />
                </div>
              ))
            }   
        </div>
        }
    </>
  )
}

export default ProfileFavorites;
