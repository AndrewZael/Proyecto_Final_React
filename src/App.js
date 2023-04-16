import './assets/css/custom.css';
import './assets/css/style.scss';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './firebase';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './views/Detail';
import Publications from './views/Publications';
import Home from './views/Home';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import Profile from './views/Profile';
import Context from './contexts/Context';
import ModalInfoContact from './components/modals/ModalInfoContact';
import Feedback from './components/Feedback';
import ModalSubscription from './components/modals/ModalSubscription';
import NotFound from './views/NotFound';
import ModalFilters from './components/modals/ModalFilters';

function App() {

  const [showModalContact, setShowModalContact] = useState(false);
  const [showModalSub, setShowModalSub] = useState(false);
  const [showModalFilters, setShowModalFilters] = useState(false);
  const [modalRef, setModalRef] = useState('');
  const [userLogin, setUserLogin] = useState(false);
  const [user, setUser] = useState({});
  const [headerClass, setHeaderClass] = useState('');
  const [publications, setPublications] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [infoFeedBack, setInfoFeedBack] = useState({
    show: false,
    title: '',
    message: ''
  });

  const share = {
    showModalContact,
    setShowModalContact,
    showModalSub,
    setShowModalSub,
    showModalFilters,
    setShowModalFilters,
    user,
    setUser,
    userLogin,
    setUserLogin,
    publications,
    setPublications,
    filteredList,
    setFilteredList,
    infoFeedBack,
    modalRef,
    setModalRef,
    setInfoFeedBack,
    headerClass,
    setHeaderClass
  }

  return (
    <div className="App">
      <Context.Provider value={share}>
        <Feedback />
        <ModalInfoContact />
        <ModalFilters />
        <BrowserRouter>
            <ModalSubscription />
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/perfil/*' element={ <Profile /> }></Route>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/registro' element={<RegisterPage />} />
              <Route path='/detalle/:id' element={<Detail />} />
              <Route path='/publicaciones/' element={<Publications />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider> 
    </div>
  );
}

export default App;
