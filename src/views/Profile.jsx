import React from 'react';
import HeadPage from '../components/HeadPage';
import MenuPerfil from '../components/MenuPerfil';
import { Routes, Route, Navigate  } from 'react-router-dom';
import ProfileData from './ProfileData';
import ProfileFavorites from './ProfileFavorites';
import ProfileMyPosts from './ProfileMyPosts';
import ProfileNewPost from './ProfileNewPost';
import { useContext } from 'react';
import Context from '../contexts/Context';

const Profile = () => {

  const { user } = useContext(Context);

  return (
    <main>
       <HeadPage title={`¡Hola! ${user?.username}`} subtitle='Bienvenido/a a tu perfil personal. Aquí puedes ver y administrar <br />tus datos personales, tus publicaciones y favoritos.' />
       <section className='col-12 col-lg-9 col-xxl-7 pb-5 row mx-auto px-4 pt-5 mt-4' title='Mis datos'>
           <div className='col-12 col-md-4'>
                <MenuPerfil />
           </div>
           <div className='col-12 col-md-8'>
                <Routes>
                    <Route path='mis-datos' element={<ProfileData />} />
                    <Route path='favoritos' element={<ProfileFavorites />} />
                    <Route path='mis-publicaciones' element={<ProfileMyPosts />} />
                    <Route path='nueva-publicacion' element={<ProfileNewPost />} />
                    <Route path='*' element={<Navigate to='/perfil/mis-datos' />} />
                </Routes>
           </div>
       </section>
    </main>
  )
}

export default Profile;
