import React from 'react';
import Card from '../components/Card';
import HeadProfile from '../components/HeadProfile';

const ProfileFavorites = () => {
  return (
    <>
        <HeadProfile title='Mis favoritos' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' />
        <div className='row mt-5 pt-5'>
            <div className='col-12 col-sm-6 col-md-12 col-lg-6 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-12 col-lg-6 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-12 col-lg-6 mb-5 pb-4'><Card /></div>
        </div>
    </>
  )
}

export default ProfileFavorites;
