import './assets/css/custom.css';
import './assets/css/style.scss';
import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Footer from './components/Footer';
import Detail from './views/Detail';
import Publications from './views/Publications';
import Home from './views/Home';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import Profile from './views/Profile';
import ProfileData from './views/ProfileData';
import ProfileFavorites from './views/ProfileFavorites';
import ProfileMyPosts from './views/ProfileMyPosts';
import ProfileNewPost from  './views/ProfileNewPost';
import Context from './contexts/Context';
import ModalInfoContact from './components/modals/ModalInfoContact';

function App() {

  const [showModalContact, setShowModalContact] = useState(false);
  const share = {
    showModalContact,
    setShowModalContact
  }

  return (
    <div className="App">
      <Context.Provider value={share}>
        <ModalInfoContact />
        <BrowserRouter>
            <Header userLogin={true} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/perfil/' element={<Profile />} >
                <Route path='mis-datos' element={<ProfileData />} />
                <Route path='favoritos' element={<ProfileFavorites />} />
                <Route path='mis-publicaciones' element={<ProfileMyPosts />} />
                <Route path='nueva-publicacion' element={<ProfileNewPost />} />
              </Route>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/registro' element={<RegisterPage />} />
              <Route path='/detalle/:id' element={<Detail />} />
              <Route path='/publicaciones/' element={<Publications />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider> 
    </div>
  );
}

export default App;
